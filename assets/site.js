/* Ajmal Garden Nursery — lightweight shared interactions */
(() => {
  const body = document.body;
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const quoteModal = document.querySelector('#quoteModal');
  let lastFocusedElement = null;

  const closeQuoteMenus = () => {
    document.querySelectorAll('.quote-menu.is-open').forEach((menu) => {
      menu.classList.remove('is-open');
      const toggle = menu.parentElement.querySelector('.quote-toggle');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
  };

  document.querySelectorAll('.quote-toggle').forEach((toggle) => {
    toggle.addEventListener('click', (event) => {
      event.stopPropagation();
      const menu = toggle.parentElement.querySelector('.quote-menu');
      const willOpen = !menu.classList.contains('is-open');
      closeQuoteMenus();
      if (willOpen) {
        menu.classList.add('is-open');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-actions')) closeQuoteMenus();
  });

  const closeMobileMenu = () => {
    if (!menuToggle || !mobileMenu) return;
    mobileMenu.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    body.classList.remove('menu-open');
  };

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      body.classList.toggle('menu-open', isOpen);
    });
    mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMobileMenu));
  }

  const openModal = () => {
    if (!quoteModal) return;
    closeMobileMenu();
    closeQuoteMenus();
    lastFocusedElement = document.activeElement;
    quoteModal.classList.add('is-open');
    quoteModal.setAttribute('aria-hidden', 'false');
    body.classList.add('modal-open');
    quoteModal.querySelector('[data-close-quote-modal]')?.focus();
  };

  const closeModal = () => {
    if (!quoteModal) return;
    quoteModal.classList.remove('is-open');
    quoteModal.setAttribute('aria-hidden', 'true');
    body.classList.remove('modal-open');
    lastFocusedElement?.focus();
  };

  document.querySelectorAll('[data-open-quote-modal]').forEach((button) => {
    button.addEventListener('click', openModal);
  });
  quoteModal?.querySelectorAll('[data-close-quote-modal]').forEach((button) => {
    button.addEventListener('click', closeModal);
  });
  quoteModal?.addEventListener('click', (event) => {
    if (event.target === quoteModal) closeModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeQuoteMenus();
      closeMobileMenu();
      if (quoteModal?.classList.contains('is-open')) closeModal();
    }
  });

  const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 8);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1000) closeMobileMenu();
  });

  const enquiryForm = document.querySelector('#whatsappEnquiry');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = enquiryForm.elements.name.value.trim();
      const phone = enquiryForm.elements.phone.value.trim();
      const enquiry = enquiryForm.elements.enquiry.value.trim();
      const status = enquiryForm.querySelector('.form-status');

      if (!enquiry) {
        status.textContent = 'Please add a short message so we know how to help.';
        enquiryForm.elements.enquiry.focus();
        return;
      }

      const lines = [
        'Assalam-o-alaikum, I would like to enquire about Ajmal Garden Nursery.',
        name ? `Name: ${name}` : '',
        phone ? `Phone: ${phone}` : '',
        `Message: ${enquiry}`
      ].filter(Boolean);
      const href = `https://wa.me/923006121225?text=${encodeURIComponent(lines.join('\n'))}`;
      status.textContent = 'Opening WhatsApp with your enquiry…';
      window.open(href, '_blank', 'noopener');
    });
  }
})();
