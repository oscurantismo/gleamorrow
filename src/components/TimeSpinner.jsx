import React, { useRef, useEffect } from 'react';

export default function TimeSpinner({ values, selected, onChange }) {
  const containerRef = useRef();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const itemHeight = 42;
    el.scrollTop = selected * itemHeight;
  }, [selected]);

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    const itemHeight = 42;
    const index = Math.round(el.scrollTop / itemHeight);
    onChange(index);
  };

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      style={{
        height: '126px',
        width: '64px',
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      <div style={{ paddingTop: '42px', paddingBottom: '42px' }}>
        {values.map((val, i) => (
          <div
            key={i}
            style={{
              height: '42px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: i === selected ? '24px' : '18px',
              fontWeight: i === selected ? 'bold' : 'normal',
              color: i === selected ? '#F5C268' : '#999',
              scrollSnapAlign: 'center',
              fontFamily: "'Macondo', cursive",
            }}
          >
            {String(val).padStart(2, '0')}
          </div>
        ))}
      </div>
    </div>
  );
}
