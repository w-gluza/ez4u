import React, { Component } from "react";
import "../css/style.css";


class Header extends Component {
  render() {
    return (
      <header>
        <div className="tes2">
          <div className="header__img "></div>
        </div>
        <h1 className="heading__primary">
          <span className="heading__primary--main">Title of the website</span>
          <span className="heading__primary--sub">Subheading of the website</span>
        </h1>
        <button>Button</button>

      </header>


    )
  }
}

export default Header;
