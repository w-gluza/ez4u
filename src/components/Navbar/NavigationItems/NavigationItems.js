import React, { Component } from "react";
import "../../../css/style.css";

import { NavLink } from "react-router-dom";
import Icon from "../../../assets/icons/";

import { translate } from 'react-i18next';


class navigationItems extends Component {
    render() {
        return (
            <nav className="navbar">

                <li  className="navigation__item">
                    <NavLink exact to='/'><Icon name="logo" className="navbar__logo " alt="EZ4U logo" /> </NavLink>
                </li>

                <li className="navigation__item">
                    <NavLink exact to='/'>{this.props.t('nav.home')} </NavLink>
                </li>

                <li className="navigation__item">
                    <NavLink to='/portfolio'>{this.props.t('nav.portfolio')}</NavLink>
                </li>

                <li className="navigation__item">
                    <NavLink to='/contact'>{this.props.t('nav.contact')}</NavLink>
                </li>

                <li className="navigation__item">
                    <NavLink to='/about'>{this.props.t('nav.about')}</NavLink>
                </li>

                <li className="navigation__item">
                    <NavLink to='/blog'>{this.props.t('nav.blog')}</NavLink>
                </li>

            </nav >
        );
    }
}

export default translate('common')(navigationItems);