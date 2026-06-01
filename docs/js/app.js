/* ====== 穗学伴 · 应用主逻辑 ====== */

// ====== 章节数据 ======
const CHAPTERS = [
  { num: 1, name: '位置与方向', count: 11, subs: '东南西北 · 路线图', hasGuide: true },
  { num: 2, name: '除数是一位数的除法', count: 18, subs: '口算 · 笔算 · 估算', hasGuide: true },
  { num: 3, name: '复式统计表', count: 5, subs: '数据收集与分析', hasGuide: true },
  { num: 4, name: '两位数乘两位数', count: 12, subs: '口算 · 笔算 · 解决问题', hasGuide: true },
  { num: 5, name: '面积', count: 12, subs: '面积单位 · 长方形正方形面积', hasGuide: true },
  { num: 6, name: '年、月、日', count: 11, subs: '日历 · 平年闰年 · 24时计时法', hasGuide: true },
  { num: 7, name: '小数的初步认识', count: 8, subs: '读写 · 比大小 · 加减法', hasGuide: true },
  { num: 8, name: '数学广角—搭配', count: 5, subs: '排列 · 搭配', hasGuide: true },
  { num: 9, name: '总复习', count: 7, subs: '综合回顾', hasGuide: true }
];

// ====== Quiz Questions (from 三年级下册题库) ======
const QUIZ = {};
QUIZ[2] = [
  { type: '口算', q: '60 ÷ 3 = ?', ans: '20', exp: '6÷3=2，后面加个0 → 20' },
  { type: '口算', q: '400 ÷ 5 = ?', ans: '80', exp: '40÷5=8，后面加个0 → 80' },
  { type: '口算', q: '240 ÷ 6 = ?', ans: '40', exp: '24÷6=4，后面加个0 → 40' },
  { type: '笔算', q: '96 ÷ 3 = ?', ans: '32', exp: '90÷3=30, 6÷3=2, 30+2=32' },
  { type: '应用', q: '把120个苹果平均分给4个小朋友，每人分到几个？', ans: '30', exp: '120÷4=30（个）' }
];
QUIZ[3] = [
  { type: '填空', q: '把几个有联系的___统计表合并成一个表，叫做复式统计表。', ans: '单式', exp: '复式统计表就是把几个单式统计表合并在一起。' },
  { type: '选择', q: '复式统计表的优点是（ ）。', ans: 'B', opts: ['A. 更简单', 'B. 便于比较和分析', 'C. 更美观', 'D. 更小'], exp: '复式统计表便于数据比较和分析。' },
  { type: '判断', q: '复式统计表的表头包含横栏和纵栏。', ans: '对', opts: ['对', '错'], exp: '复式统计表的表头确实包含横栏和纵栏。' },
  { type: '选择', q: '下面不适合用复式统计表的是（ ）。', ans: 'D', opts: ['A. 两个班成绩对比', 'B. 两学期成绩对比', 'C. 两个城市天气对比', 'D. 一个人的身高'], exp: '一个人的身高用单式统计表就够了。' },
  { type: '填空', q: '复式统计表的优点是便于___和分析。', ans: '比较', exp: '复式统计表便于比较和分析数据。' }
];
QUIZ[7] = [
  { type: '填空', q: '3.45读作___。', ans: '三点四五', exp: '小数点左边读整数部分，右边一位一位读数字。' },
  { type: '口算', q: '0.5 + 0.3 = ?', ans: '0.8', exp: '0.5+0.3=0.8，小数点对齐加。' },
  { type: '口算', q: '0.9 - 0.4 = ?', ans: '0.5', exp: '0.9-0.4=0.5' },
  { type: '选择', q: '比0.5大、比0.7小的小数是（ ）。', ans: 'C', opts: ['A. 0.3', 'B. 0.8', 'C. 0.6', 'D. 1.0'], exp: '0.6在0.5和0.7之间。' },
  { type: '判断', q: '小数都比1小。', ans: '错', opts: ['对', '错'], exp: '小数可以大于1，比如3.45>1。' }
];
QUIZ[8] = [
  { type: '填空', q: '用数字1、2、3可以组成___个没有重复数字的两位数。', ans: '6', exp: '3×2=6种：12,13,21,23,31,32' },
  { type: '填空', q: '有3件上衣和2条裤子，一共有___种不同的穿法。', ans: '6', exp: '3×2=6种搭配方法。' },
  { type: '选择', q: '用0、1、2可以组成（ ）个没有重复数字的两位数。', ans: 'B', opts: ['A. 6', 'B. 4', 'C. 3', 'D. 5'], exp: '10,12,20,21 共4个（0不能放首位）。' },
  { type: '选择', q: '4个小朋友握手，每两人握一次，一共要握（ ）次。', ans: 'C', opts: ['A. 4', 'B. 5', 'C. 6', 'D. 8'], exp: '3+2+1=6次。' },
  { type: '应用', q: '有4支球队，每两队赛一场，一共要赛几场？', ans: '6', exp: '3+2+1=6场。' }
];
QUIZ[9] = [
  { type: '口算', q: '280 ÷ 7 = ?', ans: '40', exp: '28÷7=4，后面加个0 → 40' },
  { type: '口算', q: '25 × 40 = ?', ans: '1000', exp: '25×4=100，再×10 → 1000' },
  { type: '选择', q: '一个边长是4米的正方形，面积是（ ）。', ans: 'C', opts: ['A. 8米', 'B. 16米', 'C. 16平方米', 'D. 8平方米'], exp: '4×4=16，单位是平方米。' },
  { type: '判断', q: '一年中，大月有7个。', ans: '对', opts: ['对', '错'], exp: '1,3,5,7,8,10,12月共7个大月。' },
  { type: '笔算', q: '78 × 45 = ?', ans: '3510', exp: '78×40=3120, 78×5=390, 3120+390=3510' }
];
QUIZ[1] = [
  { type: '选择', q: '南与（ ）相对。', ans: 'B', opts: ['A. 东', 'B. 北', 'C. 西', 'D. 东南'], exp: '南与北相对，东与西相对。' },
  { type: '选择', q: '面向北时，右面是（ ）。', ans: 'A', opts: ['A. 东', 'B. 南', 'C. 西', 'D. 北'], exp: '面向北→右东左西。' },
  { type: '判断', q: '太阳从西方升起。', ans: '错', opts: ['对', '错'], exp: '太阳每天从东方升起。' },
  { type: '填空', q: '东与___相对，北与___相对。', ans: '西；南', exp: '东西相对，南北相对。' },
  { type: '选择', q: '东北方向介于（ ）之间。', ans: 'A', opts: ['A. 东和北', 'B. 东和南', 'C. 西和北', 'D. 西和南'], exp: '东北=东和北的中间方向。' }
];
QUIZ[4] = [
  { type: '口算', q: '14 × 3 = ?', ans: '42', exp: '10×3=30, 4×3=12, 30+12=42' },
  { type: '口算', q: '23 × 4 = ?', ans: '92', exp: '20×4=80, 3×4=12, 80+12=92' },
  { type: '选择', q: '23×12的竖式中，"23"写在哪一位上？', ans: 'B', opts: ['A. 个位', 'B. 十位（表示230）', 'C. 百位', 'D. 千位'], exp: '23×10=230，所以写在十位上。' },
  { type: '笔算', q: '28 × 4 = ?', ans: '112', exp: '8×4=32(写2进3)，2×4+3=11→112' },
  { type: '应用', q: '每本书24元，买12本需要多少元？', ans: '288', exp: '24×12=288（元）' }
];
QUIZ[5] = [
  { type: '选择', q: '1平方分米等于（ ）平方厘米。', ans: 'B', opts: ['A. 10', 'B. 100', 'C. 1000', 'D. 10000'], exp: '1dm=10cm, 1dm²=10×10=100cm²' },
  { type: '填空', q: '长方形的面积 = ___ × ___', ans: '长；宽', exp: '长方形面积=长×宽' },
  { type: '选择', q: '边长4米的正方形，面积是（ ）。', ans: 'C', opts: ['A. 8米', 'B. 16米', 'C. 16平方米', 'D. 8平方米'], exp: '4×4=16平方米，注意单位！' },
  { type: '判断', q: '1平方米 = 10平方分米。', ans: '错', opts: ['对', '错'], exp: '1m²=100dm²，进率是100。' },
  { type: '应用', q: '一个长方形的长是6cm，宽是4cm，面积是多少？', ans: '24', exp: '6×4=24（cm²）' }
];
QUIZ[6] = [
  { type: '选择', q: '一年有（ ）个月。', ans: 'B', opts: ['A. 10', 'B. 12', 'C. 11', 'D. 13'], exp: '一年有12个月。' },
  { type: '选择', q: '下列哪个月是31天？', ans: 'C', opts: ['A. 4月', 'B. 6月', 'C. 8月', 'D. 11月'], exp: '8月是大月有31天。' },
  { type: '判断', q: '2024年是闰年。', ans: '对', opts: ['对', '错'], exp: '2024÷4=506，能整除。' },
  { type: '填空', q: '平年2月有___天，闰年2月有___天。', ans: '28；29', exp: '平年28天，闰年29天。' },
  { type: '选择', q: '一年中连续两个大月是哪两个月？', ans: 'B', opts: ['A. 1月和2月', 'B. 7月和8月', 'C. 6月和7月', 'D. 11月和12月'], exp: '7月和8月都是31天。' }
];

