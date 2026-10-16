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
        root.classList.add('theme-anim');
        window.setTimeout(function () { root.classList.remove('theme-anim'); }, 450);
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

      var marker = document.createElement('span');
      marker.className = 'nav-marker';
      var navIn = document.querySelector('.nav-in');
      navIn.appendChild(marker);
      var progress = document.getElementById('scroll-progress');

      function placeMarker() {
        var a = activeId ? map[activeId] : null;
        if (!a || !a.offsetWidth) { marker.style.opacity = '0'; return; }
        marker.style.width = a.offsetWidth + 'px';
        marker.style.transform = 'translateX(' + a.offsetLeft + 'px)';
        marker.style.opacity = '1';
      }

      function updateProgress() {
        if (!progress) return;
        var max = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.transform = 'scaleX(' + (max > 0 ? Math.min(window.scrollY / max, 1) : 0) + ')';
      }

      function updateActive() {
        updateProgress();
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
        placeMarker();
      }

      if (ids.length) {
        window.addEventListener('scroll', updateActive, { passive: true });
        window.addEventListener('resize', function () { updateActive(); placeMarker(); });
        window.addEventListener('load', placeMarker);
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(placeMarker);
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

    (function () {
      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // появление элементов по мере прокрутки: каждый, когда доезжает до экрана;
      // те, что вошли в кадр одновременно, идут с паузой
      var items = document.querySelectorAll('.skill, .row, .pick, .tile, .cert, .chip');
      if (!reduce && 'IntersectionObserver' in window) {
        document.documentElement.classList.add('js');
        var seen = new IntersectionObserver(function (entries) {
          var batch = entries.filter(function (e) { return e.isIntersecting; })
            .sort(function (a, b) {
              var ra = a.boundingClientRect, rb = b.boundingClientRect;
              return ra.top - rb.top || ra.left - rb.left;
            });
          batch.forEach(function (e, i) {
            e.target.style.setProperty('--d', Math.min(i, 8) * 90 + 'ms');
            e.target.classList.add('in');
            seen.unobserve(e.target);
          });
        }, { rootMargin: '0px 0px -6% 0px', threshold: 0.08 });
        items.forEach(function (el) { el.classList.add('reveal-item'); seen.observe(el); });
      }

      // счётчик цифр в шапке
      var nums = document.querySelectorAll('.fact-n');
      if (reduce || !nums.length) return;
      var jobs = [];
      nums.forEach(function (el) {
        var m = /^(\d+)(.*)$/.exec(el.textContent.trim());
        if (!m) return;
        var target = parseInt(m[1], 10);
        var span = document.createElement('span');
        span.className = 'count';
        span.textContent = String(target);
        el.textContent = '';
        el.appendChild(span);
        el.appendChild(document.createTextNode(m[2]));
        span.style.minWidth = span.offsetWidth + 'px';
        span.textContent = '0';
        jobs.push({ span: span, target: target });
      });

      function run() {
        var t0 = Date.now(), dur = 800;
        var timer = window.setInterval(function () {
          var p = Math.min((Date.now() - t0) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          jobs.forEach(function (j) { j.span.textContent = String(Math.round(j.target * eased)); });
          if (p >= 1) window.clearInterval(timer);
        }, 30);
      }

      var facts = document.querySelector('.facts');
      var started = false;
      function start() {
        if (started) return;
        started = true;
        if (document.documentElement.classList.contains('intro-wait')) {
          document.addEventListener('intro-ready', function () { window.setTimeout(run, 300); }, { once: true });
        } else {
          window.setTimeout(run, 300);
        }
      }
      if (facts && 'IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
          if (entries.some(function (e) { return e.isIntersecting; })) { io.disconnect(); start(); }
        }, { threshold: 0.4 });
        io.observe(facts);
      } else { start(); }
    })();

    (function () {
      var html = document.documentElement;
      if (!html.classList.contains('intro-wait')) return;
      var hasPl = html.classList.contains('has-preloader');
      var MIN = hasPl ? 600 : 0;
      var MAX = 1400;
      var done = false;

      function release() {
        if (done) return;
        done = true;
        try { sessionStorage.setItem('pl', '1'); } catch (e) { }
        if (hasPl) html.classList.add('pl-hide');
        html.classList.remove('intro-wait');
        document.dispatchEvent(new Event('intro-ready'));
        if (hasPl) window.setTimeout(function () { html.classList.remove('has-preloader', 'pl-hide'); }, 600);
      }

      var fonts = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
      var loaded = new Promise(function (resolve) {
        if (document.readyState === 'complete') resolve();
        else window.addEventListener('load', resolve, { once: true });
      });
      Promise.all([fonts, loaded]).then(function () {
        window.setTimeout(release, Math.max(0, MIN - performance.now()));
      });
      window.setTimeout(release, MAX);
    })();
