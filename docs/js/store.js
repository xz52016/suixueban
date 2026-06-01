/* ====== 穗学伴 · 数据持久化 (localStorage) ====== */

const STORE = {
  /** 获取年级数据命名空间 */
  _ns(grade) {
    return `suixue_${grade}`;
  },

  /** 保存一组答题记录 */
  saveResult(grade, chapter, answers) {
    const ns = this._ns(grade);
    const key = `${ns}_results`;
    const records = this._get(key, []);
    records.push({
      timestamp: Date.now(),
      chapter,
      answers,
      total: answers.length,
      correct: answers.filter(a => a.correct).length
    });
    // 只保留最近 500 条
    if (records.length > 500) records.splice(0, records.length - 500);
    this._set(key, records);

    // 同时更新掌握度
    this._updateMastery(grade, chapter, answers);
    // 更新错题
    this._updateWrongQuestions(grade, chapter, answers);
    // 更新打卡
    this._updateStreak();
  },

  /** 获取某年级全部答题记录 */
  getResults(grade) {
    return this._get(`${this._ns(grade)}_results`, []);
  },

  /** 获取最近 N 天的趋势数据 */
  getTrend(grade, days = 7) {
    const records = this.getResults(grade);
    const now = Date.now();
    const dayMs = 86400000;
    const trend = [];
    for (let i = days - 1; i >= 0; i--) {
      const start = now - (i + 1) * dayMs;
      const end = now - i * dayMs;
      const dayRecords = records.filter(r => r.timestamp >= start && r.timestamp < end);
      const total = dayRecords.reduce((s, r) => s + r.total, 0);
      const correct = dayRecords.reduce((s, r) => s + r.correct, 0);
      trend.push({
        date: new Date(start).toLocaleDateString('zh-CN', { month: '2-digit', day: '2-digit' }),
        total,
        correct,
        rate: total > 0 ? Math.round(correct / total * 100) : 0
      });
    }
    return trend;
  },

  /** 获取掌握度数据 */
  getMastery(grade) {
    return this._get(`${this._ns(grade)}_mastery`, {});
  },

  /** 更新掌握度 */
  _updateMastery(grade, chapter, answers) {
    const mastery = this.getMastery(grade);
    if (!mastery[chapter]) mastery[chapter] = { total: 0, correct: 0 };
    mastery[chapter].total += answers.length;
    mastery[chapter].correct += answers.filter(a => a.correct).length;
    this._set(`${this._ns(grade)}_mastery`, mastery);
  },

  /** 获取掌握度百分比 */
  getChapterMastery(grade, chapter) {
    const mastery = this.getMastery(grade);
    const m = mastery[chapter];
    if (!m || m.total === 0) return 0;
    return Math.round(m.correct / m.total * 100);
  },

  /** 获取薄弱知识点（< 60%） */
  getWeakPoints(grade) {
    const mastery = this.getMastery(grade);
    const weak = [];
    for (const [ch, data] of Object.entries(mastery)) {
      const rate = data.total > 0 ? data.correct / data.total : 0;
      if (rate < 0.6) weak.push({ chapter: parseInt(ch), rate: Math.round(rate * 100) });
    }
    return weak.sort((a, b) => a.rate - b.rate);
  },

  /** 获取错题 */
  getWrongQuestions(grade) {
    return this._get(`${this._ns(grade)}_wrong`, []);
  },

  /** 更新错题 */
  _updateWrongQuestions(grade, chapter, answers) {
    const wrong = this.getWrongQuestions(grade);
    answers.forEach(a => {
      if (!a.correct) {
        // 避免重复插入完全相同的错题
        const exists = wrong.some(w => w.id === a.id && w.timestamp === a.timestamp);
        if (!exists) {
          wrong.push({
            id: a.id,
            q: a.q,
            userAns: a.userAns,
            correctAns: a.correctAns,
            exp: a.exp,
            chapter,
            type: a.type,
            timestamp: Date.now(),
            retried: 0
          });
        }
      }
    });
    // 最多保留 200 条
    if (wrong.length > 200) wrong.splice(0, wrong.length - 200);
    this._set(`${this._ns(grade)}_wrong`, wrong);
  },

  /** 错题重练计数 + 自动移除已掌握 */
  markRetried(grade, questionId, questionText) {
    const wrong = this.getWrongQuestions(grade);
    // 优先按 id 匹配，其次按题目文本匹配
    const q = questionId
      ? wrong.find(w => w.id === questionId)
      : wrong.find(w => w.q === questionText);
    if (q) {
      q.retried = (q.retried || 0) + 1;
      // 答对 3 次自动移除
      if (q.retried >= 3) {
        const idx = wrong.indexOf(q);
        if (idx >= 0) wrong.splice(idx, 1);
      }
      this._set(`${this._ns(grade)}_wrong`, wrong);
    }
  },

  /** 获取打卡数据 */
  getStreak() {
    return this._get('suixue_streak', { count: 0, lastDate: null });
  },

  _updateStreak() {
    const streak = this.getStreak();
    const today = new Date().toLocaleDateString('zh-CN');
    const yesterday = new Date(Date.now() - 86400000).toLocaleDateString('zh-CN');

    if (streak.lastDate === today) {
      // 今天已经记过了
    } else if (streak.lastDate === yesterday) {
      streak.count += 1;
    } else {
      streak.count = 1;
    }
    streak.lastDate = today;
    this._set('suixue_streak', streak);
  },

  /** 获取今日统计 */
  getTodayStats(grade) {
    const records = this.getResults(grade);
    const today = new Date().toLocaleDateString('zh-CN');
    const todayRecords = records.filter(r => {
      const d = new Date(r.timestamp).toLocaleDateString('zh-CN');
      return d === today;
    });
    const total = todayRecords.reduce((s, r) => s + r.total, 0);
    const correct = todayRecords.reduce((s, r) => s + r.correct, 0);
    return {
      total,
      correct,
      rate: total > 0 ? Math.round(correct / total * 100) : 0,
      sessions: todayRecords.length,
      timeSpent: todayRecords.reduce((s, r) => s + (r.timeSpent || 0), 0)
    };
  },

  /** 清除所有数据 */
  clearAll(grade) {
    const ns = this._ns(grade);
    this._set(`${ns}_results`, []);
    this._set(`${ns}_mastery`, {});
    this._set(`${ns}_wrong`, []);
  },

  // ====== 内部工具 ======
  _get(key, defaultVal) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : defaultVal;
    } catch {
      return defaultVal;
    }
  },

  _set(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      console.warn('Store write failed:', e);
    }
  }
};