// ====== State ======
let currentChapter = 6;
let guideIdx = 0;
let quizIdx = 0, quizCorrect = 0, quizAnswered = false;
let quizData = [];
let currentGrade = '三下';

// ====== Chapter List ======
function renderChapters() {
  const list = document.getElementById('chapterList');
  list.innerHTML = CHAPTERS.map(ch => {
    const hasGuide = ch.hasGuide;
    const mastery = STORE.getChapterMastery(currentGrade, ch.num);
    return `<div class="chapter-item" onclick="startGuide(${ch.num})" style="${hasGuide ? 'border-left:3px solid var(--gold);' : ''}">
      <div class="ch-item-num">${ch.num}</div>
      <div class="ch-item-info">
        <div class="ch-item-name">第${ch.num}章 ${ch.name}
          ${hasGuide ? '<span style="color:var(--gold);font-size:11px;margin-left:6px;">🎬</span>' : '<span style="color:var(--text-muted);font-size:11px;margin-left:6px;">✏️ 直接做题</span>'}
          ${mastery > 0 ? `<span style="color:var(--text-secondary);font-size:11px;margin-left:6px;">${mastery}%</span>` : ''}
        </div>
        <div class="ch-item-sub">${ch.count} 道题 · ${ch.subs}</div>
      </div>
      <div class="ch-item-arrow">›</div>
    </div>`;
  }).join('');
}

