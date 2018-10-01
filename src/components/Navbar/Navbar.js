import React from "react";
import "../../css/style.css";

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

import logo from "../../logo.svg";

const toolbar = props => (
    <header className="navbar__container">
        {/* <nav className="toolbar__navigation"> */}
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <nav className="navbar___languages">
            <a className="navbar__languages__item" href="">pt</a>
            <a className="navbar__languages__item" href="">en</a>
            <a className="navbar__languages__item" href="">es</a>
        </nav>

        <div className="toolbar_navigation-items navbar">
            <img src={logo} className="navbar__logo" alt="logo" />
            <a className="navbar__item" href="">Home</a>
            <a className="navbar__item" href="">Portfolio</a>
            <a className="navbar__item" href="">About Us</a>
            <a className="navbar__item" href="">Blog</a>
        </div>
        {/* </nav> */}
    </header>
);

export default toolbar;