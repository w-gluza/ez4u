import React from "react";
import "../css/style.css";

import NavbarLang from "../components/NavbarLang/NavbarLang";
import NavbarMain from "../components/Navbar/NavbarMain";

import Headroom from "react-headroom";

import DrawerToggleButton from "../components/SideDrawer/DrawerToggleButton";

const toolbar = props => (
  <nav>
    <Headroom>
      <nav className="navbar_mobile__container">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
      </nav>
    </Headroom>

    <NavbarLang className=".navbar__languages" />
    <NavbarMain />
  </nav>
);

export default toolbar;
