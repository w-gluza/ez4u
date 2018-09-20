import React from "react";

import FBlogo from "../assets/icons/fb-logo.svg";

import Icon from "../assets/icons/";

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__sections">
          <div className="footer__section">
            <div className="footer__header">Section header</div>
            <ul className="footer__list">
              <li className="footer__list-item">Loremssd</li>
              <li className="footer__list-item">doleor</li>
              <li className="footer__list-item">ijoses</li>
              <li className="footer__list-item">mercado</li>
            </ul>
          </div>

          <div className="footer__section">
            <div className="footer__header">Section header 2</div>
            <ul className="footer__list">
              <li className="footer__list-item">Loremssd</li>
              <li className="footer__list-item">doleor</li>
              <li className="footer__list-item">ijoses</li>
              <li className="footer__list-item">mercado</li>
            </ul>
          </div>

          <div className="footer__section">
            <div className="footer__header">Section header 3</div>
            <ul className="footer__list">
              <li className="footer__list-item">Loremssd</li>
              <li className="footer__list-item">doleor</li>
              <li className="footer__list-item">ijoses</li>
              <li className="footer__list-item">mercado</li>
            </ul>
          </div>

          <div className="footer__section">
            <div className="footer__header">Section header 4</div>
            <ul className="footer__list">
              <li className="footer__list-item">Loremssd</li>
              <li className="footer__list-item">doleor</li>
              <li className="footer__list-item">ijoses</li>
              <li className="footer__list-item">mercado</li>
            </ul>
          </div>
        </div>
        <div className="footer__socialmedia">
          <p>© 2018 EZ4U. All rights reserved.</p>

          <a href="https://www.facebook.com/ez4uteam/">
            <img src={FBlogo} className="icon__social" alt="Facebook logo" />
          </a>
          <a href="https://www.youtube.com/user/ez4uteam">
            <Icon name="youtube" className="icon__social" alt="LinkedIn logo" />
          </a>
          <a href="https://www.linkedin.com/company/ez4u/">
            <Icon fill="#49c" width={50} name="linkedin" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default footer;
