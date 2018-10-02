import React from "react";
import "../../css/style.css";
import NavbarMain from "../Navbar/NavbarMain";
import NavbarLang from "../Navbar/NavbarLang";




const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <li>
                <a href="/">Products</a>
            </li>
            <NavbarMain></NavbarMain>
            <NavbarLang></NavbarLang>
        </nav>
    );
};

export default sideDrawer;
