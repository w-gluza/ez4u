import React, { Component } from "react";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      something: "something",
      isHidden: true,
      features: [
        {
          name: "sms.features",
          key: "1",
          icon: "sms icon"
        },
        {
          name: "pricing.features",
          key: "2",
          icon: "pricing icon"
        },
        {
          name: "api.features",
          key: "3",
          icon: "api icon"
        }
      ],
      buttons: [
        {
          name: "sms",
          key: 1
        },
        {
          name: "pricing",
          key: 2
        },
        {
          name: "api",
          key: 3
        }
      ]
    };
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    return (
      <div style={{ marginLeft: "20%" }}>
        <div className="features__details__grid">
          {!this.state.isHidden &&
            this.state.features.map((object, key) => (
              <div key={key}>{object.name}</div>
            ))}
        </div>
        <div className="buttons">
          {this.state.buttons.map((button, key) => (
            <div key={key}>
              <button onClick={this.toggleHidden}>{button.name}</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
