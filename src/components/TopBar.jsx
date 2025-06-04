import React from 'react';
import { COLORS, BORDER, FONTS, ZINDEX } from '../styles/theme';

export default function TopBar() {
  const styles = {
    top: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '52px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 14px',
      fontFamily: FONTS.body,
      background: 'transparent',
      zIndex: ZINDEX.topBar,
    },
    profile: {
      display: 'flex',
      alignItems: 'center',
      padding: '6px 16px',
      backgroundColor: `#${COLORS.deepFurnaceBrown}`,
      borderRadius: '999px',
      color: `#${COLORS.kindaYellow}`,
      fontSize: '22px',
      fontWeight: 600,
      fontFamily: FONTS.heading,
      border: `2px solid #${COLORS.strokeBrown}`,
      boxShadow: `2px 2px 0 #${COLORS.strokeBrown}`,
    },
    circle: {
      width: '38px',
      height: '38px',
      borderRadius: '50%',
      background: `#${COLORS.deepFurnaceBrown}`,
      border: `2px solid #${COLORS.strokeBrown}`,
      boxShadow: `2px 2px 0 #${COLORS.strokeBrown}`,
      color: `#${COLORS.kindaYellow}`,
      fontSize: '18px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    coins: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: `#${COLORS.deepFurnaceBrown}`,
      borderRadius: '999px',
      color: `#${COLORS.kindaYellow}`,
      fontSize: '18px',
      fontWeight: 600,
      border: `2px solid #${COLORS.strokeBrown}`,
      boxShadow: `2px 2px 0 #${COLORS.strokeBrown}`,
      padding: '6px 12px',
      minWidth: '74px',
      justifyContent: 'center',
    },
    plus: {
      position: 'absolute',
      bottom: '-2px',
      right: '-2px',
      fontSize: '11px',
      color: `#${COLORS.kindaYellow}`,
      backgroundColor: `#${COLORS.strokeBrown}`,
      padding: '1px 4px',
      borderRadius: '8px',
      boxShadow: '1px 1px 0 #000',
      zIndex: 2,
      fontFamily: FONTS.body,
    },
    coinWrap: {
      position: 'relative',
      display: 'inline-block',
    },
  };

  return (
    <div style={styles.top}>
      {/* Left: Profile */}
      <div style={styles.profile}>
        <span style={{ fontSize: '16px' }}>👤</span>
        <span style={{ marginLeft: '10px', marginRight: '6px' }}>Mora</span>
      </div>

      {/* Right: Icons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={styles.circle}>🔔</div>
        <div style={styles.circle}>🔊</div>

        <div style={styles.coins}>
          <span style={{ marginRight: '6px', fontFamily: FONTS.heading }}>40</span>
          <div style={styles.coinWrap}>
            <span style={{ position: 'relative', zIndex: 1 }}>🪙</span>
            <span style={styles.plus}>+</span>
          </div>
        </div>
      </div>
    </div>
  );
}
