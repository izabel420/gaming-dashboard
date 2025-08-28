import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

function GameCard({ title, release, progress, image }) {
  return (
    <div className="card game-card">
      <img src={image} alt={title} className="game-img" />
      <div className="game-info">
        <h3>{title}</h3>
        <p>Released: {release}</p>
        <p>Progress: {progress}</p>
      </div>
    </div>
  );
}

GameCard.propTypes = {
  title: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default GameCard;
