import React from 'react';
import { COLORS, FONTS } from '../styles/theme';

export default function TaskCard({
  task,
  index,
  onEdit,
  onDelete,
  onToggleComplete,
  disableActions = false,
}) {
  const isCompleted = task.completed;

  const formatStars = (level) => {
    const match = level?.match(/★/g);
    const count = match ? match.length : 0;
    return '★'.repeat(count);
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return 'No date';
    const date = new Date(dateStr);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        borderRadius: '28px',
        overflow: 'hidden',
        background: 'none',
      }}
    >
      {/* Left checkbox */}
      <div
        style={{
          background: `#${COLORS.deepFurnaceBrown}`,
          width: '44px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderTopLeftRadius: '28px',
          borderBottomLeftRadius: '28px',
          flexShrink: 0,
        }}
      >
        <button
          onClick={() => !disableActions && onToggleComplete(index)}
          aria-label="toggle complete"
          disabled={disableActions}
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '8px',
            background: isCompleted ? '#F5C268' : '#4E150B',
            border: `2px solid #${COLORS.strokeBrown}`,
            cursor: disableActions ? 'default' : 'pointer',
            padding: 0,
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#000',
            opacity: disableActions ? 0.4 : 1,
          }}
        >
          {isCompleted ? '✓' : ''}
        </button>
      </div>

      {/* Right content */}
      <div
        style={{
          background: '#fff8dc',
          borderTopRightRadius: '28px',
          borderBottomRightRadius: '28px',
          flex: 1,
          padding: '14px 14px 12px',
          fontFamily: FONTS.body,
          display: 'flex',
          flexDirection: 'column',
          opacity: isCompleted ? 0.5 : 1,
        }}
      >
        {/* Top row: title and icons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '12px',
          }}
        >
          <div
            style={{
              fontSize: '15px',
              fontWeight: 'bold',
              color: `#${COLORS.deepFurnaceBrown}`,
              textDecoration: isCompleted ? 'line-through' : 'none',
              flex: 1,
              wordBreak: 'break-word',
            }}
          >
            {task.name}
          </div>

          {!disableActions && (
            <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
              <button onClick={() => onEdit(index)} style={iconBtnStyle()}>✏️</button>
              <button onClick={() => onDelete(index)} style={iconBtnStyle()}>🗑️</button>
            </div>
          )}
        </div>

        {/* Description */}
        {task.description && (
          <div
            style={{
              fontSize: '13px',
              color: `#${COLORS.deepFurnaceBrown}`,
              marginTop: '4px',
              wordBreak: 'break-word',
            }}
          >
            {task.description}
          </div>
        )}

        {/* Date + Stars */}
        <div
          style={{
            marginTop: '10px',
            fontSize: '13px',
            color: `#${COLORS.deepFurnaceBrown}`,
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            flexWrap: 'nowrap',
          }}
        >
          <span>{formatDate(task.deadline)}</span>
          {task.difficulty && (
            <span style={{ fontSize: '14px' }}>{formatStars(task.difficulty)}</span>
          )}
        </div>
      </div>
    </div>
  );
}

function iconBtnStyle() {
  return {
    background: 'transparent',
    border: `2px solid #${COLORS.strokeBrown}`,
    color: `#${COLORS.strokeBrown}`,
    borderRadius: '10px',
    padding: '4px 6px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontFamily: "'Macondo', cursive",
  };
}
