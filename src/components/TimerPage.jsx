import React, { useState } from 'react';
import { COLORS, FONTS } from '../styles/theme';
import TimeSpinner from './TimeSpinner';

export default function TimerPage({ remaining, running, paused, start, pause, stop, onClose }) {
  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(5);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const handleStart = () => {
    const totalSeconds = selectedHours * 3600 + selectedMinutes * 60;
    if (totalSeconds <= 0) return;
    start(totalSeconds);
  };

  const styles = {
    page: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: '#2E0B06',
      color: '#FFB07F',
      padding: '24px 16px',
      zIndex: 999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: FONTS.body,
      textAlign: 'center',
    },
    backBtn: {
      position: 'absolute',
      top: '60px',
      left: '16px',
      fontSize: '24px',
      background: 'none',
      border: 'none',
      color: '#FFB07F',
      cursor: 'pointer',
      zIndex: 1000,
    },
    title: {
      fontSize: '28px',
      marginBottom: '12px',
      fontFamily: FONTS.heading,
    },
    desc: {
      fontSize: '16px',
      marginBottom: '20px',
      maxWidth: '300px',
    },
    flower: {
      width: '40vw',
      animation: 'growPlant 2s ease-in-out infinite alternate',
      marginBottom: '20px',
    },
    spinnerRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '12px',
    },
    colon: {
      color: `#${COLORS.kindaYellow}`,
      fontSize: '24px',
      fontWeight: 'bold',
    },
    button: {
      padding: '12px 20px',
      background: '#FFB07F',
      color: '#2E0B06',
      border: 'none',
      fontSize: '16px',
      fontWeight: 'bold',
      borderRadius: '20px',
      cursor: 'pointer',
      margin: '6px',
    },
    stopBtn: {
      background: '#FF6756',
      color: 'white',
    },
    countdown: {
      fontSize: '40px',
      fontWeight: 'bold',
      marginTop: '20px',
    },
    spinnerGroup: {
        display: 'flex',
        gap: '24px',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '16px',
    },
    spinnerColumn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    label: {
        marginBottom: '6px',
        fontSize: '16px',
        color: `#${COLORS.kindaYellow}`,
        fontFamily: FONTS.body,
        fontWeight: 'bold',
        },
    };

  return (
    <>
      <style>
        {`
          @keyframes growPlant {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      <div style={styles.page}>
        <button style={styles.backBtn} onClick={onClose}>←</button>

        <h2 style={styles.title}>Focus Timer</h2>
        <p style={styles.desc}>
          Set a timer to stay focused while you work. Your progress helps grow your virtual garden!
        </p>

        <img src="/img/sunflower.png" alt="sunflower" style={styles.flower} />

        {!running && (
          <>
            <div style={styles.spinnerGroup}>
                <div style={styles.spinnerColumn}>
                    <span style={styles.label}>Hours</span>
                    <TimeSpinner
                        values={Array.from({ length: 24 }, (_, i) => i)}
                        selected={selectedHours}
                        onChange={setSelectedHours}
                    />
                </div>
                <div style={styles.spinnerColumn}>
                    <span style={styles.label}>Minutes</span>
                    <TimeSpinner
                        values={Array.from({ length: 60 }, (_, i) => i)}
                        selected={selectedMinutes}
                        onChange={setSelectedMinutes}
                    />
                </div>
            </div>

            <button style={styles.button} onClick={handleStart}>Start Timer</button>
          </>
        )}

        {running && (
          <>
            <div style={styles.countdown}>{formatTime(remaining)}</div>
            <button style={styles.button} onClick={pause}>
              {paused ? 'Resume' : 'Pause'}
            </button>
            <button style={{ ...styles.button, ...styles.stopBtn }} onClick={stop}>
              Stop Timer
            </button>
          </>
        )}
      </div>
    </>
  );
}
