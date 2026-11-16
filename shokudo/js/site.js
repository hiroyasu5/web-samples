// メニュー開閉とスマホ下部バー
(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('gnav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); btn.focus(); }
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
