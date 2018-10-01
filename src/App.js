import React, { Component } from "react";


import Toolbar from "./components/Navbar/Navbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";


import Header from "./containers/Header";
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

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{ height: '100%' }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: '0px' }}>
          <Header>
            <p>This is the page content!</p>
          </Header>
          <Clients data={this.props.data} clientsArray={this.props.clientsArray} />
          <Feature data={this.props.data} clientsArray={this.props.clientsArray} />
          <Footer />
        </main>

      </div>
    );
  }
}

export default App;
