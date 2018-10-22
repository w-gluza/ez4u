import React, { Component } from "react";
import "../../css/style.css";
import NavigationItems from "./NavigationItems/NavigationItems"





class navbarMain extends Component {
    render() {
        return (
            <nav>
                <NavigationItems></NavigationItems>
            </nav>
        );
    }
}

export default navbarMain;