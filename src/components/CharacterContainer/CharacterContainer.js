import React from "react";
import "./CharacterContainer.css";
import Avatar from "../Avatar/Avatar";

const CharacterContainer = ({ character, onFrameClose }) => (
  <div className="frame">
    <div className="frame__photo">
      <Avatar character={character} />
      <h1 className="frame__photo__name">{character.name}</h1>
      <button className="frame__photo__close" onClick={onFrameClose}>
        x
      </button>
    </div>
  </div>
);

export default CharacterContainer;
