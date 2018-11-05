import React from "react";
import "../css/style.css";

// import NavbarLang from "../components/NavbarLang/NavbarLang";
// import NavbarDesktop from "../components/Navigation/NavigationItems/NavbarLangItems";
import NavbarDesktop from "../components/Navigation/NavDesktop";
import sideDrawer from "../components/SideDrawer/SideDrawer";

import Headroom from "react-headroom";

const toolbar = props => (
  <nav>
    {/* Navbar Mobile */}
    <Headroom>
      <sideDrawer />
    </Headroom>

    {/* Navbar Dektop */}
    <Headroom>
      <NavbarDesktop />
    </Headroom>
  </nav>
);

export default toolbar;
