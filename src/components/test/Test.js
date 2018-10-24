import React, { Component } from "react";
import Icon from "../../assets/icons/";
import { translate } from "react-i18next";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleFeature: "0",
      features: [
        {
          // feature: this.props.t("sms.feature5"),
          feature: "sms.feature5",
          id: "1"
        },
        {
          feature: "pricing features",
          id: "2"
        },
        {
          feature: "api features",
          id: "3"
        }
      ],
      buttons: [
        {
          name: "sms",
          id: "1",
          iconName: "sms"
        },
        {
          name: "pricing",
          id: "2",
          iconName: "ivr"
        },
        {
          name: "api",
          id: "3",
          iconName: "url"
        }
      ]
    };
    this.toggleHidden = this.toggleHidden.bind(this);
  }
  toggleHidden(id) {
    this.setState(state => {
      if (state.visibleFeature === id) return { visibleFeature: 0 };
      return { visibleFeature: id };
    });
  }
  render() {
    const feature = this.state.visibleFeature;
    return (
      <div>
        <div className="features__details__grid">
          {this.state.features.map(
            features =>
              feature === features.id && (
                <div id={features.id}>{features.feature}</div>
              )
          )}
        </div>
        <div className="buttons">
          {this.state.buttons.map(button => (
            <div key={button.id}>
              <span onClick={() => this.toggleHidden(button.id)}>
                {button.name}
                <Icon
                  name={button.iconName}
                  className="icon__features"
                  alt="Geolocation Icon"
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
