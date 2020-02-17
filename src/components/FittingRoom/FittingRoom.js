import React from "react";
import "./FittingRoom.css";
import Avatar from "../Avatar/Avatar";

const FittingRoom = ({ character }) => {
  return (
    <div className="fitting-room">
      <div className="fitting-room__drapes fitting-room__drapes--left"></div>
      <div className="fitting-room__pole"></div>
      <div className="fitting-room__mirror">
        <div className="fitting-room__character">
          <Avatar character={character} />
        </div>
      </div>
      <div className="fitting-room__drapes fitting-room__drapes--right"></div>
    </div>
  );
};

export default FittingRoom;
