import React from "react";
import "./Card.css";

function CircleStat({ label, percentage }) {
  const radius = 95; // ⬅ bump this up (try 70, 80, 90 etc.)
  const stroke = 10;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circle-stat">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="rgba(255,255,255,0.2)"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="url(#grad)"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--neon-pink)" />
            <stop offset="100%" stopColor="var(--neon-blue)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="circle-center">
        <span className="percent">{percentage}%</span>
        <span className="label">{label}</span>
      </div>
    </div>
  );
}

export default CircleStat;
