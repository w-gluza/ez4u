import React, { Component } from "react";
import "../../css/style.css";

import { translate } from "react-i18next";

class HeaderMain extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__img " />

        <div className="header__text__container">
          <h1>
            <span className="header__span">{this.props.t("header.head1")}</span>{" "}
            {this.props.t("header.head2")}
          </h1>
          <h1>
            <span className="header__span">
              {this.props.t("header.subhead1")}
            </span>{" "}
            {this.props.t("header.subhead2")}
          </h1>
          <button className="button__header">
            {this.props.t("header.button")}
          </button>
        </div>
      </header>
    );
  }
}

export default translate("common")(HeaderMain);
