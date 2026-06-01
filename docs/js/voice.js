/* ====== 穗学伴 · 语音朗读引擎 (Web Speech API) ======
 * 亲切女声 · 自然口语化 · 不念页头页尾
 */

const VOICE = {
  speaking: false,
  utterance: null,
  _voices: [],
  _ready: false,

  /** 初始化语音列表 */
  init() {
    if (this._ready) return;
    const tryLoad = () => {
      this._voices = window.speechSynthesis.getVoices();
      if (this._voices.length > 0) {
        this._ready = true;
      }
    };
    tryLoad();
    // Chrome 等需要异步
    window.speechSynthesis.onvoiceschanged = tryLoad;
  },

  /** 获取最佳中文女声 */
  _getVoice() {
    this.init();
    const zhVoices = this._voices.filter(v => v.lang.startsWith('zh'));
    // 偏好顺序：自然女声 > Tingting > 中文女声 > 第一个中文声
    const preferred = zhVoices.find(v =>
      v.name.includes('Tingting') ||
      v.name.includes('自然的') ||
      v.name.includes('Female') ||
      v.name.includes('女生') ||
      v.name.includes('MeiJia') ||
      v.name.includes('美嘉') ||
      v.name.includes('Siri') ||
      v.name.includes('Zuzana') ||
      v.name.includes('Audrey')
    );
    // macOS: Tingting; iOS: 默认中文女声
    return preferred || zhVoices[0] || null;
  },

  /** 朗读当前步骤的口语化旁白 */
  speakStep(chapterNum, stepIdx) {
    if (!window.speechSynthesis) {
      console.warn('浏览器不支持 Speech API');
      return;
    }
    this.stop();

    const guide = GUIDES[chapterNum];
    if (!guide || !guide.steps[stepIdx]) return;
    const step = guide.steps[stepIdx];

    // 优先使用 voiceScript 旁白，否则自动生成
    const text = step.voiceScript || this._autoScript(step.title, step.html);
    if (!text) return;

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'zh-CN';
    utter.rate = 0.78;       // 慢速清晰
    utter.pitch = 1.05;      // 自然女声音高
    utter.volume = 1;

    const voice = this._getVoice();
    if (voice) utter.voice = voice;

    utter.onstart = () => {
      this.speaking = true;
      this._updateUI(true);
    };
    utter.onend = () => {
      this.speaking = false;
      this._updateUI(false);
    };
    utter.onerror = () => {
      this.speaking = false;
      this._updateUI(false);
    };

    this.utterance = utter;
    window.speechSynthesis.speak(utter);
  },

  /** 自动生成口语化旁白（兜底方案） */
  _autoScript(title, html) {
    // 提取纯文本，过滤掉 emoji 和 UI 标记
    const div = document.createElement('div');
    div.innerHTML = html;
    let text = div.textContent
      .replace(/[📌💡✏️💪🔍🎵👊📐🧮📅🗺️🧭🌅🎯🧩🖐️📄📏]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    // 截短，不要太长
    if (text.length > 180) text = text.slice(0, 180) + '。';
    const intro = `好啦，我们来看${title.replace(/[🎬📐🧮📅🗺️🧭🌅👊🎵📏🎯🧩]/g, '').trim()}。`;
    return intro + text;
  },

  /** 朗读整段自定义文本 */
  speakCustom(text) {
    if (!window.speechSynthesis || !text) return;
    this.stop();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'zh-CN';
    utter.rate = 0.78;
    utter.pitch = 1.05;
    const voice = this._getVoice();
    if (voice) utter.voice = voice;
    utter.onend = () => { this.speaking = false; this._updateUI(false); };
    utter.onerror = () => { this.speaking = false; this._updateUI(false); };
    this.utterance = utter;
    window.speechSynthesis.speak(utter);
  },

  /** 停止 */
  stop() {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    this.speaking = false;
    this._updateUI(false);
  },

  /** 切换 */
  toggle(chapterNum, stepIdx) {
    if (this.speaking) {
      this.stop();
    } else {
      this.speakStep(chapterNum, stepIdx);
    }
  },

  _updateUI(playing) {
    const btn = document.getElementById('voiceBtn');
    if (!btn) return;
    btn.classList.toggle('playing', playing);
    btn.title = playing ? '点击停止' : '朗读本页';
  }
};

// 页面隐藏时自动静音
document.addEventListener('visibilitychange', () => {
  if (document.hidden && window.speechSynthesis) {
    window.speechSynthesis.cancel();
    VOICE.speaking = false;
    VOICE._updateUI(false);
  }
});
