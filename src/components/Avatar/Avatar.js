import React from "react";
import "./Avatar.css";

const Avatar = ({ character, classNames }) => (
  <ul className={`character ${classNames ? classNames : ""}`}>
    {character.hat && (
      <li>
        <span aria-label="hat" role="img">
          {character.hat}
        </span>
      </li>
    )}
    {character.face && (
      <li>
        <span aria-label="head" role="img">
          {character.face}
        </span>
      </li>
    )}
    {character.top && (
      <li>
        <span aria-label="shirt" role="img">
          {character.top}
        </span>
      </li>
    )}
    {character.bottom && (
      <li>
        <span aria-label="pant" role="img">
          {character.bottom}
        </span>
      </li>
    )}
    {character.shoe && (
      <li>
        <span aria-label="shoe" role="img">
          {character.shoe}
        </span>
      </li>
    )}
  </ul>
);

export default Avatar;
