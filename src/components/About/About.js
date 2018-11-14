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
        <section className="about__container">
          <Testimonials />
        </section>
      </div>
    );
  }
}

export default translate("common")(About);
