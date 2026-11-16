// メニュー開閉とフォームの確認
(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('gnav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); btn.focus(); }
    });
  }
  var form = document.getElementById('form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var first = null;
    form.querySelectorAll('[data-req]').forEach(function (f) {
      var t = f.getAttribute('data-req'), ok = true;
      if (t === 'text') ok = f.querySelector('input').value.trim() !== '';
      if (t === 'email') ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.querySelector('input').value.trim());
      if (t === 'radio') ok = !!f.querySelector('input:checked');
      if (t === 'check') ok = f.querySelector('input').checked;
      f.classList.toggle('invalid', !ok);
      if (!ok && !first) first = f.querySelector('input');
    });
    var sent = document.getElementById('sent');
    if (first) { sent.classList.remove('show'); first.focus(); return; }
    sent.classList.add('show');
  });
})();
