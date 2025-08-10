// // client/src/components/Counter.jsx
// import { useEffect } from 'react';

// const Counter = ({ count, onIncrement, onReset, isTimerRunning, setIsTimerRunning, setTime }) => {
//   useEffect(() => {
//     let interval;
//     if (isTimerRunning) {
//       let seconds = 0;
//       interval = setInterval(() => {
//         seconds++;
//         const minutes = Math.floor(seconds / 60);
//         const remainingSeconds = seconds % 60;
//         setTime(`${minutes.toString().padStart(3, '0')}:${remainingSeconds.toString().padStart(2, '0')}`);
//       }, 1000);
//     }
//     return () => clearInterval(interval);
//   }, [isTimerRunning, setTime]);

//   const handlePlayPause = () => {
//     setIsTimerRunning(!isTimerRunning);
//   };

//   return (
//     <div className="counter-controls">
//       <button className="play-button" onClick={handlePlayPause}>
//         {isTimerRunning ? 'Pause' : 'Play Timer'}
//       </button>
//       <button className="count-button" onClick={onIncrement}>
//         + Count
//       </button>
//       <button className="reset-button" onClick={onReset}>
//         Reset
//       </button>
//     </div>
//   );
// };

// export default Counter;



import { useEffect, useState } from "react";
import '../CounterCircle.css' // new CSS file for circle + sparkles

const Counter = ({
  count,
  onIncrement,
  onReset,
  isTimerRunning,
  setIsTimerRunning,
  setTime,
  total = 108
}) => {
  const [sparkles, setSparkles] = useState([]);

  // Timer effect
  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      let seconds = 0;
      interval = setInterval(() => {
        seconds++;
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        setTime(
          `${minutes.toString().padStart(3, "0")}:${remainingSeconds
            .toString()
            .padStart(2, "0")}`
        );
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, setTime]);

  // Toggle timer
  const handlePlayPause = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  // Add sparkle animation on click
  const handleCount = () => {
    onIncrement();
    const id = Date.now();
    setSparkles((prev) => [...prev, { id, x: Math.random() * 60 - 30 }]);
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== id));
    }, 600);
  };

  // Circle progress calculation
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = (count / total) * circumference;

  return (
    <div className="counter-container">
      <div className="circle-container">
        <svg width="140" height="140">
          <circle
            className="bg"
            stroke="#333"
            strokeWidth="8"
            fill="transparent"
            r={radius}
            cx="70"
            cy="70"
          />
          <circle
            className="progress"
            stroke="#00bfff"
            strokeWidth="8"
            fill="transparent"
            r={radius}
            cx="70"
            cy="70"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dy=".3em"
            className="count-text"
          >
            {count}
          </text>
        </svg>

        {/* Sparkles */}
        {sparkles.map((s) => (
          <div
            key={s.id}
            className="sparkle"
            style={{
              left: `calc(50% + ${s.x}px)`,
              top: "50%"
            }}
          />
        ))}
      </div>

      <div className="counter-controls">
        <button className="play-button" onClick={handlePlayPause}>
          {isTimerRunning ? "Pause" : "Play Timer"}
        </button>
        <button className="count-button" onClick={handleCount}>
          + Count
        </button>
        <button className="reset-button" onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
