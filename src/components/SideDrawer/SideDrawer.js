import React from "react";
import "../../css/style.css";
import NavbarLang from "../NavbarLang/NavbarLang";
import NavigationItems from "../Navbar/NavigationItems/NavigationItems";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <NavigationItems />
      <NavbarLang />
    </nav>
  );
};

export default sideDrawer;
