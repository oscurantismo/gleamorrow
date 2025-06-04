import { useState, useEffect, useRef } from 'react';

export function useTimer() {
  const [remaining, setRemaining] = useState(0);
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running && !paused) {
      intervalRef.current = setInterval(() => {
        setRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setRunning(false);
            setPaused(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [running, paused]);

  const start = (seconds) => {
    setRemaining(seconds);
    setRunning(true);
    setPaused(false);
  };

  const pause = () => {
    if (running) setPaused((prev) => !prev);
  };

  const stop = () => {
    setRunning(false);
    setPaused(false);
    setRemaining(0);
    clearInterval(intervalRef.current);
  };

  return {
    remaining,
    running,
    paused,
    start,
    pause,
    stop,
  };
}
