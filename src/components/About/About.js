import React, { Component } from "react";
import "../../css/style.css";

import { translate } from "react-i18next";
import Testimonials from "../Testimonials/Testimonials";

class About extends Component {
  render() {
    return (
      <div>
        <header className="banner__clients">
          <div className="banner__about" />
        </header>
        <div className="features__text__container">
          <div>
            <p className="features__intro__heading">
              Super admin account let's you manage as many vendors as you need
              to!{" "}
            </p>
          </div>
          <div>
            <p className="features__intro__subheading">
              Customize and white label everything to your preferece with global
              settings. Use an iFrame for proof of concept and leverage our API
              to lunch when you are ready.
            </p>
          </div>
        </div>
        <Testimonials />
      </div>
    );
  }
}

export default translate("common")(About);