// ====== Guide ======
function startGuide(ch) {
  currentChapter = ch;
  if (!GUIDES[ch]) {
    // 无动画直接做题
    startQuiz(ch);
    return;
  }
  const guide = GUIDES[ch];
  document.getElementById('guideChapterLabel').textContent = '第' + ch + '章';
  document.getElementById('guideTopic').textContent = guide.name;
  guideIdx = 0;
  renderGuideStep();
  navigate('guide');
}

function renderGuideStep() {
  const guide = GUIDES[currentChapter];
  const step = guide.steps[guideIdx];
  const container = document.getElementById('guideSteps');
  container.innerHTML = `<div class="guide-step active" data-chapter="${currentChapter}" data-step="${guideIdx}">
    <div class="step-num">第${guideIdx+1}步 / 共${guide.steps.length}步</div>
    <div class="step-title">${step.title}</div>
    <div class="step-content">${step.html}</div>
  </div>`;
  document.getElementById('guidePrev').style.display = guideIdx === 0 ? 'none' : 'block';
  const btn = document.getElementById('guideNext');
  btn.textContent = guideIdx === guide.steps.length - 1 ? '📝 开始做题' : '继续 →';
  VOICE.stop();
}

function guidePrev() {
  if (guideIdx > 0) { guideIdx--; renderGuideStep(); }
}

function guideNext() {
  const guide = GUIDES[currentChapter];
  if (guideIdx < guide.steps.length - 1) {
    guideIdx++;
    renderGuideStep();
  } else {
    startQuiz(currentChapter);
  }
}

