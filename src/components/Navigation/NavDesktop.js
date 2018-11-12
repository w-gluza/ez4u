import React, { Component } from "react";
import "../../css/style.css";
import NavigationItems from "./NavigationItems/NavigationItems";
import LangItems from "./NavigationItems/LangItems";

import { NavLink } from "react-router-dom";
import Icon from "../../assets/icons/";

class NavbarDesktop extends Component {
  render() {
    return (
      <nav>
        <div className="nav__lang--desk">
          <LangItems />
        </div>
        <div className="navbarDesktop">
          <div id="desktopLogo">
            <NavLink exact to="/">
              <Icon name="logo" className="navbar__logo " alt="EZ4U logo" />{" "}
            </NavLink>
          </div>

          <li className="navigation__item" id="mobileLogo">
            <NavLink exact to="/">
              <Icon name="logo" className="navbar__logo " alt="EZ4U logo" />{" "}
            </NavLink>
          </li>
          <NavigationItems />
        </div>
      </nav>
    );
  }
}

export default NavbarDesktop;
