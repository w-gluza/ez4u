import React from "react";
import "../../css/style.css";

const drawerToggleButton = props => (
  <button className="burger__button" onClick={props.click}>
    <div className="burger__button__line" />
    <div className="burger__button__line" />
    <div className="burger__button__line" />
  </button>
);

export default drawerToggleButton;
