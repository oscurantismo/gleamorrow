import React, { useState } from 'react';
import { COLORS, FONTS } from '../styles/theme';
import TaskOverlay from './TaskOverlay';
import TaskCard from './TaskCard';

export default function TodoPage() {
  const [tasks, setTasks] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleCreate = (task) => setTasks((prev) => [...prev, task]);

  const handleUpdate = (index, updatedTask) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleToggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const activeTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div
      style={{
        paddingTop: '100px',
        paddingBottom: '120px',
        fontFamily: FONTS.body,
        minHeight: '100vh',
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <div
          style={{
            background: `#${COLORS.deepFurnaceBrown}`,
            borderRadius: '20px',
            padding: '10px 24px',
            display: 'inline-block',
            color: `#${COLORS.highlightOrange}`,
            fontFamily: FONTS.heading,
            fontSize: '28px',
            border: `2px solid #${COLORS.strokeBrown}`,
          }}
        >
          To-Do List
        </div>
      </div>

      {/* Back to active tasks label */}
      {showCompleted && (
        <div
          onClick={() => setShowCompleted(false)}
          style={{
            marginLeft: '20px',
            marginBottom: '10px',
            fontFamily: FONTS.body,
            color: `#${COLORS.kindaYellow}`,
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          ← Back to active tasks
        </div>
      )}

      {/* Task container */}
      <div
        style={{
          position: 'relative',
          width: '90vw',
          margin: '0 auto',
          background: 'rgba(0,0,0,0.3)',
          borderRadius: '28px',
          padding: '32px 16px 24px',
          minHeight: '380px',
          boxShadow: `inset 0 0 12px rgba(0,0,0,0.4)`,
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          boxSizing: 'border-box',
        }}
      >
        {/* ⋯ icon and dropdown */}
        <div
          style={{
            position: 'absolute',
            top: '-45px',
            right: '15px',
            zIndex: 100,
          }}
        >
          <div
            onClick={() => setShowMenu(!showMenu)}
            style={{
              background: `#${COLORS.strokeBrown}`,
              width: '36px',
              height: '36px',
              borderRadius: '35%',
              color: `#${COLORS.kindaYellow}`,
              fontSize: '22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            ⋯
          </div>

          {showMenu && (
            <div
              style={{
                position: 'absolute',
                top: '42px',
                right: '0',
                background: `#${COLORS.strokeBrown}`,
                borderRadius: '12px',
                boxShadow: '0 6px 14px rgba(0, 0, 0, 0.3)',
                padding: '8px 0',
                zIndex: 200,
                minWidth: '160px',
                color: `#${COLORS.kindaYellow}`,
              }}
            >
              {!showCompleted && (
                <div
                  onClick={() => {
                    setShowCompleted(true);
                    setShowMenu(false);
                  }}
                  style={dropdownItemStyle()}
                >
                  View completed
                </div>
              )}
              {showCompleted && (
                <div
                  onClick={() => {
                    setShowCompleted(false);
                    setShowMenu(false);
                  }}
                  style={dropdownItemStyle()}
                >
                  Back to active tasks
                </div>
              )}
            </div>
          )}
        </div>

        {/* Task list */}
        {(showCompleted ? completedTasks : activeTasks).length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              color: `#${COLORS.kindaYellow}`,
              fontSize: '16px',
              marginTop: '60px',
              fontFamily: FONTS.body,
            }}
          >
            {showCompleted
              ? 'No completed tasks yet.'
              : 'No tasks yet... Create your first one to begin your journey!'}
          </div>
        ) : (
          (showCompleted ? completedTasks : activeTasks).map((task, index) => (
            <TaskCard
              key={index}
              task={task}
              index={index}
              onEdit={(i) => {
                if (!showCompleted) {
                  setEditTask({ ...task, index });
                  setShowOverlay(true);
                }
              }}
              onDelete={(i) => {
                if (!showCompleted) handleDelete(i);
              }}
              onToggleComplete={(i) => {
                if (!showCompleted) handleToggleComplete(i);
              }}
              disableActions={showCompleted}
            />
          ))
        )}
      </div>

      {/* Floating Create Button */}
      {!showCompleted && (
        <button
          onClick={() => {
            setEditTask(null);
            setShowOverlay(true);
          }}
          style={{
            position: 'fixed',
            bottom: '100px',
            right: '20px',
            background: `#${COLORS.foxyOrange}`,
            color: '#fff8dc',
            border: `2px solid #${COLORS.strokeBrown}`,
            boxShadow: '2px 2px 0 #000',
            padding: '12px 20px',
            borderRadius: '999px',
            fontFamily: FONTS.body,
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            zIndex: 1000,
          }}
        >
          📦 Create a new task
        </button>
      )}

      {/* Task overlay */}
      {showOverlay && (
        <TaskOverlay
          onClose={() => setShowOverlay(false)}
          onSave={(task) => {
            if (editTask) handleUpdate(editTask.index, task);
            else handleCreate(task);
            setShowOverlay(false);
          }}
          initialTask={editTask}
        />
      )}
    </div>
  );
}

function dropdownItemStyle() {
  return {
    padding: '10px 16px',
    fontFamily: FONTS.body,
    fontSize: '14px',
    color: `#${COLORS.highlightOrange}`,
    cursor: 'pointer',
    whiteSpace: 'wrap',
    transition: 'background 0.2s',
  };
}
