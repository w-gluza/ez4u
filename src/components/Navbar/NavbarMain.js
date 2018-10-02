import React from "react";
import "../../css/style.css";

import LocalizedStrings from 'react-localization';


import logo from "../../logo.svg";


let strings = new LocalizedStrings({

    // _onSetLanguageToPortugese() {
    //     strings.setLanguage('pt');
    //     this.setState({});
    // }

    pt: {
        home: "Home",
        portfolio: "Portfolio",
        contact: "Contact",
        about: "About Us",
        blog: "Blog"
    },
    en: {
        home: "Home",
        portfolio: "Portfolio",
        contact: "Contactós",
        about: "Sobre Nós",
        blog: "Blog"
    },

    es: {
        home: "Spanish",
        portfolio: "Portfolio",
        contact: "Contactós",
        about: "Sobre Nós",
        blog: "Blog"
    },
});
const navbarMain = props => (
    <div className="navbar_navigation-items navbar">
        <img src={logo} className="navbar__logo" alt="logo" />
        <a className="navbar__item" href="">{strings.home}</a>
        <a className="navbar__item" href="">{strings.portfolio}</a>
        <a className="navbar__item" href="">{strings.contact}</a>
        <a className="navbar__item" href="">{strings.about}</a>
        <a className="navbar__item" href="">{strings.blog}</a>
    </div>
);

export default navbarMain;