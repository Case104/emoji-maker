import { useEffect } from "react";
import { createPortal } from "react-dom";

const root = document.getElementById("emoji-portal");
const el = document.createElement("section");

const Portal = ({ children }) => {
  useEffect(() => {
    root.appendChild(el);
  }, []);

  return createPortal(children, el);
};
export default Portal;
