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

    (function () {
      var root = document.documentElement;
      var btn = document.getElementById('theme-toggle');
      if (!btn) return;
      var mq = window.matchMedia('(prefers-color-scheme: dark)');
      var labels = { light: 'тема: светлая', dark: 'тема: тёмная' };

      function system() { return mq.matches ? 'dark' : 'light'; }

      function effective() {
        var t = root.getAttribute('data-theme');
        return t === 'light' || t === 'dark' ? t : system();
      }

      function render() { btn.textContent = labels[effective()]; }

      // клик переключает на противоположную тему; если она совпала с системной,
      // ручной выбор снимается и сайт снова следует за системой
      btn.addEventListener('click', function () {
        var next = effective() === 'dark' ? 'light' : 'dark';
        try {
          if (next === system()) {
            root.removeAttribute('data-theme');
            localStorage.removeItem('theme');
          } else {
            root.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
          }
        } catch (e) {
          root.setAttribute('data-theme', next);
        }
        render();
      });

      if (mq.addEventListener) mq.addEventListener('change', render);
      render();
    })();

    (function () {
      var burger = document.getElementById('nav-burger');
      var bar = document.querySelector('.nav-in');
      var links = document.getElementById('nav-links');
      if (!burger || !bar || !links) return;

      function setOpen(open) {
        bar.classList.toggle('open', open);
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      }

      burger.addEventListener('click', function (e) {
        e.stopPropagation();
        setOpen(!bar.classList.contains('open'));
      });
      links.addEventListener('click', function (e) {
        if (e.target.closest('a')) setOpen(false);
      });
      document.addEventListener('click', function (e) {
        if (!bar.contains(e.target)) setOpen(false);
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') setOpen(false);
      });
      window.addEventListener('resize', function () {
        if (window.innerWidth > 900) setOpen(false);
      });
    })();

    (function () {
      // подсветка текущего раздела в меню
      var links = Array.prototype.slice.call(document.querySelectorAll('.nav-links a[href^="#"]'));
      var map = {};
      links.forEach(function (a) {
        var el = document.getElementById(a.getAttribute('href').slice(1));
        if (el) map[el.id] = a;
      });
      var ids = Object.keys(map);
      var activeId = null;

      function updateActive() {
        var line = window.innerHeight * 0.35;
        var current = null;
        ids.forEach(function (id) {
          if (document.getElementById(id).getBoundingClientRect().top <= line) current = id;
        });
        // у самого низа страницы подсвечиваем последний пункт
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
          current = ids[ids.length - 1];
        }
        if (current === activeId) return;
        activeId = current;
        links.forEach(function (a) { a.classList.remove('active'); });
        if (current) map[current].classList.add('active');
      }

      if (ids.length) {
        window.addEventListener('scroll', updateActive, { passive: true });
        window.addEventListener('resize', updateActive);
        updateActive();
      }

      // кнопка «наверх»
      var top = document.getElementById('to-top');
      if (top) {
        top.hidden = false;
        var onScroll = function () { top.classList.toggle('show', window.scrollY > 700); };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        top.addEventListener('click', function () {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }

      // год в подвале
      var y = document.getElementById('year');
      if (y) y.textContent = new Date().getFullYear();
    })();
