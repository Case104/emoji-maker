import React from "react";
import "./LayoutWrapper.css";

const LayoutWrapper = props => (
  <div className="wrapper_container">{props.children}</div>
);

export default LayoutWrapper;
