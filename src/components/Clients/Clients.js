import React, { Component } from "react";
import "../../css/style.css";


class Clients extends Component {
    render() {

        const { clientsArray } = this.props;
        const clientsList = clientsArray.clientsArray.reverse().map((company, i) => {
            return (
                <div key={company.id}>
                    <img className="clients__images" src={company.image} alt={company.altIMG}></img>
                </div >
            )
        })

        return (
            <div>
                <div className="clients">{clientsList}</div>
            </div >
        );
    }
}

export default Clients;
