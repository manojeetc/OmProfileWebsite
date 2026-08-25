// Click any gallery image to open it full-size in a lightbox.
document.addEventListener('DOMContentLoaded', function () {
  var images = document.querySelectorAll('.gallery img');
  if (!images.length) return;

  var box = document.createElement('div');
  box.className = 'lightbox';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.innerHTML =
    '<button class="lightbox-close" aria-label="Close image">&times;</button>' +
    '<div><img alt=""><p></p></div>';
  document.body.appendChild(box);

  var full = box.querySelector('img');
  var caption = box.querySelector('p');

  function open(img) {
    full.src = img.currentSrc || img.src;
    full.alt = img.alt || '';
    caption.textContent = img.alt || '';
    box.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    box.classList.remove('open');
    document.body.style.overflow = '';
    full.src = '';
  }

  images.forEach(function (img) {
    img.addEventListener('click', function () { open(img); });
  });

  box.addEventListener('click', function (e) {
    if (e.target === box || e.target.closest('.lightbox-close')) close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && box.classList.contains('open')) close();
  });
});
