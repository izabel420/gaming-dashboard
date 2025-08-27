import React from "react";
import "./Card.css";
import profilePic from "../ISA.jpeg";

function HeaderCard() {
  return (
    <div className="card header-card">
      <div className="header-content">
        <div className="profile-pic-wrapper">
          <img className="profile-pic" src={profilePic} alt="Profile" />
          <span className="online-indicator"></span>
        </div>

        <div className="center-text">
          <h1 className="main-name">Isabelle Wenceslao</h1>
          <p className="ign">@Izabel</p>
        </div>

        <div className="right-links">
          <p>Discord: izabel</p>
          <p>Twitch: iisxchii</p>
          <p>Twitter: ii.izabel.ii</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderCard;
