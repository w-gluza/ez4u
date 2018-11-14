import React, { Component } from "react";
import "../../css/style.css";

import { translate } from "react-i18next";

class Blog extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="banner__blog" />
        </header>
        <section className="blog__container">
          <h2>
            Super admin account let's you manage as many vendors as you need to!
          </h2>
          <p>
            Customize and white label everything to your preferece with global
            settings. Use an iFrame for proof of concept and leverage our API to
            lunch when you are ready.
          </p>
        </section>
      </div>
    );
  }
}

export default translate("common")(Blog);