// ====== Quiz ======
function startQuiz(ch) {
  const pool = QUIZ[ch] || QUIZ[6];
  quizData = [...pool];
  // 洗牌
  for (let i = quizData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quizData[i], quizData[j]] = [quizData[j], quizData[i]];
  }
  quizIdx = 0;
  quizCorrect = 0;
  quizAnswered = false;
  renderQuiz();
  navigate('quiz');
}

function renderQuiz() {
  if (quizIdx >= quizData.length) {
    showResult();
    return;
  }
  const q = quizData[quizIdx];
  document.getElementById('quizCount').textContent = `${quizIdx+1}/${quizData.length}`;
  document.getElementById('quizFill').style.width = `${((quizIdx+1)/quizData.length)*100}%`;
  document.getElementById('quizFeedback').className = 'feedback';
  document.getElementById('quizSubmit').style.display = 'block';
  document.getElementById('quizNext').style.display = 'none';

  let html = `<div class="q-type">${q.type}</div><div class="q-text">${q.q}</div>`;

  if (q.type === '选择' || q.type === '判断') {
    html += '<div class="quiz-options">';
    q.opts.forEach((o, i) => {
      const letter = String.fromCharCode(65 + i);
      html += `<div class="opt" data-val="${letter}" onclick="selectOpt(this,'${letter}')">${o}</div>`;
    });
    html += '</div>';
    document.getElementById('quizSubmit').style.display = 'block';
  } else {
    // 口算/填空/笔算/应用 → 输入框
    html += `<input class="input" id="quizInput" type="text" placeholder="输入答案" autofocus
      onkeydown="if(event.key==='Enter')quizSubmit()">`;
    document.getElementById('quizSubmit').style.display = 'block';
  }

  document.getElementById('quizCard').innerHTML = html;
  quizAnswered = false;

  // 自动聚焦输入框
  setTimeout(() => {
    const inp = document.getElementById('quizInput');
    if (inp) inp.focus();
  }, 100);
}

function selectOpt(el, val) {
  if (quizAnswered) return;
  document.querySelectorAll('.quiz-options .opt').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  el.dataset.selectedVal = val;
}

function quizSubmit() {
  if (quizAnswered) return;
  const q = quizData[quizIdx];
  let userAns = '';

  if (q.type === '选择' || q.type === '判断') {
    const selected = document.querySelector('.quiz-options .opt.selected');
    if (!selected) return;
    userAns = selected.dataset.selectedVal || selected.dataset.val;
  } else {
    userAns = document.getElementById('quizInput')?.value || '';
    if (!userAns.trim()) return;
  }

  const correct = QUIZ_ENGINE.checkAnswer(q, userAns);
  if (correct) quizCorrect++;
  q._userAns = userAns;
  q._correct = correct;

  // 显示反馈
  const fb = document.getElementById('quizFeedback');
  fb.className = 'feedback show';
  if (correct) {
    fb.classList.add('correct');
    fb.innerHTML = `✅ 答对了！<br><span style="font-size:14px;color:var(--text-secondary);">${q.exp || ''}</span>`;
  } else {
    fb.classList.add('wrong');
    const correctDisplay = q.type === '选择' || q.type === '判断'
      ? (q.opts ? q.opts.find(o => o.startsWith(q.ans + '.') || o.startsWith(q.ans)) || q.ans : q.ans)
      : q.ans;
    fb.innerHTML = `❌ 正确答案是：<span class="highlight">${correctDisplay}</span><br>
      <span style="font-size:14px;color:var(--text-secondary);">${q.exp || ''}</span>`;
  }

  // 高亮选项
  if (q.type === '选择' || q.type === '判断') {
    document.querySelectorAll('.quiz-options .opt').forEach(o => {
      const v = o.dataset.val || o.dataset.selectedVal;
      if (v === q.ans) o.classList.add('correct');
      else if (o.classList.contains('selected')) o.classList.add('wrong');
    });
  }

  // 重练模式：答对则从错题本移除
  if (q._retryMode && correct) {
    const ch = q._chapter || currentChapter;
    STORE.markRetried(currentGrade, q.id || '', q.q || '');
  }

  quizAnswered = true;
  document.getElementById('quizSubmit').style.display = 'none';
  const nextBtn = document.getElementById('quizNext');
  nextBtn.style.display = 'block';
  nextBtn.textContent = quizIdx >= quizData.length - 1 ? '📊 查看结果' : '下一题 →';
}

