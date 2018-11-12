import React, { Component } from "react";
import "../../css/style.css";
import Icon from "../../assets/icons/";

import { translate } from "react-i18next";
import LangItems from "../Navigation/NavigationItems/LangItems";

class FooterFooter extends Component {
  render() {
    return (
      <div className="footer__footer__container">
        {/* <p> {this.props.t("footerfooter.credentials")}</p> */}
        <div className="lang__footer">
          <LangItems />
        </div>

        <a href="https://www.facebook.com/ez4uteam/">
          <Icon name="facebook" className="icon__social" alt="Facebook logo" />
        </a>
        <a href="https://www.youtube.com/user/ez4uteam">
          <Icon name="youtube" className="icon__social" alt="YouTube logo" />
        </a>
        <a href="https://www.linkedin.com/company/ez4u/">
          <Icon name="linkedin" className="icon__social" alt="LinkedIn logo" />
        </a>
      </div>
    );
  }
}

export default translate("common")(FooterFooter);
