import React from "react";
import "../../css/style.css";

const drawerToggleButton = props => (
  <div className="burgerBar">
    <button className="burger__button" onClick={props.click}>
      <div className="burger__button__line" />
      <div className="burger__button__line" />
      <div className="burger__button__line" />
    </button>
  </div>
);

export default drawerToggleButton;
