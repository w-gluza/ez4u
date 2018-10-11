import React, { Component } from "react";
import { translate, Trans } from 'react-i18next';

import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";


import Header from "./containers/Header";
import Navbar from "./containers/Navbar";

import Contact from "./components/Contact/Contact";
import Clients from "./components/Clients/Clients";
import Feature from "./components/Clients/FeatureClients";
import Footer from "./containers/Footer";


class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;
    const { t, i18n } = this.props;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{ height: '100%' }}>
        <nav className="navbar___languages">
          <a className="navbar__languages__item" onClick={() => i18n.changeLanguage('en')}>en</a>
          <a className="navbar__languages__item" onClick={() => i18n.changeLanguage('pt')}>pt</a>
          <a className="navbar__languages__item" onClick={() => i18n.changeLanguage('es')}>es</a>
        </nav>


        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}

        <main style={{ marginTop: '0px' }}>
          <Header />
          <Contact />
          <Clients data={this.props.data} clientsArray={this.props.clientsArray} />
          <Feature data={this.props.data} clientsArray={this.props.clientsArray} />
          <Footer />
        </main>

      </div >
    );
  }
}

export default translate('common')(App);