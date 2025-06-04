import React from 'react';
import { COLORS, FONTS } from '../styles/theme';

const liStyle = {
  fontSize: '15px',
  marginBottom: '10px',
  color: `#${COLORS.kindaYellow}`,
};

export default function InfoPage() {
  return (
    <section
      id="info-screen"
      style={{
        padding: '24px',
        fontFamily: FONTS.body,
        color: `#${COLORS.kindaYellow}`,
        lineHeight: 1.6,
        maxWidth: '680px',
        margin: '0 auto',
      }}
    >
      <h2
        style={{
          fontSize: '28px',
          fontFamily: FONTS.heading,
          marginBottom: '12px',
          color: `#${COLORS.kindaYellow}`,
        }}
      >
        Welcome to Gleamorrow
      </h2>

      <p style={{ fontSize: '16px', marginBottom: '18px' }}>
        Gleamorrow is your cosy companion for daily reflections, emotional tracking, and self-kindness. Complete gentle
        tasks, monitor your moods, and grow alongside your companion <strong>Mora</strong>.
      </p>

      <h3
        style={{
          fontSize: '20px',
          fontFamily: FONTS.heading,
          marginTop: '28px',
          marginBottom: '8px',
          color: `#${COLORS.kindaYellow}`,
        }}
      >
        🌱 Current Features
      </h3>

      <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
        <li style={liStyle}>Create and complete daily reflection tasks</li>
        <li style={liStyle}>Track your emotional wellbeing and progress over time</li>
        <li style={liStyle}>Unlock milestone-based progress using your timer</li>
        <li style={liStyle}>Visual growth with relaxing animations and soothing UI</li>
      </ul>

      <h3
        style={{
          fontSize: '20px',
          fontFamily: FONTS.heading,
          marginTop: '28px',
          marginBottom: '8px',
          color: `#${COLORS.kindaYellow}`,
        }}
      >
        🔮 Upcoming Features
      </h3>

      <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
        <li style={liStyle}>
          <strong>Plant Collection:</strong> Earn and grow virtual plants that reflect your consistency and mood.
        </li>
        <li style={liStyle}>
          <strong>In-App Shop:</strong> Purchase potion boosts and customise <strong>Seren</strong> with new looks and
          accessories.
        </li>
        <li style={liStyle}>
          <strong>Fox Pet Companion:</strong> Take care of a fox named <strong>Mora</strong> — feed, nurture, and bond
          with them over time.
        </li>
      </ul>

      <p style={{ fontSize: '15px', marginTop: '24px', fontStyle: 'italic' }}>
        Gleamorrow is all about self-paced progress, visual comfort, and emotional wellbeing. There’s no rush — just calm,
        thoughtful reflection in your own rhythm.
      </p>
    </section>
  );
}
