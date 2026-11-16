// 全画面メニューとスマホ下部バー
(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('gnav');
  var close = document.querySelector('.menu-close');
  function setOpen(open) {
    nav.hidden = !open;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) { close.focus(); } else { btn.focus(); }
  }
  if (btn && nav) {
    btn.addEventListener('click', function () { setOpen(true); });
    close.addEventListener('click', function () { setOpen(false); });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.hidden = true; btn.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !nav.hidden) { setOpen(false); }
    });
  }
  var bar = document.getElementById('bottom-bar');
  var watch = document.getElementById('hero-actions');
  if (bar && watch && 'IntersectionObserver' in window) {
    bar.hidden = false; document.body.classList.add('has-bar');
    bar.style.visibility = 'hidden';
    new IntersectionObserver(function (es) {
      bar.style.visibility = es[0].isIntersecting ? 'hidden' : 'visible';
    }).observe(watch);
  }
})();