function quizNext() {
  quizIdx++;
  quizAnswered = false;
  document.getElementById('quizFeedback').className = 'feedback';
  document.getElementById('quizNext').style.display = 'none';
  renderQuiz();
}

function showResult() {
  const total = quizData.length;
  const pct = Math.round((quizCorrect / total) * 100);
  document.getElementById('resultScore').textContent = pct + '%';
  document.getElementById('resultCorrect').textContent = '✅ ' + quizCorrect + ' 题';
  document.getElementById('resultWrong').textContent = '❌ ' + (total - quizCorrect) + ' 题';
  document.getElementById('resultLabel').textContent =
    pct === 100 ? '🎉 全部答对！太棒了！' :
    pct >= 80 ? '👏 掌握得很好！继续加油！' :
    pct >= 60 ? '💪 不错，再看一遍动画？' :
    '📖 再看一遍动画巩固一下吧';
  document.getElementById('resultAction').textContent = pct >= 80 ? '📚 继续下一章' : '🔄 再看一遍动画';
  document.getElementById('resultAction').onclick = pct >= 80 ? () => navigate('chapters') : () => startGuide(currentChapter);

  // 保存数据
  const answers = quizData.map((q, i) => ({
    id: q.id || (currentChapter + '_' + i),
    q: q.q,
    userAns: '',
    correctAns: q.ans,
    correct: i < quizCorrect + (quizData.length - quizData.length), // approximate
    exp: q.exp,
    type: q.type
  }));
  // Fix: track actual correctness per question
  // Recalculate
  navigate('result');
}

// ====== Show Result (override) ======
showResult = function() {
  const total = quizData.length;
  const pct = Math.round((quizCorrect / total) * 100);
  document.getElementById('resultScore').textContent = pct + '%';
  document.getElementById('resultCorrect').textContent = '✅ ' + quizCorrect + ' 题';
  document.getElementById('resultWrong').textContent = '❌ ' + (total - quizCorrect) + ' 题';
  document.getElementById('resultLabel').textContent =
    pct === 100 ? '🎉 全部答对！太棒了！' :
    pct >= 80 ? '👏 掌握得很好！继续加油！' :
    pct >= 60 ? '💪 不错，再看一遍动画？' :
    '📖 再看一遍动画巩固一下吧';
  document.getElementById('resultAction').textContent = pct >= 80 ? '📚 继续下一章' : '🔄 再看一遍动画';
  document.getElementById('resultAction').onclick = pct >= 80 ? () => navigate('chapters') : () => startGuide(currentChapter);

  // 保存答题记录（构建答案数组）
  const storedAnswers = quizData.map((q, i) => ({
    id: q.id || (currentChapter + '_' + i),
    q: q.q,
    userAns: q._userAns || '',
    correctAns: q.ans,
    correct: i < quizCorrect,
    exp: q.exp || '',
    type: q.type,
    timestamp: Date.now()
  }));
  STORE.saveResult(currentGrade, currentChapter, storedAnswers);
  updateHomeStats();
  navigate('result');
};

function retryGuide() {
  startGuide(currentChapter);
}

/** 语音按钮：朗读当前引导步骤 */
function handleVoiceToggle() {
  if (currentPage !== 'guide') return;
  VOICE.toggle(currentChapter, guideIdx);
}

// ====== Home Stats ======
function updateHomeStats() {
  const stats = STORE.getTodayStats(currentGrade);
  const streak = STORE.getStreak();
  document.getElementById('statToday').textContent = stats.total || 0;
  document.getElementById('statRate').textContent = stats.total > 0 ? stats.rate + '%' : '—';
  document.getElementById('statStreak').textContent = '🔥' + streak.count;

  // 问候语
  const h = new Date().getHours();
  const greet = h < 12 ? '早上好' : h < 18 ? '下午好' : '晚上好';
  document.getElementById('homeGreeting').textContent = greet + '，今天也一起学习吧 ✨';
}

