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
      <nav className="nav__items__container">
        {/* <div className="burger__bar" /> */}
        <div className="nav__items__mob">
          <NavigationItems />
        </div>
        <div className="nav__lang--mob">
          <LangItems />
        </div>
      </nav>
    </nav>
  );
};

export default NavMobile;
