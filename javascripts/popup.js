// docs/javascripts/popup.js

document.addEventListener("DOMContentLoaded", () => {
  // Get popup config from page front matter (Material exposes it as meta)
  const popupConfig = window?.page?.meta?.popup;

  if (!popupConfig) return; // no popup for this page

  // Default settings
  const defaults = {
    content: "Hello 👋 This is a popup!",
    position: "bottom-right",
    duration: 0, // 0 = stay until closed
    closeButton: true,
  };

  const settings = { ...defaults, ...popupConfig };

  // Create popup
  const popup = document.createElement("div");
  popup.className = `md-popup ${settings.position} hidden`;

  // Add close button
  if (settings.closeButton) {
    const closeBtn = document.createElement("span");
    closeBtn.innerHTML = "&times;";
    closeBtn.className = "close-btn";
    closeBtn.onclick = () => popup.remove();
    popup.appendChild(closeBtn);
  }

  // Add content (render markdown with Material’s built-in Markdown parser if available)
  const content = document.createElement("div");
  content.innerHTML = window.marked
    ? window.marked.parse(settings.content)
    : settings.content;
  popup.appendChild(content);

  document.body.appendChild(popup);

  // Show popup
  requestAnimationFrame(() => {
    popup.classList.remove("hidden");
  });

  // Auto-hide after duration
  if (settings.duration > 0) {
    setTimeout(() => {
      popup.classList.add("hidden");
      setTimeout(() => popup.remove(), 300);
    }, settings.duration * 1000);
  }
});
