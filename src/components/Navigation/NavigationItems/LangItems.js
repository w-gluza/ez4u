import React, { Component } from "react";
import "../../../css/style.css";
import { translate } from "react-i18next";

class NavbarLangItems extends Component {
  render() {
    const { i18n } = this.props;
    return (
      <React.Fragment>
        <a
          className="navbar__languages__item"
          onClick={() => i18n.changeLanguage("en")}
        >
          en
        </a>
        <a
          className="navbar__languages__item"
          onClick={() => i18n.changeLanguage("pt")}
        >
          pt
        </a>
        <a
          className="navbar__languages__item"
          onClick={() => i18n.changeLanguage("es")}
        >
          es
        </a>
      </React.Fragment>
    );
  }
}

export default translate("common")(NavbarLangItems);
