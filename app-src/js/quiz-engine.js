/* ====== 穗学伴 · 出题引擎 ====== */

const QUIZ_ENGINE = {
  /** 缓存已加载的题库 */
  _cache: null,

  /** 从 JSON 加载题库 */
  async load(path) {
    if (this._cache) return this._cache;
    try {
      const resp = await fetch(path);
      this._cache = await resp.json();
      return this._cache;
    } catch (e) {
      console.error('题库加载失败:', e);
      return [];
    }
  },

  /** 同步加载（题库已作为变量注入时用） */
  loadSync(data) {
    this._cache = data;
    return data;
  },

  /** 按章节筛选题目 */
  getByChapter(chapter) {
    if (!this._cache) return [];
    return this._cache.filter(q => q.chapter === chapter);
  },

  /** Fisher-Yates 洗牌 */
  shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  /** 选 N 题（优先薄弱知识点） */
  pickQuestions(chapter, count = 5, excludeIds = []) {
    let pool = this.getByChapter(chapter);

    // 排除指定 ID
    if (excludeIds.length > 0) {
      pool = pool.filter(q => !excludeIds.includes(q.id));
    }

    // 按题型均匀分布
    const byType = {};
    pool.forEach(q => {
      const t = q.type || '其他';
      if (!byType[t]) byType[t] = [];
      byType[t].push(q);
    });

    // 从各题型轮流取题
    const types = Object.keys(byType);
    const result = [];
    const used = new Set();

    // 优先从题量少的题型取
    types.sort((a, b) => byType[a].length - byType[b].length);

    let round = 0;
    while (result.length < count && result.length < pool.length) {
      const type = types[round % types.length];
      const available = byType[type].filter(q => !used.has(q.id));
      if (available.length > 0) {
        const picked = available[Math.floor(Math.random() * available.length)];
        result.push(picked);
        used.add(picked.id);
      }
      round++;
      // 防死循环
      if (round > pool.length * 2) break;
    }

    return this.shuffle(result);
  },

  /** 判对错 */
  checkAnswer(question, userAnswer) {
    const correct = question.ans;
    const ua = (userAnswer || '').toString().trim().toLowerCase();
    const ca = correct.toString().trim().toLowerCase();

    if (question.type === '选择' || question.type === '判断') {
      return ua === ca;
    }

    // 填空题：去空格、忽略标点
    const normalize = (s) => s.replace(/[，。；、？！\s]/g, '').toLowerCase();
    return normalize(ua) === normalize(ca);
  },

  /** 获取可用章节列表 */
  getAvailableChapters() {
    if (!this._cache) return [];
    const chapters = new Set();
    this._cache.forEach(q => chapters.add(q.chapter));
    return [...chapters].sort((a, b) => a - b);
  },

  /** 获取章节统计 */
  getChapterStats() {
    if (!this._cache) return {};
    const stats = {};
    this._cache.forEach(q => {
      const ch = q.chapter;
      if (!stats[ch]) {
        stats[ch] = { count: 0, types: new Set(), subs: new Set() };
      }
      stats[ch].count++;
      stats[ch].types.add(q.type);
      if (q.subsection) stats[ch].subs.add(q.subsection);
    });
    // 转回普通对象
    Object.keys(stats).forEach(ch => {
      stats[ch].types = [...stats[ch].types];
      stats[ch].subs = [...stats[ch].subs];
    });
    return stats;
  }
};
