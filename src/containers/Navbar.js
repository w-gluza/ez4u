import React, { Component } from "react";
import "../css/style.css";

import logo from "../logo.svg";



class Navbar extends Component {
    render() {
        return (
            <nav className="nav">
                <nav className="navbar___languages">
                    <a className="navbar__languages__item" href="">pt</a>
                    <a className="navbar__languages__item" href="">en</a>
                    <a className="navbar__languages__item" href="">es</a>
                </nav>
                <nav className="navbar">
                    <img src={logo} className="navbar__logo" alt="logo" />
                    <a className="navbar__item" href="">Home</a>
                    <a className="navbar__item" href="">Portfolio</a>
                    <a className="navbar__item" href="">About Us</a>
                    <a className="navbar__item" href="">Blog</a>
                </nav>
            </nav>

        )
    }
}

export default Navbar;
