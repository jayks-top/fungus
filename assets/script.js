document.addEventListener('DOMContentLoaded', () => {

  /* ---------------------------------------------------------------------
     1. Navbar: solid background after scrolling past hero
  --------------------------------------------------------------------- */
  const nav = document.getElementById('mainNav');
  const onScroll = () => {
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------------------------------------------------------------------
     2. Active nav link tracking via IntersectionObserver
  --------------------------------------------------------------------- */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

  sections.forEach((section) => navObserver.observe(section));

  /* Close mobile menu after a link is tapped */
  const collapseEl = document.getElementById('navMenu');
  if (collapseEl && window.bootstrap) {
    const bsCollapse = new bootstrap.Collapse(collapseEl, { toggle: false });
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (collapseEl.classList.contains('show')) bsCollapse.hide();
      });
    });
  }

  /* ---------------------------------------------------------------------
     3. Reveal-on-scroll for elements marked .reveal
  --------------------------------------------------------------------- */
  const revealTargets = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('is-visible'), i % 6 * 60);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  revealTargets.forEach((el) => revealObserver.observe(el));

  /* ---------------------------------------------------------------------
     4. Decorative mycelium network background (signature element)
     Generates a soft branching network of lines + spore-dots that spans
     the full page height, evoking hyphae threading beneath the surface.
  --------------------------------------------------------------------- */
  const svg = document.getElementById('mycelium-bg');
  if (svg) {
    const draw = () => {
      svg.innerHTML = '';
      const w = window.innerWidth;
      const h = document.documentElement.scrollHeight;
      svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
      svg.setAttribute('preserveAspectRatio', 'none');

      const NODE_COUNT = Math.max(14, Math.round((w * h) / 220000));
      const nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
        });
      }

      // connect each node to its 2 nearest neighbours with a gently curved path
      const ns = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      nodes.forEach((node, i) => {
        const distances = nodes
          .map((other, j) => ({ j, d: Math.hypot(node.x - other.x, node.y - other.y) }))
          .filter((o) => o.j !== i)
          .sort((a, b) => a.d - b.d)
          .slice(0, 2);

        distances.forEach(({ j }) => {
          const other = nodes[j];
          const mx = (node.x + other.x) / 2 + (Math.random() - 0.5) * 60;
          const my = (node.y + other.y) / 2 + (Math.random() - 0.5) * 60;
          const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          path.setAttribute('d', `M ${node.x} ${node.y} Q ${mx} ${my} ${other.x} ${other.y}`);
          ns.appendChild(path);
        });
      });
      svg.appendChild(ns);

      // spore dots at each node
      nodes.forEach((node) => {
        const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        c.setAttribute('cx', node.x);
        c.setAttribute('cy', node.y);
        c.setAttribute('r', 1.6 + Math.random() * 1.4);
        svg.appendChild(c);
      });
    };

    draw();
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(draw, 250);
    });
  }

});
