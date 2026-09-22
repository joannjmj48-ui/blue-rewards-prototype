(function () {
  'use strict';
  var steps = Array.prototype.slice.call(document.querySelectorAll('.step'));
  var chips = Array.prototype.slice.call(document.querySelectorAll('.chip'));
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');
  var counter = document.getElementById('counter');
  var current = 0;

  function show(i, push) {
    if (i < 0) { i = 0; }
    if (i > steps.length - 1) { i = steps.length - 1; }
    current = i;
    steps.forEach(function (s, n) { s.hidden = (n !== i); });
    chips.forEach(function (c, n) {
      if (n === i) { c.setAttribute('aria-current', 'true'); }
      else { c.removeAttribute('aria-current'); }
    });
    counter.textContent = i + ' of ' + (steps.length - 1);
    prev.disabled = (i === 0);
    next.disabled = (i === steps.length - 1);
    if (push) {
      history.replaceState(null, '', '#s' + i);
    }
    chips[i].scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }

  chips.forEach(function (c) {
    c.addEventListener('click', function () { show(parseInt(c.getAttribute('data-go'), 10), true); });
  });
  prev.addEventListener('click', function () { show(current - 1, true); });
  next.addEventListener('click', function () { show(current + 1, true); });

  document.addEventListener('keydown', function (e) {
    if (e.target && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) { return; }
    if (e.key === 'ArrowRight') { show(current + 1, true); }
    if (e.key === 'ArrowLeft') { show(current - 1, true); }
  });

  var m = /^#s(\d+)$/.exec(window.location.hash || '');
  show(m ? parseInt(m[1], 10) : 0, false);
})();
