// topbar.js
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
    height: "52px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 14px",
    background: "transparent",
    zIndex: 999,
    fontFamily: "Ashemore Ext Regular, sans-serif",
  });

  // === Profile Pill ===
  const profile = document.createElement("div");
  profile.innerHTML = `
    <span style="font-size: 18px">👤</span>
    <span style="margin-left: 6px">Mora</span>
  `;
  Object.assign(profile.style, {
    display: "flex",
    alignItems: "center",
    padding: "6px 16px",
    backgroundColor: "#2E0B06",
    borderRadius: "999px",
    color: "#FFB07F",
    fontSize: "18px",
    fontWeight: "600",
    border: "2px solid #561C0D",
    boxShadow: "2px 2px 0 #561C0D",
  });

  // === Right Icons Group ===
  const rightGroup = document.createElement("div");
  Object.assign(rightGroup.style, {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  });

  const createCircle = (emoji) => {
    const el = document.createElement("div");
    el.textContent = emoji;
    Object.assign(el.style, {
      width: "38px",
      height: "38px",
      borderRadius: "50%",
      background: "#2E0B06",
      border: "2px solid #561C0D",
      boxShadow: "2px 2px 0 #561C0D",
      color: "#FFB07F",
      fontSize: "18px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    });
    return el;
  };

  const bell = createCircle("🔔");
  const sound = createCircle("🔊");

  // === Coins Pill ===
  const coins = document.createElement("div");
  coins.innerHTML = `
    <span style="margin-right: 6px">40</span>
    <span style="font-size: 18px">🪙</span>
    <span style="margin-left: 4px; font-size: 16px;">➕</span>
  `;
  Object.assign(coins.style, {
    display: "flex",
    alignItems: "center",
    padding: "6px 16px",
    backgroundColor: "#2E0B06",
    borderRadius: "999px",
    color: "#FFB07F",
    fontSize: "18px",
    fontWeight: "600",
    border: "2px solid #561C0D",
    boxShadow: "2px 2px 0 #561C0D",
  });

  rightGroup.append(bell, sound, coins);
  top.append(profile, rightGroup);
  document.body.appendChild(top);
}
