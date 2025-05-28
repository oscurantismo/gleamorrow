// main.js
import { renderTopBar } from "./topbar.js";

// Tab switching logic
function switchTab(tab) {
  const tabs = ["home", "todo", "info"];
  tabs.forEach(name => {
    const el = document.getElementById(`${name}-screen`);
    if (el) el.style.display = name === tab ? "block" : "none";
  });

  // Store active tab globally if needed
  window.activeTab = tab;
}

// Assign switchTab globally so it can be used inline in HTML
window.switchTab = switchTab;

// Initial load
window.addEventListener("DOMContentLoaded", () => {
  renderTopBar();        // Load the dynamic top bar
  switchTab("home");     // Show the home screen by default
});
