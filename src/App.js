import React, { Component } from "react";
import { translate } from "react-i18next";
import { BrowserRouter, Route } from "react-router-dom";

import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

import Header from "./containers/Header";
import Navbar from "./containers/Navbar";

import FeaturesItems from "./components/Features/FeaturesItems";

import Test from "./components/test/Test";

import Contact from "./components/Contact/Contact";
import Clients from "./components/Clients/Clients";
import Feature from "./components/Clients/FeatureClients";
import Footer from "./containers/Footer";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;
    const { i18n } = this.props;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <BrowserRouter>
        <div style={{ height: "100%" }}>
          <nav className="navbar___languages">
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
          </nav>

          <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}

          <main style={{ marginTop: "0px" }}>
            <Header />
            <Route exact path="/" component={FeaturesItems} />
            <Contact />
            <Test />

            <Route path="/contact" component={Contact} />

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
