import React from "react";
import { translate } from "react-i18next";
import { BrowserRouter, Route } from "react-router-dom";
import Headroom from "react-headroom";

import NavMobile from "./components/Navigation/NavMobile";
import BurgerButton from "./components/Navigation/BurgerButton";

import Header from "./containers/Header";
import Navbar from "./containers/Navbar";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";

import FeaturesItems from "./components/Features/FeaturesItems";

import ContactForm from "./components/Contact/ContactForm";
import Clients from "./components/Clients/Clients";
import Feature from "./components/Clients/FeatureClients";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NavMobileOpen: false
    };
    this.BurgerButtonClickHandler = this.BurgerButtonClickHandler.bind(this);
    this.CrossButtonClickHandler = this.CrossButtonClickHandler.bind(this);
  }

  BurgerButtonClickHandler = () => {
    this.setState({
      NavMobileOpen: true
    });
  };

  CrossButtonClickHandler = () => {
    this.setState({
      NavMobileOpen: false
    });
  };

  render() {
    let blurredClasses = "blurred";

    if (this.state.NavMobileOpen) {
      blurredClasses = "blurred open";
    }
    return (
      <BrowserRouter>
        <div>
          <Navbar click={this.state.BurgerButtonClickHandler} />
          <Headroom>
            <div className="toolbar__toggle-button">
              <BurgerButton click={this.BurgerButtonClickHandler} />
            </div>
          </Headroom>
          <NavMobile show={this.state.NavMobileOpen} />
          {this.state.NavMobileOpen ? (
            <div
              className="cross__button"
              onClick={this.CrossButtonClickHandler}
            >
              <div className="cross__button__line" />
              <div className="cross__button__line" />
            </div>
          ) : null}

          <main className={blurredClasses}>
            <Route exact path="/" component={Header} />
            <Route exact path="/" component={FeaturesItems} />
            <Route exact path="/" component={ContactForm} />
            <Route exact path="/contact" component={Contact} />

            <Route
              path="/portfolio"
              render={props => (
                <Clients
                  {...props}
                  data={this.props.data}
                  clientsArray={this.props.clientsArray}
                />
              )}
            />

            <Feature
              data={this.props.data}
              clientsArray={this.props.clientsArray}
            />
            <Footer />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default translate("common")(App);
