/* ============================================================
   script.js — avolkov-II portfolio
   ============================================================ */

(function () {
  'use strict';

  /* ------------------------------------------
     1. Theme Toggle (dark / light)
     ------------------------------------------ */
  const themeToggle = document.getElementById('themeToggle');
  const storedTheme = localStorage.getItem('theme');

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  // Apply stored theme on load
  if (storedTheme) {
    setTheme(storedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    setTheme('light');
  }

  themeToggle.addEventListener('click', function () {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'light' ? 'dark' : 'light');
  });

  /* ------------------------------------------
     2. Mobile Menu Toggle
     ------------------------------------------ */
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  menuToggle.addEventListener('click', function () {
    this.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  /* ------------------------------------------
     3. Smooth Scroll (fallback for older browsers)
     ------------------------------------------ */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ------------------------------------------
     4. Scroll Reveal Animations
     ------------------------------------------ */
  const revealElements = [];

  function gatherRevealElements() {
    // Target all major sections and their children
    const selectors = [
      '.section-title',
      '.about-grid',
      '.skills-grid',
      '.timeline-item',
      '.project-card',
      '.education-card',
      '.contact-links',
      '.contact-intro',
      '.hero-content'
    ];

    selectors.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) {
        if (!el.classList.contains('reveal')) {
          el.classList.add('reveal');
          revealElements.push(el);
        }
      });
    });
  }

  function checkReveal() {
    const windowHeight = window.innerHeight;
    const revealThreshold = 120; // px from bottom of viewport

    revealElements.forEach(function (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight - revealThreshold) {
        el.classList.add('visible');
      }
    });
  }

  // Throttled scroll handler
  let ticking = false;
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        checkReveal();
        ticking = false;
      });
      ticking = true;
    }
  }

  gatherRevealElements();
  checkReveal(); // initial check
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', checkReveal, { passive: true });

  /* ------------------------------------------
     5. Navbar background opacity on scroll
     ------------------------------------------ */
  const navbar = document.querySelector('.navbar');
  let lastScrollY = 0;

  function handleNavOpacity() {
    const scrollY = window.scrollY;
    if (scrollY > 40) {
      navbar.style.borderBottomColor = 'var(--border)';
    } else {
      navbar.style.borderBottomColor = 'transparent';
    }
    lastScrollY = scrollY;
  }

  window.addEventListener('scroll', handleNavOpacity, { passive: true });
  handleNavOpacity();

  /* ------------------------------------------
     6. Keyboard shortcut: 't' toggles theme
     ------------------------------------------ */
  document.addEventListener('keydown', function (e) {
    if (e.key === 't' && !e.ctrlKey && !e.metaKey && !e.altKey) {
      const target = e.target;
      // Don't toggle if user is typing in an input
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) return;
      themeToggle.click();
    }
  });

  /* ------------------------------------------
     7. Console Easter Egg
     ------------------------------------------ */
  console.log(
    '%c avolkov-II %c built with ❤️ and zero latency overhead ',
    'background:#58a6ff;color:#fff;font-weight:700;padding:4px 8px;border-radius:4px 0 0 4px;font-family:JetBrains Mono,monospace;',
    'background:#1c2333;color:#8b949e;padding:4px 8px;border-radius:0 4px 4px 0;font-family:Inter,sans-serif;'
  );

})();
