/**
 * WEBSITE BLOG PRIBADI - MOH. RIKSAN
 * Pelatihan CBT26 - UKM Creative Computer Club
 * Universitas Trunojoyo Madura (UTM)
 * File: script.js
 * Deskripsi: Interaktivitas navigasi mobile, validasi form, dan interaksi UI
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle (Hamburger)
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      
      // Ubah ikon SVG saat terbuka / tertutup
      if (isOpen) {
        mobileToggle.innerHTML = `
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        `;
      } else {
        mobileToggle.innerHTML = `
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        `;
      }
    });

    // Tutup menu mobile ketika link ditekan
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          mobileToggle.setAttribute('aria-expanded', 'false');
          mobileToggle.innerHTML = `
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          `;
        }
      });
    });
  }

  // 2. Dynamic Copyright Year
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 3. Interactive Contact Form Submission (Halaman contact.html)
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const nameInput = document.getElementById('senderName');
      const emailInput = document.getElementById('senderEmail');
      const messageInput = document.getElementById('senderMessage');

      const senderName = nameInput ? nameInput.value.trim() : 'Teman';

      // Tampilkan notifikasi sukses interaktif
      formFeedback.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
          <span> Terima kasih <strong>${escapeHtml(senderName)}</strong>! Pesan Anda telah berhasil terkirim kepada Moh. Riksan.</span>
        </div>
      `;
      formFeedback.className = 'form-feedback-box success';

      // Reset form input
      contactForm.reset();

      // Scroll halus ke pesan feedback jika diperlukan
      formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      // Hilangkan pesan setelah 7 detik
      setTimeout(() => {
        formFeedback.style.display = 'none';
        formFeedback.className = 'form-feedback-box';
      }, 7000);
    });
  }

  // Helper fungsi untuk sanitasi input HTML sederhana
  function escapeHtml(string) {
    const div = document.createElement('div');
    div.textContent = string;
    return div.innerHTML;
  }
});
