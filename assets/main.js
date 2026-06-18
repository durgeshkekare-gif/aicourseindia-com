/* aicourseindia.com — shared JS */
document.addEventListener('DOMContentLoaded', function () {
  // Nav hamburger
  const ham = document.querySelector('.nav-hamburger');
  const links = document.querySelector('.nav-links');
  if (ham && links) {
    ham.addEventListener('click', function () {
      const open = links.classList.toggle('nav-open');
      Object.assign(links.style, open ? {
        display:'flex', flexDirection:'column', position:'absolute',
        top:'68px', left:'0', right:'0', background:'rgba(10,15,30,0.98)',
        padding:'1rem 5%', gap:'1rem', zIndex:'199',
        borderBottom:'1px solid rgba(255,255,255,0.06)',
        boxShadow:'0 8px 32px rgba(0,0,0,0.5)'
      } : { display:'none' });
    });
  }
  // Active nav
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(function(a) {
    const href = a.getAttribute('href') || '';
    if (href !== '/' && path.startsWith(href.replace(/\/index\.html$/, ''))) {
      a.classList.add('active');
    }
  });
});

function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

function submitLead(e, formId, successId) {
  e.preventDefault();
  const form = document.getElementById(formId);
  const success = document.getElementById(successId);
  if (form) form.style.display = 'none';
  if (success) success.style.display = 'block';
}
