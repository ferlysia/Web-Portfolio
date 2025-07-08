// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
});

// ---------------------
// HIGHLIGHT ACTIVE NAV
// ---------------------
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a');

  function removeActiveClass() {
    navLinks.forEach(link => link.classList.remove('active-nav-link'));
  }

  function setActiveLink() {
    let currentSectionId = '';

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      const rect = section.getBoundingClientRect();

      if (
        rect.top <= window.innerHeight * 0.4 &&
        rect.bottom >= window.innerHeight * 0.2
      ) {
        currentSectionId = section.id;
        break;
      }
    }

    if (!currentSectionId && window.scrollY < sections[0].offsetHeight) {
      currentSectionId = 'home';
    }

    removeActiveClass();

    if (currentSectionId) {
      const activeLink = document.querySelector(`nav a[href="#${currentSectionId}"]`);
      if (activeLink) {
        activeLink.classList.add('active-nav-link');
      }
    }
  }

  window.addEventListener('scroll', setActiveLink);
  window.addEventListener('load', setActiveLink);
});

// ---------------------
// THEME TOGGLE LOGIC
// ---------------------
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtns = document.querySelectorAll('.theme-icon-btn');
  const body = document.body;

  function applyTheme(theme) {
    if (theme === 'dark') {
      body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    themeToggleBtns.forEach(btn => {
      if (btn.dataset.theme === theme) {
        btn.classList.add('active-theme');
      } else {
        btn.classList.remove('active-theme');
      }
    });
  }

  const savedTheme =
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  applyTheme(savedTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.dataset.theme;
      applyTheme(theme);
    });
  });
});

// ---------------------
// EMAILJS INIT + FORM LOGIC
// ---------------------
document.addEventListener('DOMContentLoaded', () => {
  // Init EmailJS
  emailjs.init('rAEFFffTymsInJ6ev'); // your public key

  const form = document.getElementById('contact-form');
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    submitBtn.innerText = 'Sending...';
    submitBtn.disabled = true;

    emailjs
      .sendForm('ferlysia_id', 'template_gy22i7f', this)
      .then(() => {
        submitBtn.innerText = 'Sent!';
        submitBtn.classList.add('bg-green-500', 'text-white');

        setTimeout(() => {
          submitBtn.innerText = 'Send Message';
          submitBtn.classList.remove('bg-green-500', 'text-white');
          submitBtn.disabled = false;
          form.reset();
        }, 3000);
      })
      .catch(error => {
        console.error('Email send failed:', error);
        submitBtn.innerText = 'Error!';
        submitBtn.classList.add('bg-red-500', 'text-white');

        setTimeout(() => {
          submitBtn.innerText = 'Send Message';
          submitBtn.classList.remove('bg-red-500', 'text-white');
          submitBtn.disabled = false;
        }, 3000);
      });
  });
});
