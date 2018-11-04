import React from "react";
import { translate } from "react-i18next";
import { BrowserRouter, Route } from "react-router-dom";

import SideDrawer from "./components/SideDrawer/SideDrawer";
// import Backdrop from "./components/Backdrop/Backdrop";
import DrawerToggleButton from "./components/SideDrawer/DrawerToggleButton";

import Header from "./containers/Header";
import Navbar from "./containers/Navbar";

import FeaturesItems from "./components/Features/FeaturesItems";

import Contact from "./components/Contact/Contact";
import Clients from "./components/Clients/Clients";
import Feature from "./components/Clients/FeatureClients";
import Footer from "./containers/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false
    };
    this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
    this.backdropClickHandler = this.backdropClickHandler.bind(this);
  }

  drawerToggleClickHandler = () => {
    this.setState({
      sideDrawerOpen: true
    });
  };

  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false
    });
  };

  render() {
    let blurredClasses = "blurred";

    if (this.state.sideDrawerOpen) {
      blurredClasses = "blurred open";
    }
    return (
      <BrowserRouter>
        <div>
          <Navbar click={this.state.drawerToggleClickHandler} />
          <div className="toolbar__toggle-button">
            <DrawerToggleButton click={this.drawerToggleClickHandler} />
          </div>
          <SideDrawer show={this.state.sideDrawerOpen} />
          {this.state.sideDrawerOpen ? (
            <div className="backdrop" onClick={this.backdropClickHandler} />
          ) : null}
          <main className={blurredClasses}>
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
