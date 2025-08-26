// docs/javascripts/popup.js


document.addEventListener("DOMContentLoaded", function() {
  if (window.showdown) {
    const converter = new showdown.Converter();
    const frontMatter = document.body.getAttribute('data-md-front-matter');

    if (frontMatter) {
      const fm = JSON.parse(frontMatter);

      if (fm.popup) {
        const popupConfig = fm.popup;

        const popupOverlay = document.createElement('div');
        popupOverlay.className = 'popup-overlay';

        const popupContent = document.createElement('div');
        popupContent.className = 'popup-content ' + (popupConfig.type || 'note');

        let closeButtonHtml = '';
        if (popupConfig.closeButton !== false) {
          closeButtonHtml = '<button class="popup-close">&times;</button>';
        }

        const titleHtml = popupConfig.title ? `<h2>${popupConfig.title}</h2>` : '';
        const contentHtml = converter.makeHtml(popupConfig.content);

        popupContent.innerHTML = closeButtonHtml + titleHtml + contentHtml;
        popupOverlay.appendChild(popupContent);
        document.body.appendChild(popupOverlay);

        const closePopup = () => {
          popupOverlay.style.display = 'none';
        };

        if (popupConfig.closeButton !== false) {
          popupContent.querySelector('.popup-close').addEventListener('click', closePopup);
        }

        if (popupConfig.timeout) {
          setTimeout(closePopup, popupConfig.timeout);
        }
      }
    }
  }
});