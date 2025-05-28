// topbar.js
import { FONT, ZINDEX } from "./styles.js";

export function renderTopBar() {
  const existing = document.getElementById("top-bar");
  if (existing) existing.remove();

  const top = document.createElement("div");
  top.id = "top-bar";
  Object.assign(top.style, {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    height: "54px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 12px",
    zIndex: ZINDEX.topBar || 1000,
    fontFamily: FONT?.heading || "sans-serif",
    pointerEvents: "none",
  });

  // === Left: Profile Pill ===
  const profile = document.createElement("div");
  profile.className = "topbar-pill";
  profile.style.pointerEvents = "auto";
  profile.innerHTML = `<span style="font-size: 18px;">👤</span> <span style="font-weight: bold; margin-left: 6px;">Mora</span>`;
  Object.assign(profile.style, {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    background: "#3e1f25",
    color: "#FFB07F",
    padding: "6px 16px",
    borderRadius: "999px",
    border: "2px solid #622718",
    boxShadow: "2px 2px 0 #2d120a",
    fontSize: "16px",
    cursor: "pointer",
  });

  // === Right: Icon Row ===
  const right = document.createElement("div");
  Object.assign(right.style, {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    pointerEvents: "auto",
  });

  const createCircleIcon = (emoji, label = "") => {
    const btn = document.createElement("div");
    btn.title = label;
    btn.textContent = emoji;
    Object.assign(btn.style, {
      width: "36px",
      height: "36px",
      background: "#3e1f25",
      color: "#FFB07F",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "18px",
      borderRadius: "50%",
      border: "2px solid #622718",
      boxShadow: "2px 2px 0 #2d120a",
      cursor: "pointer",
    });
    return btn;
  };

  const bell = createCircleIcon("🔔", "Notifications");
  const sound = createCircleIcon("🔊", "Sound");

  const coinPill = document.createElement("div");
  coinPill.innerHTML = `<span style="margin-right: 6px;">40</span> 🪙<span style="margin-left: 4px;">➕</span>`;
  Object.assign(coinPill.style, {
    display: "flex",
    alignItems: "center",
    background: "#3e1f25",
    color: "#FFB07F",
    padding: "6px 12px",
    borderRadius: "999px",
    border: "2px solid #622718",
    boxShadow: "2px 2px 0 #2d120a",
    fontSize: "16px",
    cursor: "pointer",
  });

  right.append(bell, sound, coinPill);

  top.append(profile, right);
  document.body.appendChild(top);
}
