// docs/javascripts/popup.js

document.addEventListener("DOMContentLoaded", () => {
  // Material for MkDocs exposes page meta via __md_get("__page")
  const pageData = typeof __md_get === "function" ? __md_get("__page") : null;
  const popupConfig = pageData && pageData.meta && pageData.meta.popup;

  if (!popupConfig) return; // No popup defined for this page

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

  // Add content (Markdown support if Marked.js is available)
  const content = document.createElement("div");
  if (window.marked) {
    content.innerHTML = window.marked.parse(settings.content);
  } else {
    // fallback: allow basic HTML
    content.innerHTML = settings.content;
  }
  popup.appendChild(content);

  document.body.appendChild(popup);

  // Show popup
  requestAnimationFrame(() => {
    popup.classList.remove("hidden");
  });

  // Auto-hide
  if (settings.duration > 0) {
    setTimeout(() => {
      popup.classList.add("hidden");
      setTimeout(() => popup.remove(), 300);
    }, settings.duration * 1000);
  }
});
