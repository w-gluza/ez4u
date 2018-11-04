import React from "react";
import "../css/style.css";

import NavbarLang from "../components/NavbarLang/NavbarLang";
import NavbarDesktop from "../components/Navbar/NavbarDesktop";

import Headroom from "react-headroom";

// import DrawerToggleButton from "../components/SideDrawer/DrawerToggleButton";

const toolbar = props => (
  <nav>
    {/* Navbar Mobile */}
    <Headroom>
      <nav className="navbar_mobile__container">
        <div className="toolbar__toggle-button">
          {/* <DrawerToggleButton click={props.drawerClickHandler} /> */}
        </div>
      </nav>
    </Headroom>

    {/* Navbar Dektop */}
    <NavbarLang className=".navbar__languages" />
    <NavbarDesktop />
  </nav>
);

export default toolbar;
