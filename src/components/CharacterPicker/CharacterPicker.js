import React from "react";
import AvatarIcon from "../AvatarIcon/AvatarIcon";

const CharacterPicker = ({ avatars, select }) => {
  return (
    <div className="cont">
      {avatars.map(character => (
        <div className="cont cont--direction-col">
          <button
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer"
            }}
            onClick={() => select(character)}
          >
            <AvatarIcon face={character.face} name={character.name} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default CharacterPicker;
