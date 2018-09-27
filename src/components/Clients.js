import React, { Component } from "react";
import "../css/style.css";

import Client from "./Client";

class Clients extends Component {
    render() {

        const { clientsArray } = this.props;
        const clientsList = clientsArray.clientsArray.reverse().map((company, i) => {
            return (
                <div key={company.id}>
                    {/* <li>{company.name}</li> */}
                    {/* <img src={require(company.image)} alt={company.altIMG}></img> */}
                    <img className="clients__images" src={company.image} alt={company.altIMG}></img>
                </div >
            )
        })

        return (
            <div>
                <div className="clients">{clientsList}</div>
                <Client></Client>
            </div >
        );
    }
}

export default Clients;
