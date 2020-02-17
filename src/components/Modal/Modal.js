import React from "react";
import Portal from "../Portal";
import "./Modal.css";

const Modal = ({ isOpen, children }) => {
  return <Portal>{isOpen && <div className="modal">{children}</div>}</Portal>;
};

export default Modal;
