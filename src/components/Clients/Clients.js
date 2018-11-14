import React, { Component } from "react";
import "../../css/style.css";
import { translate } from "react-i18next";

class Clients extends Component {
  render() {
    const { clientsArray } = this.props;
    const clientsList = clientsArray.clientsArray
      .reverse()
      .map((company, i) => {
        return (
          <div key={company.id}>
            <img
              className="clients__images"
              src={company.image}
              alt={company.altIMG}
            />
          </div>
        );
      });

    return (
      <div>
        <header className="banner">
          <div className="banner__clients" />
        </header>
        <section className="portfolio__container">
          <h2>{this.props.t("portfolio.head")}</h2>
          <p>{this.props.t("portfolio.subhead")}</p>
        </section>
        <div className="clients">{clientsList}</div>
      </div>
    );
  }
}

export default translate("common")(Clients);
