export default function TimerIcon({ remaining, running, paused, onClick }) {
  const format = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  const styles = {
    container: {
      position: 'fixed',
      top: '120px',
      right: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 998,
      cursor: 'pointer',
    },
    iconWrap: {
      width: '70px',
      height: '70px',
      background: '#2E0B06',
      borderRadius: '18px',
      border: '4px solid #C2552B',
      boxShadow: '2px 2px 0 #561C0D',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    hourglass: {
      fontSize: '32px',
      color: '#FFCC68',
    },
    badge: {
      position: 'absolute',
      top: '-6px',
      right: '-6px',
      background: '#2E0B06',
      color: 'white',
      fontSize: '14px',
      fontWeight: 'bold',
      width: '24px',
      height: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      border: '2px solid #561C0D',
      boxShadow: '1px 1px 0 #000',
    },
    countdown: {
      marginTop: '6px',
      fontSize: '14px',
      color: '#FFCC68',
      fontWeight: 'bold',
      textAlign: 'center',
      display: running || paused ? 'block' : 'none',
    },
  };

  return (
    <div style={styles.container} onClick={onClick}>
      <div style={styles.iconWrap}>
        <div style={styles.hourglass}>⏳</div>
        <div style={styles.badge}>!</div>
      </div>
      {(running || paused) && <div style={styles.countdown}>{format(remaining)}</div>}
    </div>
  );
}
