import React, { Component } from "react";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleFeature: "0",
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
          key: "1"
        },
        {
          name: "pricing",
          key: "2"
        },
        {
          name: "api",
          key: "3"
        }
      ]
    };
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden(key) {
    this.setState(state => {
      if (state.visibleFeature === key) return { visibleFeature: 0 };

      return { visibleFeature: key };
    });
  }

  render() {
    const feature = this.state.visibleFeature;
    return (
      <div style={{ marginLeft: "20%" }}>
        <div className="features__details__grid">
          {this.state.features.map(
            object =>
              feature === object.key && (
                <div key={object.key}>{object.name}</div>
              )
          )}
        </div>
        <div className="buttons">
          {this.state.buttons.map(button => (
            <div key={button.key}>
              <button onClick={() => this.toggleHidden(button.key)}>
                {button.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
