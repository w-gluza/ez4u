import React, { Component } from "react";
import { translate } from "react-i18next";
import { BrowserRouter, Route } from "react-router-dom";

import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

import Header from "./containers/Header";
import Navbar from "./containers/Navbar";

import FeaturesItems from "./components/Features/FeaturesItems";

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

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <BrowserRouter>
        <div>
          <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}

          <main className="blurred">
            <Header />
            <Route exact path="/" component={FeaturesItems} />
            <Route exact path="/" component={Contact} />
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
