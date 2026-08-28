    (function () {
      var items = document.querySelectorAll('.rise');
      if (!('IntersectionObserver' in window)) {
        items.forEach(function (el) { el.classList.add('on'); });
        return;
      }
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
        });
      }, { rootMargin: '0px 0px -60px 0px' });
      items.forEach(function (el) { io.observe(el); });
    })();

    (function () {
      var dds = Array.prototype.slice.call(document.querySelectorAll('.tile-drop'));

      function closeAll(except) {
        dds.forEach(function (dd) {
          if (dd === except) return;
          dd.classList.remove('open');
          dd.querySelector('.dd-toggle').setAttribute('aria-expanded', 'false');
        });
      }

      dds.forEach(function (dd) {
        var btn = dd.querySelector('.dd-toggle');
        btn.addEventListener('click', function (e) {
          e.stopPropagation();
          var willOpen = !dd.classList.contains('open');
          closeAll();
          if (willOpen) {
            dd.classList.add('open');
            btn.setAttribute('aria-expanded', 'true');
          }
        });
        dd.querySelector('.dd-menu').addEventListener('click', function (e) {
          if (e.target.closest('a')) closeAll();
        });
      });

      document.addEventListener('click', function () { closeAll(); });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeAll();
      });
    })();
