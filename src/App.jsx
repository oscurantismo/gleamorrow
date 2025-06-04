import React, { useState } from 'react';
import './styles/styles.css';

import TopBar from './components/TopBar';
import BottomNav from './components/BottomNav';
import TimerIcon from './components/TimerIcon';
import TimerPage from './components/TimerPage';
import { useTimer } from './hooks/useTimer';
import TodoPage from './components/TodoPage';
import InfoPage from './components/InfoPage';




export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showTimer, setShowTimer] = useState(false);
  const timer = useTimer();


  return (
    <>
      <TopBar />

      <main id="page-content">
        {activeTab === 'home' && (
          <section id="home-screen">
            <div className="character"></div>
            <div className="action-buttons">
              <button className="main-button">📝 Start a new reflection</button>
            </div>
          </section>
        )}

        {activeTab === 'todo' && (
          <section id="todo-screen">
            <TodoPage />
          </section>
        )}


        {activeTab === 'info' && (
          <InfoPage />
        )}

      </main>

      {activeTab === 'home' && (
        <TimerIcon
          onClick={() => setShowTimer(true)}
          remaining={timer.remaining}
          running={timer.running}
          paused={timer.paused}
        />
      )}


      {showTimer && <TimerPage {...timer} onClose={() => setShowTimer(false)} />}


      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </>
  );
}
