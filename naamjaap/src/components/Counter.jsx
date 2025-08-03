// client/src/components/Counter.jsx
import { useEffect } from 'react';

const Counter = ({ count, onIncrement, onReset, isTimerRunning, setIsTimerRunning, setTime }) => {
  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      let seconds = 0;
      interval = setInterval(() => {
        seconds++;
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        setTime(`${minutes.toString().padStart(3, '0')}:${remainingSeconds.toString().padStart(2, '0')}`);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, setTime]);

  const handlePlayPause = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  return (
    <div className="counter-controls">
      <button className="play-button" onClick={handlePlayPause}>
        {isTimerRunning ? 'Pause' : 'Play Timer'}
      </button>
      <button className="count-button" onClick={onIncrement}>
        + Count
      </button>
      <button className="reset-button" onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

export default Counter;