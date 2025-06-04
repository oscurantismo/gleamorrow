import React from 'react';
import { COLORS, BORDER, FONTS } from '../styles/theme';

export default function TaskOverlay({ onClose, onSave, initialTask }) {
  const isEdit = Boolean(initialTask);

  const labelStyle = {
    marginBottom: '6px',
    fontSize: '14px',
    fontWeight: 'bold',
    display: 'block',
    color: `#${COLORS.kindaYellow}`,
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    borderRadius: '8px',
    border: `2px solid #${COLORS.strokeBrown}`,
    background: `#${COLORS.lighterBrown}`,
    color: `#${COLORS.kindaYellow}`,
    marginBottom: '12px',
    fontFamily: FONTS.body,
  };

  const handleSubmit = () => {
    const name = document.getElementById('task-name').value.trim();
    if (!name) return alert("Task name is required.");
    const task = {
      name,
      description: document.getElementById('task-desc').value,
      deadline: document.getElementById('task-deadline').value,
      difficulty: document.getElementById('task-difficulty').value
    };
    onSave(task);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.7)',
      zIndex: 999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: `#${COLORS.deepFurnaceBrown}`,
        color: `#${COLORS.kindaYellow}`,
        padding: '20px',
        borderRadius: BORDER.radius,
        border: BORDER.style,
        width: '90vw',
        maxWidth: '420px',
        fontFamily: FONTS.body
      }}>
        <label style={labelStyle}>Task Name (required)</label>
        <input
          id="task-name"
          defaultValue={initialTask?.name || ''}
          style={inputStyle}
        />

        <label style={labelStyle}>Description</label>
        <textarea
          id="task-desc"
          defaultValue={initialTask?.description || ''}
          style={inputStyle}
        />

        <label style={labelStyle}>Deadline</label>
        <input
          id="task-deadline"
          type="datetime-local"
          defaultValue={initialTask?.deadline || ''}
          style={inputStyle}
        />

        <label style={labelStyle}>Difficulty</label>
        <select
          id="task-difficulty"
          defaultValue={initialTask?.difficulty || ''}
          style={inputStyle}
        >
          <option value="">Choose</option>
          <option value="★ Trivial">★ Trivial</option>
          <option value="★★ Medium">★★ Medium</option>
          <option value="★★★ Hard">★★★ Hard</option>
          <option value="★★★★ Extreme">★★★★ Extreme</option>
        </select>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
          <button onClick={handleSubmit} style={actionBtnStyle(true)}>Save</button>
          <button onClick={onClose} style={actionBtnStyle(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

function actionBtnStyle(primary) {
  return {
    padding: '10px 18px',
    background: primary ? '#F5C268' : '#444',
    color: primary ? '#000' : '#fff',
    border: 'none',
    borderRadius: '14px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontFamily: "'Macondo', cursive"
  };
}
