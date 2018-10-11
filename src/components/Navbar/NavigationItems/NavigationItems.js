import React, { Component } from "react";
import "../../../css/style.css";
import NavigationItem from "../NavigationItem/NavigationItem"

import { translate } from 'react-i18next';


class navigationItems extends Component {
    render() {
        return (
            <ul>
                <img src="#" className="navbar__logo" alt="logo" />

                <NavigationItem link="/">{this.props.t('nav.home')}</NavigationItem>
                <NavigationItem link="/">{this.props.t('nav.portfolio')}</NavigationItem>
                <NavigationItem link="/">{this.props.t('nav.contact')}</NavigationItem>
                <NavigationItem link="/">{this.props.t('nav.about')}</NavigationItem>
                <NavigationItem link="/">{this.props.t('nav.blog')}</NavigationItem>


            </ul>
        );
    }
}

export default translate('common')(navigationItems);