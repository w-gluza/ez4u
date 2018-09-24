import React, { Component } from "react";
import "../css/style.css";

import Client from "./Client";

class Clients extends Component {
    render() {

        // const { clientsArray } = this.props;
        // console.log('ABC', clientsArray);
        // const clientsList1 = clientsArray.map(clientsArray => {
        //     return (
        //         <li>{clientsArray}</li>
        //     )
        // })
        const { data } = this.props;
        console.log('XYY', data);
        const clientsList2 = data.map(name => {
            return (
                <li>{name.name}</li>
            )
        })

        return (
            <div>
                {/* <ul>{clientsList1}</ul> */}
                <ul>{clientsList2} </ul>
                <Client></Client>
            </div>
        );
    }
}

export default Clients;