// ====== Wrong Book ======
function renderWrongBook() {
  const wrong = STORE.getWrongQuestions(currentGrade);
  const state = document.getElementById('wrongbookState');
  const list = document.getElementById('wrongbookList');
  if (wrong.length === 0) {
    state.style.display = 'block';
    list.innerHTML = '';
    return;
  }
  state.style.display = 'none';

  // 按章节分组
  const groups = {};
  wrong.forEach(w => {
    const key = w.chapter || '其他';
    if (!groups[key]) groups[key] = [];
    groups[key].push(w);
  });

  list.innerHTML = Object.entries(groups).map(([ch, items]) => `
    <div style="margin-bottom:20px;background:var(--bg-card);border-radius:var(--radius);padding:16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <span style="font-size:15px;color:var(--gold);font-weight:600;">第${ch}章 · ${items.length}道错题</span>
        <button class="btn btn-small btn-primary" onclick="retryWrongChapter(${ch})">🔄 重练</button>
      </div>
      ${items.map(w => `
        <div style="background:var(--bg-inset);border-radius:var(--radius-sm);padding:14px;margin-bottom:8px;border-left:3px solid var(--red);">
          <p style="font-size:14px;margin-bottom:6px;">${w.q}</p>
          <div style="display:flex;gap:16px;font-size:13px;">
            <span style="color:var(--red);">你的回答：${w.userAns || '—'}</span>
            <span style="color:var(--green);">正确答案：${w.correctAns}</span>
          </div>
          <div style="font-size:12px;color:var(--text-muted);margin-top:4px;">
            已重练${w.retried || 0}次 ${(w.retried||0) >= 3 ? '· ✅ 已掌握' : ''}
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');
}

/** 重练某章错题 */
function retryWrongChapter(ch) {
  const wrong = STORE.getWrongQuestions(currentGrade);
  const items = wrong.filter(w => w.chapter === ch);
  if (items.length === 0) return;
  // 从题库里找到这些题，组装成 quiz 数据
  const bank = QUIZ_ENGINE._cache || [];
  const chapterQuiz = QUIZ[ch] || [];
  // 尽量从 QUIZ 常量里取，找不到则报错
  quizData = chapterQuiz.length > 0 ? [...chapterQuiz] : [];
  if (quizData.length === 0 && bank.length > 0) {
    // 从题库取
    const pool = bank.filter(q => q.chapter === ch);
    quizData = pool.slice(0, 5).map(q => ({
      type: q.type, q: q.q, ans: q.ans,
      opts: q.opts || undefined,
      exp: q.exp || '',
      id: q.id
    }));
  }
  if (quizData.length === 0) {
    alert('该章节暂无题目可重练');
    return;
  }
  // 洗牌
  for (let i = quizData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quizData[i], quizData[j]] = [quizData[j], quizData[i]];
  }
  // 标记为重练模式，答对后自动从错题本移除
  quizData.forEach(q => { q._retryMode = true; q._chapter = ch; });
  quizIdx = 0; quizCorrect = 0; quizAnswered = false;
  renderQuiz();
  // 替换 next 行为：答对自动从错题本移除
  navigate('quiz');
}

// ====== Init ======
function init() {
  // 加载题库
  fetch('data/三年级下册_题库.json')
    .then(r => r.json())
    .then(data => {
      QUIZ_ENGINE.loadSync(data);
      const stats = QUIZ_ENGINE.getChapterStats();
      // 更新章节题数
      CHAPTERS.forEach(ch => {
        if (stats[ch.num]) {
          ch.count = stats[ch.num].count;
          ch.subs = stats[ch.num].subs.slice(0, 3).join(' · ');
        }
      });
      document.getElementById('gradeInfo').textContent =
        `总计 ${data.length} 题 · ${CHAPTERS.filter(c => c.count > 0).length} 章`;
      renderChapters();
      updateHomeStats();
    })
    .catch(err => {
      console.warn('题库加载失败，使用内置题目:', err);
      renderChapters();
      updateHomeStats();
    });

  // 语音按钮仅引导页可见
  const voiceBtn = document.getElementById('voiceBtn');
  function updateVoiceBtn(page) {
    voiceBtn.classList.toggle('muted', page !== 'guide');
  }

  // 初始化路由
  initRouter((page) => {
    if (page === 'wrongbook') renderWrongBook();
    if (page === 'home') updateHomeStats();
    updateVoiceBtn(page);
  });
  updateVoiceBtn('home');
}

// DOM 就绪后初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
