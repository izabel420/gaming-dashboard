import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

function StatsCard({ title, items }) {
  return (
    <div className="card stats-card">
      <h2 className="card-title">{title}</h2>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

StatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default StatsCard;
