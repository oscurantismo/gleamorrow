import React from 'react';

export default function BottomNav({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'home', emoji: '🏠' },
    { id: 'todo', emoji: '📋' },
    { id: 'info', emoji: '🧪' },
  ];

  return (
    <footer className="bottom-nav">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          data-tab={tab.id}
          className={tab.id === activeTab ? 'active-tab' : ''}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.emoji}
        </button>
      ))}
    </footer>
  );
}
