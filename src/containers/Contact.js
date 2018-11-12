import React, { Component } from "react";
import "../css/style.css";
import { translate } from "react-i18next";

import ContactForm from "../components/Contact/ContactForm";
import Gmaps from "../components/Contact/Gmaps";

class Contact extends Component {
  render() {
    return (
      <section>
        <Gmaps />
        <ContactForm />
      </section>
    );
  }
}

export default translate("common")(Contact);
