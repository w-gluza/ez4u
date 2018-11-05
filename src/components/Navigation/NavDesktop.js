import React, { Component } from "react";
import "../../css/style.css";
import NavigationItems from "./NavigationItems/NavigationItems";
import LangItems from "./NavigationItems/LangItems";

class NavbarDesktop extends Component {
  render() {
    return (
      <nav>
        <div className="navbar__languages">
          <LangItems />
        </div>
        <div className="navbarDesktop">
          <NavigationItems />
        </div>
      </nav>
    );
  }
}

export default NavbarDesktop;
