/* ====== 穗学伴 · Hash 路由 ====== */

const ROUTES = ['home', 'chapters', 'guide', 'quiz', 'result', 'wrongbook', 'dashboard'];

let currentPage = 'home';
let onPageChange = null; // callback: (page) => {}

function navigate(page) {
  if (!ROUTES.includes(page)) return;
  location.hash = '#' + page;
}

function handleRoute() {
  const hash = location.hash.replace('#', '') || 'home';
  if (!ROUTES.includes(hash)) {
    navigate('home');
    return;
  }

  // 切换页面
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + hash);
  if (target) {
    target.classList.add('active');
    target.scrollTop = 0;
  }

  // 返回按钮
  const backBtn = document.getElementById('backBtn');
  if (backBtn) {
    backBtn.classList.toggle('show', hash !== 'home');
  }

  currentPage = hash;
  if (onPageChange) onPageChange(hash);
}

function goHome() {
  navigate('home');
}

function goBack() {
  // 根据当前页面决定返回哪里
  const map = {
    chapters: 'home',
    guide: 'chapters',
    quiz: 'chapters',
    result: 'chapters',
    wrongbook: 'home',
    dashboard: 'home'
  };
  navigate(map[currentPage] || 'home');
}

// 初始化
function initRouter(callback) {
  onPageChange = callback || null;
  window.addEventListener('hashchange', handleRoute);
  if (!location.hash) {
    navigate('home');
  }
  handleRoute();
}

// 确保页面加载后路由生效
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (!location.hash) navigate('home');
    handleRoute();
  });
}
