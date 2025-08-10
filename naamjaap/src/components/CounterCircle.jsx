// CounterCircle.jsx
import React from "react";
import "../CounterCircle.css"; // new CSS file for circle styles

export default function CounterCircle({ count, total }) {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = (count / total) * circumference;

  return (
    <div className="circle-container">
      <svg width="140" height="140">
        <circle
          className="bg"
          stroke="#222"
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
    </div>
  );
}
