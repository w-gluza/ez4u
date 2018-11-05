import React from "react";
import "../../css/style.css";

import NavigationItems from "./NavigationItems/NavigationItems";
import LangItems from "./NavigationItems/LangItems";

const NavMobile = props => {
  let drawerClasses = "nav__mobile";
  if (props.show) {
    drawerClasses = "nav__mobile open";
  }

  return (
    <nav className={drawerClasses}>
      <NavigationItems className="hello" />
      <LangItems />
    </nav>
  );
};

export default NavMobile;
