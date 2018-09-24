import React, { Component } from "react";
import "../css/style.css";

import Client from "./Client";

class Clients extends Component {
    render() {

        const { clientsArray } = this.props;
        const clientsList = clientsArray.clientsArray.map((data, i) => {
            return (
                <div>
                    <li>{data.client}</li>
                    <li>{data.image}</li>
                </div>
            )
        })

        return (
            <div>
                <ul>{clientsList}</ul>
                <Client></Client>
            </div>
        );
    }
}

export default Clients;
