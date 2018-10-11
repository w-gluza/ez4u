import React from 'react';
import "../../../css/style.css";

const NavigationItem = (props) => (

    <li className="navigation__item">
        <a
            href={props.link}>{props.children}</a>
    </li>

);

export default NavigationItem;