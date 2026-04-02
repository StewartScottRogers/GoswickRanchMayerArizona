/* ============================================================
   GOSWICK RANCH HOA — Main JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     Navigation: transparent ↔ solid on scroll
  ---------------------------------------------------------- */
  const nav = document.querySelector('.nav');

  function updateNav() {
    if (!nav) return;
    if (window.scrollY > 60) {
      nav.classList.add('nav--solid');
      nav.classList.remove('nav--transparent');
    } else {
      nav.classList.add('nav--transparent');
      nav.classList.remove('nav--solid');
    }
  }

  if (nav) {
    updateNav();
    window.addEventListener('scroll', updateNav, { passive: true });
  }

  /* ----------------------------------------------------------
     Mobile nav toggle
  ---------------------------------------------------------- */
  const hamburger  = document.querySelector('.nav-hamburger');
  const mobileNav  = document.querySelector('.nav-mobile');
  const mobileClose= document.querySelector('.nav-mobile-close');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (mobileClose && mobileNav) {
    mobileClose.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
  // Close on link click
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ----------------------------------------------------------
     Active nav link (by current page filename)
  ---------------------------------------------------------- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ----------------------------------------------------------
     Accordion (FAQ / collapsible sections)
  ---------------------------------------------------------- */
  document.querySelectorAll('.accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const body = btn.nextElementSibling;
      const isOpen = btn.classList.contains('open');

      // Close all siblings
      btn.closest('.accordion-list')?.querySelectorAll('.accordion-btn').forEach(b => {
        b.classList.remove('open');
        b.nextElementSibling?.classList.remove('open');
      });

      if (!isOpen) {
        btn.classList.add('open');
        body?.classList.add('open');
      }
    });
  });

  /* ----------------------------------------------------------
     Simple lightbox for gallery images
  ---------------------------------------------------------- */
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.innerHTML = `
    <div class="lb-backdrop"></div>
    <button class="lb-close" aria-label="Close">&#x2715;</button>
    <button class="lb-prev" aria-label="Previous">&#x2039;</button>
    <button class="lb-next" aria-label="Next">&#x203a;</button>
    <div class="lb-content">
      <img src="" alt="" class="lb-img">
      <p class="lb-caption"></p>
    </div>
  `;
  lightbox.style.cssText = `
    display:none;position:fixed;inset:0;z-index:9000;
    background:rgba(0,0,0,0.92);align-items:center;justify-content:center;
  `;
  lightbox.querySelector('.lb-backdrop').style.cssText = `position:absolute;inset:0`;
  lightbox.querySelector('.lb-close').style.cssText = `
    position:absolute;top:1.5rem;right:1.5rem;background:none;border:none;
    color:#fff;font-size:2rem;cursor:pointer;z-index:1;line-height:1;
  `;
  lightbox.querySelector('.lb-prev').style.cssText = `
    position:absolute;left:1.5rem;top:50%;transform:translateY(-50%);
    background:rgba(255,255,255,0.15);border:none;color:#fff;font-size:3rem;
    cursor:pointer;z-index:1;border-radius:4px;padding:0.25rem 0.75rem;line-height:1;
  `;
  lightbox.querySelector('.lb-next').style.cssText = `
    position:absolute;right:1.5rem;top:50%;transform:translateY(-50%);
    background:rgba(255,255,255,0.15);border:none;color:#fff;font-size:3rem;
    cursor:pointer;z-index:1;border-radius:4px;padding:0.25rem 0.75rem;line-height:1;
  `;
  lightbox.querySelector('.lb-content').style.cssText = `
    position:relative;z-index:1;max-width:90vw;max-height:90vh;text-align:center;
  `;
  lightbox.querySelector('.lb-img').style.cssText = `
    max-width:90vw;max-height:80vh;object-fit:contain;border-radius:4px;
  `;
  lightbox.querySelector('.lb-caption').style.cssText = `
    color:rgba(255,255,255,0.75);font-size:0.85rem;margin-top:0.75rem;
  `;
  document.body.appendChild(lightbox);

  let galleryItems = [];
  let currentIdx   = 0;

  function openLightbox(items, idx) {
    galleryItems = items;
    currentIdx   = idx;
    showLightboxImage(currentIdx);
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = '';
  }

  function showLightboxImage(idx) {
    const item = galleryItems[idx];
    lightbox.querySelector('.lb-img').src     = item.src;
    lightbox.querySelector('.lb-img').alt     = item.alt;
    lightbox.querySelector('.lb-caption').textContent = item.alt;
    lightbox.querySelector('.lb-prev').style.display = idx > 0 ? 'block' : 'none';
    lightbox.querySelector('.lb-next').style.display = idx < galleryItems.length - 1 ? 'block' : 'none';
  }

  lightbox.querySelector('.lb-close').addEventListener('click', closeLightbox);
  lightbox.querySelector('.lb-backdrop').addEventListener('click', closeLightbox);
  lightbox.querySelector('.lb-prev').addEventListener('click', () => {
    if (currentIdx > 0) { currentIdx--; showLightboxImage(currentIdx); }
  });
  lightbox.querySelector('.lb-next').addEventListener('click', () => {
    if (currentIdx < galleryItems.length - 1) { currentIdx++; showLightboxImage(currentIdx); }
  });
  document.addEventListener('keydown', e => {
    if (lightbox.style.display !== 'flex') return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft' && currentIdx > 0) { currentIdx--; showLightboxImage(currentIdx); }
    if (e.key === 'ArrowRight' && currentIdx < galleryItems.length - 1) { currentIdx++; showLightboxImage(currentIdx); }
  });

  // Attach lightbox to all gallery items on page
  function initGallery(galleryEl) {
    if (!galleryEl) return;
    const imgs = Array.from(galleryEl.querySelectorAll('.gallery-img, .gallery-item img'));
    const items = imgs.map(img => ({ src: img.src, alt: img.alt }));
    imgs.forEach((img, i) => {
      img.closest('.gallery-item')?.addEventListener('click', () => openLightbox(items, i));
    });
  }

  document.querySelectorAll('.gallery-grid').forEach(initGallery);

  /* ----------------------------------------------------------
     Smooth appear on scroll (intersection observer)
  ---------------------------------------------------------- */
  const fadeEls = document.querySelectorAll('.card, .feature-card, .rec-card, .info-block, .stat-item, .listing-card');
  if ('IntersectionObserver' in window && fadeEls.length) {
    fadeEls.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    fadeEls.forEach(el => observer.observe(el));
  }

  /* ----------------------------------------------------------
     Contact form: basic client-side validation
  ---------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name    = contactForm.querySelector('[name="name"]')?.value.trim();
      const email   = contactForm.querySelector('[name="email"]')?.value.trim();
      const message = contactForm.querySelector('[name="message"]')?.value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      const phone        = contactForm.querySelector('[name="phone"]')?.value.trim();
      const inquiryType  = contactForm.querySelector('[name="inquiry_type"]')?.value;
      const property     = contactForm.querySelector('[name="property"]')?.value.trim();

      const subjectLabel = inquiryType ? inquiryType.replace(/_/g, ' ') : 'General Inquiry';
      const subject = 'Goswick Ranch HOA – ' + subjectLabel.charAt(0).toUpperCase() + subjectLabel.slice(1);

      let body = 'Name: ' + name + '\n'
               + 'Email: ' + email + '\n';
      if (phone)    body += 'Phone: ' + phone + '\n';
      if (property) body += 'Property: ' + property + '\n';
      body += '\nMessage:\n' + message;

      window.location.href = 'mailto:goswickranchtreasurer@gmail.com'
        + '?subject=' + encodeURIComponent(subject)
        + '&body='    + encodeURIComponent(body);
    });
  }

})();
