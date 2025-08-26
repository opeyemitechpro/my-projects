
// Popup Javascript

document.addEventListener('DOMContentLoaded', function() {
  if (typeof page_meta !== 'undefined' && page_meta.popup) {
    const popupConfig = page_meta.popup;
    createPopup(popupConfig);
  }
});

function createPopup(config) {
  const defaults = {
    title: 'Notification',
    content: 'This is a popup.',
    position: 'center',
    timeout: 0,
    showCloseButton: true,
  };

  const finalConfig = { ...defaults, ...config };

  // --- Create Popup Elements ---
  const overlay = document.createElement('div');
  overlay.className = 'popup-overlay';

  const container = document.createElement('div');
  container.className = 'popup-container';

  const header = document.createElement('div');
  header.className = 'popup-header';

  const title = document.createElement('span');
  title.className = 'popup-title';
  title.textContent = finalConfig.title;

  const content = document.createElement('div');
  content.className = 'popup-content';
  content.innerHTML = finalConfig.content;

  header.appendChild(title);

  if (finalConfig.showCloseButton) {
    const closeButton = document.createElement('button');
    closeButton.className = 'popup-close';
    closeButton.innerHTML = '&times;';
    closeButton.onclick = () => closePopup(overlay);
    header.appendChild(closeButton);
  }

  container.appendChild(header);
  container.appendChild(content);
  overlay.appendChild(container);
  document.body.appendChild(overlay);

  // --- Positioning ---
  if (finalConfig.position === 'top-right') {
    container.style.position = 'fixed';
    container.style.top = '20px';
    container.style.right = '20px';
  } else if (finalConfig.position === 'bottom-left') {
    container.style.position = 'fixed';
    container.style.bottom = '20px';
    container.style.left = '20px';
  }

  // --- Show Popup ---
  setTimeout(() => {
    overlay.classList.add('visible');
  }, 10); // Small delay to allow for CSS transitions

  // --- Timeout ---
  if (finalConfig.timeout > 0) {
    setTimeout(() => {
      closePopup(overlay);
    }, finalConfig.timeout);
  }
}

function closePopup(overlay) {
  overlay.classList.remove('visible');
  setTimeout(() => {
    overlay.remove();
  }, 300); // Wait for the transition to finish
}