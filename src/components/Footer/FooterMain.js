import React, { Component } from "react";
import "../../css/style.css";

import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import { NavLink } from "react-router-dom";

import { translate } from "react-i18next";

class Footer extends Component {
  render() {
    return (
      <div className="footer__sections">
        <div className="footer__section">
          <div className="footer__header">
            {/* <a href="https://www.linkedin.com/company/ez4u/">
              <Icon name="logo" className="footer__logo" alt="EZ4U logo" />
            </a> */}
            {this.props.t("footer.section1.head")}
          </div>
          <ul className="footer__list">
            <li className="footer__list-item">
              {this.props.t("footer.section1.paragraph1")}
            </li>
            <button className="button__footer">
              <NavLink to="/contact">
                {this.props.t("footer.section1.button")}
              </NavLink>
            </button>
          </ul>
        </div>

        <div className="footer__section">
          <div className="footer__header">
            {this.props.t("footer.section2.head")}
          </div>
          <ul className="footer__list">
            <NavigationItems />
          </ul>
        </div>

        <div className="footer__section">
          <div className="footer__header">
            {this.props.t("footer.section3.head")}
          </div>
          <ul className="footer__list">
            <li className="footer__list-item">
              {this.props.t("footer.section3.paragraph1")}
            </li>
            <li className="footer__list-item">
              {this.props.t("footer.section3.paragraph2")}
            </li>
            <li className="footer__list-item">
              {this.props.t("footer.section3.paragraph3")}
            </li>
            <li className="footer__list-item">
              {this.props.t("footer.section3.paragraph4")}
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <div className="footer__header">
            {this.props.t("footer.section4.head")}
          </div>
          <ul className="footer__list">
            <li className="footer__list-item-subhead">
              {this.props.t("footer.section4.paragraph1")}
            </li>
            <li className="footer__list-item footer__link">
              {this.props.t("footer.section4.paragraph2")}
            </li>
            <li className="footer__list-item-subhead">
              {this.props.t("footer.section4.paragraph3")}
            </li>
            <li className="footer__list-item">
              <a
                className="footer__link"
                href="mailto:{this.props.t('footer.section4.paragraph4')}"
              >
                {this.props.t("footer.section4.paragraph4")}
              </a>
            </li>
            <li className="footer__list-item-subhead">
              {this.props.t("footer.section4.paragraph5")}
            </li>
            <li className="footer__list-item footer__link">
              <a
                className="footer__link"
                href="mailto:{this.props.t('footer.section4.paragraph6')}"
              >
                {this.props.t("footer.section4.paragraph6")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default translate("common")(Footer);
