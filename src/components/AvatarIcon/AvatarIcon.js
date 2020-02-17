import React from "react";
import "./AvatarIcon.css";

const AvatarIcon = ({ name, face }) => (
  <div className="card">
    <div className="card__avatar">
      <span className="card__avatar__emoji" aria-label="face" role="img">
        {face}
      </span>
    </div>
    <div>{name}</div>
  </div>
);

export default AvatarIcon;
