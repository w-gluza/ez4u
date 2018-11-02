import React from "react";
import "../../css/style.css";
import NavbarLang from "../NavbarLang/NavbarLang";
import NavigationItems from "../Navbar/NavigationItems/NavigationItems";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  let blurredClasses = "blurred";
  if (props.show) {
    drawerClasses = "side-drawer open";
    blurredClasses = "blurred open";
  }
  return (
    <nav className={drawerClasses + blurredClasses}>
      <NavigationItems />
      <NavbarLang />
    </nav>
  );
};

export default sideDrawer;
