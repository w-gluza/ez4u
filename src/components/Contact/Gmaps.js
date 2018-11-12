import React, { Component } from "react";
import "../../css/style.css";
import { translate } from "react-i18next";

class Gmaps extends Component {
  render() {
    return (
      <div>
        <iframe
          title="EZ4U location"
          className="gmaps"
          src="https://snazzymaps.com/embed/112502"
        />{" "}
      </div>
    );
  }
}

export default translate("common")(Gmaps);
