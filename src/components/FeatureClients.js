import React, { Component } from "react";
import "../css/style.css";

// Fisher-Yates Shuffle Algorithm
function shuffle(arr) {
  var newArray = [].concat(arr);
  var i, j, temp;
  for (i = newArray.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }
  return newArray;
}

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shuffled: false,
      currentIndex: 0
    };
  }
  componentDidMount() {
    const { clientsArray } = this.props;
    if (!this.state.shuffled) {
      this.setState({
        shuffled: shuffle(clientsArray.clientsArray)
      });
    }
    setInterval(() => {
      let nextIndex = this.state.currentIndex + 3;
      if (nextIndex >= this.state.shuffled.length) {
        nextIndex = 0;
      }
      this.setState({
        currentIndex: nextIndex
      });
    }, 1500);
  }
  render() {
    const { clientsArray } = this.props;

    let ClientsList = [];
    if (this.state.shuffled) {
      const nextIndex = this.state.currentIndex + 3;
      ClientsList = this.state.shuffled
        .slice(this.state.currentIndex, nextIndex)
        .map((company, i) => {
          return (
            <div key={company.id}>
              <img
                className="clients__images--features"
                src={company.image}
                alt={company.altIMG}
              />
            </div>
          );
        });
    }

    // componentDidMount() {
    //     this.timeout = setInterval(() => {
    //     }, 1500);
    // }
    // componentDidUnmount() {
    //     clearInterval(this.timeout);
    // }

    /*
    if (this.state.shuffled) {
      shuffleClientsList = this.state.shuffled.slice(
        this.state.currentIndex,
        this.state.currentIndex + 3
      );
    }
    */

    return (
      <div>
        <div className="clients__feature--container">{ClientsList}</div>
      </div>
    );
  }
}

export default Feature;
