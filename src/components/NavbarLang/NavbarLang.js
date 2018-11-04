import React, { Component } from "react";
import "../../css/style.css";
import NavbarLangItems from "./NavbarLangItems";

class NavbarLang extends Component {
  render() {
    return (
      <nav className="navbar__languages">
        <NavbarLangItems />
      </nav>
    );
  }
}

export default NavbarLang;