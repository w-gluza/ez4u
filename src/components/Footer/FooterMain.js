import React, { Component } from "react";
import "../../css/style.css";

import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import { NavLink } from "react-router-dom";

import { translate } from "react-i18next";

class Footer extends Component {
  render() {
    return (
      <section className="footer__sections">
        <div className="footer__section">
          <h4>{this.props.t("footer.section1.head")}</h4>
          <ul className="footer__list">
            <li className="footer__list-item">
              {this.props.t("footer.section1.paragraph1")}
            </li>
          </ul>

          <button className="button__footer">
            <NavLink to="/contact">
              {this.props.t("footer.section1.button")}
            </NavLink>
          </button>
        </div>

        <div className="footer__section">
          <h4>{this.props.t("footer.section2.head")}</h4>
          <ul className="footer__list">
            <div className="footer__list-item">
              <NavigationItems />
            </div>
          </ul>
        </div>

        <div className="footer__section">
          <h4>{this.props.t("footer.section3.head")}</h4>
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
          <h4>{this.props.t("footer.section4.head")}</h4>
          <ul className="footer__list">
            <li className="footer__list-item">
              {this.props.t("footer.section4.paragraph1")}
            </li>
            <li className="footer__list-item footer__link">
              {this.props.t("footer.section4.paragraph2")}
            </li>
            <li className="footer__list-item">
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
            <li className="footer__list-item">
              {this.props.t("footer.section4.paragraph5")}
            </li>
            <li className="footer__list-item">
              <a
                className="footer__link"
                href="mailto:{this.props.t('footer.section4.paragraph6')}"
              >
                {this.props.t("footer.section4.paragraph6")}
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default translate("common")(Footer);
