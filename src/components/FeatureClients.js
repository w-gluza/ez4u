import React, { Component } from "react";
import "../css/style.css";

// Fisher-Yates Shuffle Algorithm
function shuffle(arr) {
    var i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};

class Feature extends Component {



    render() {

        const { clientsArray } = this.props;
        const ClientsList = clientsArray.clientsArray.map((company, i) => {
            return (
                <div key={company.id}>
                    <img className="clients__images--features" src={company.image} alt={company.altIMG}></img>
                </div >
            )
        })

        // componentDidMount() {
        //     this.timeout = setInterval(() => {
        //     }, 1500);
        // }
        // componentDidUnmount() {
        //     clearInterval(this.timeout);
        // }
        const shuffleClientsList = shuffle(ClientsList).slice(0, 3);

        return (
            <div>
                <div className="clients__feature--container">{shuffleClientsList}</div>
            </div >
        );
    }
}

export default Feature;
