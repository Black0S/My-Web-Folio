/* ═══════════════════════════════════════════════════════════
   PORTFOLIO — JS
   ═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  // ── THEME ─────────────────────────────────────────────────
  const html = document.documentElement;
  const saved = localStorage.getItem('pf-theme') || 'dark';
  html.setAttribute('data-theme', saved);
  updateThemeIcon();

  function toggleTheme() {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('pf-theme', next);
    updateThemeIcon();
  }
  function updateThemeIcon() {
    const dark = html.getAttribute('data-theme') === 'dark';
    document.querySelectorAll('.theme-icon').forEach(el => el.textContent = dark ? '☀️' : '🌙');
  }
  document.querySelectorAll('.theme-btn').forEach(b => b.addEventListener('click', toggleTheme));

  // ── NAV ACTIVE ────────────────────────────────────────────
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(l => {
    if (l.getAttribute('href') === page) l.classList.add('active');
  });

  // ── HAMBURGER ─────────────────────────────────────────────
  const ham = document.querySelector('.hamburger');
  const mob = document.querySelector('.mobile-menu');
  if (ham && mob) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('open');
      mob.classList.toggle('open');
    });
    mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      ham.classList.remove('open');
      mob.classList.remove('open');
    }));
  }

  // ── SCROLL REVEAL ─────────────────────────────────────────
  const els = document.querySelectorAll('[data-reveal]');
  if (els.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const delay = +e.target.dataset.delay || 0;
          setTimeout(() => e.target.classList.add('revealed'), delay);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });
    els.forEach(el => io.observe(el));
  }

  // ── COUNTER ANIMATION ─────────────────────────────────────
  document.querySelectorAll('[data-count]').forEach(el => {
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        const target = +el.dataset.count;
        let start = null;
        const ease = t => 1 - Math.pow(1 - t, 3);
        const step = ts => {
          if (!start) start = ts;
          const prog = Math.min((ts - start) / 1600, 1);
          el.textContent = Math.round(ease(prog) * target);
          if (prog < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        io.unobserve(el);
      }
    }, { threshold: 0.5 });
    io.observe(el);
  });

  // ── BACK TO TOP ───────────────────────────────────────────
  const btt = document.querySelector('.back-top');
  if (btt) {
    window.addEventListener('scroll', () => btt.classList.toggle('visible', scrollY > 500), { passive: true });
    btt.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ── NAV SHADOW ON SCROLL ──────────────────────────────────
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.borderBottomColor = scrollY > 20 ? 'var(--line-h)' : 'var(--line)';
    }, { passive: true });
  }

  // ── PROJECT FILTER ────────────────────────────────────────
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      document.querySelectorAll('[data-cat]').forEach(item => {
        item.style.display = (cat === 'all' || item.dataset.cat === cat) ? '' : 'none';
      });
    });
  });

  // ── BLOG SEARCH ───────────────────────────────────────────
  const bs = document.querySelector('.blog-search-wrap input');
  if (bs) {
    bs.addEventListener('input', () => {
      const q = bs.value.toLowerCase().trim();
      document.querySelectorAll('.article-item').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(q) ? '' : 'none';
      });
    });
  }

  // ── CONTACT FORM ──────────────────────────────────────────
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type=submit]');
      const ok = form.querySelector('.form-success');
      btn.textContent = 'Envoi…';
      btn.disabled = true;
      setTimeout(() => {
        form.querySelectorAll('input,textarea').forEach(f => f.value = '');
        if (ok) ok.style.display = 'block';
        btn.textContent = 'Envoyer →';
        btn.disabled = false;
        setTimeout(() => { if (ok) ok.style.display = 'none'; }, 4000);
      }, 1400);
    });
  }

  // ── STAGGER CHILDREN ─────────────────────────────────────
  document.querySelectorAll('[data-stagger]').forEach(parent => {
    Array.from(parent.children).forEach((child, i) => {
      child.style.transitionDelay = i * 70 + 'ms';
    });
  });

  // ── TYPEWRITER ────────────────────────────────────────────
  const tw = document.querySelector('[data-words]');
  if (tw) {
    const words = JSON.parse(tw.dataset.words);
    let wi = 0, ci = 0, del = false;
    const tick = () => {
      const w = words[wi];
      tw.textContent = w.slice(0, ci);
      if (!del) {
        ci < w.length ? (ci++, setTimeout(tick, 95)) : setTimeout(() => { del = true; tick(); }, 2000);
      } else {
        ci > 0 ? (ci--, setTimeout(tick, 55)) : (() => { del = false; wi = (wi + 1) % words.length; setTimeout(tick, 400); })();
      }
    };
    tick();
  }

});
