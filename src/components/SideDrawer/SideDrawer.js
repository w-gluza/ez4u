import React from "react";
import "../../css/style.css";

import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import LangItems from "../Navigation/NavigationItems/LangItems";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <NavigationItems className="hello" />
      <LangItems />
    </nav>
  );
};

export default sideDrawer;
