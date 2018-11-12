import React, { Component } from "react";
import "../../css/style.css";

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
          <div className="banner__contact" />
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
        <div className="clients">{clientsList}</div>
      </div>
    );
  }
}

export default Clients;
