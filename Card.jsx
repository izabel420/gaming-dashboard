import React from "react";
import "./Card.css";

function Card({ type, title, items, children }) {
  if (type === "title-card") {
    return (
      <div className="card title-card">
        <h2>{title}</h2>
      </div>
    );
  }

  if (type === "list-card") {
    return (
      <div className="card list-card">
        <h2>{title}</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  if (type === "milestone-card") {
    return (
      <div className="card milestone-card">
        <h3>{title}</h3>
        {children && <div className="milestone-content">{children}</div>}
      </div>
    );
  }

  return null;
}

export default Card;
