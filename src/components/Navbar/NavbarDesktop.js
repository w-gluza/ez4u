import React, { Component } from "react";
import "../../css/style.css";
import NavigationItems from "./NavigationItems/NavigationItems";

class NavbarDesktop extends Component {
  render() {
    return (
      <nav className="navbar">
        <NavigationItems />
      </nav>
    );
  }
}

export default NavbarDesktop;
