import React, { Component } from "react";
import Icon from "../../assets/icons/";
import { translate } from "react-i18next";

class FeaturesItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleFeature: "1"
    };
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden(id) {
    this.setState(state => {
      if (state.visibleFeature === id);
      return { visibleFeature: id };
    });
  }

  render() {
    const features = [
      {
        id: "1",
        name: this.props.t("sms.name"),
        feature1: this.props.t("sms.feature1"),
        feature2: this.props.t("sms.feature2"),
        feature3: this.props.t("sms.feature3"),
        feature4: this.props.t("sms.feature4"),
        feature5: this.props.t("sms.feature5")
      },
      {
        id: "2",
        name: this.props.t("pricing.name"),
        feature1: this.props.t("pricing.feature1"),
        feature2: this.props.t("pricing.feature2"),
        feature3: this.props.t("pricing.feature3"),
        feature4: this.props.t("pricing.feature4"),
        feature5: this.props.t("pricing.feature5")
      },
      {
        id: "3",
        name: this.props.t("inbox.name"),
        feature1: this.props.t("inbox.feature1"),
        feature2: this.props.t("inbox.feature2"),
        feature3: this.props.t("inbox.feature3"),
        feature4: this.props.t("inbox.feature4"),
        feature5: this.props.t("inbox.feature5")
      },
      {
        id: "4",
        name: this.props.t("api.name"),
        feature1: this.props.t("api.feature1"),
        feature2: this.props.t("api.feature2"),
        feature3: this.props.t("api.feature3"),
        feature4: this.props.t("api.feature4"),
        feature5: this.props.t("api.feature5")
      },
      {
        id: "5",
        name: this.props.t("ivr.name"),
        feature1: this.props.t("ivr.feature1"),
        feature2: this.props.t("ivr.feature2"),
        feature3: this.props.t("ivr.feature3"),
        feature4: this.props.t("ivr.feature4"),
        feature5: this.props.t("ivr.feature5")
      },
      {
        id: "6",
        name: this.props.t("security.name"),
        feature1: this.props.t("security.feature1"),
        feature2: this.props.t("security.feature2"),
        feature3: this.props.t("security.feature3"),
        feature4: this.props.t("security.feature4"),
        feature5: this.props.t("security.feature5")
      },
      {
        id: "7",
        name: this.props.t("geolocation.name"),
        feature1: this.props.t("geolocation.feature1"),
        feature2: this.props.t("geolocation.feature2"),
        feature3: this.props.t("geolocation.feature3"),
        feature4: this.props.t("geolocation.feature4"),
        feature5: this.props.t("geolocation.feature5")
      },
      {
        id: "8",
        name: this.props.t("whitelabel.name"),
        feature1: this.props.t("whitelabel.feature1"),
        feature2: this.props.t("whitelabel.feature2"),
        feature3: this.props.t("whitelabel.feature3"),
        feature4: this.props.t("whitelabel.feature4"),
        feature5: this.props.t("whitelabel.feature5")
      },
      {
        id: "9",
        name: this.props.t("url.name"),
        feature1: this.props.t("url.feature1"),
        feature2: this.props.t("url.feature2"),
        feature3: this.props.t("url.feature3"),
        feature4: this.props.t("url.feature4"),
        feature5: this.props.t("url.feature5")
      }
    ];
    const buttons = [
      {
        id: "1",
        name: this.props.t("sms.name"),
        iconName: "sms"
      },
      {
        id: "2",
        name: this.props.t("pricing.name"),
        iconName: "pricing"
      },
      {
        id: "3",
        name: this.props.t("inbox.name"),
        iconName: "inbox"
      },
      {
        id: "4",
        name: this.props.t("api.name"),
        iconName: "api"
      },
      {
        id: "5",
        name: this.props.t("ivr.name"),
        iconName: "ivr"
      },
      {
        id: "6",
        name: this.props.t("security.name"),
        iconName: "security"
      },
      {
        id: "7",
        name: this.props.t("geolocation.name"),
        iconName: "geolocation"
      },
      {
        id: "8",
        name: this.props.t("whitelabel.name"),
        iconName: "whitelabel"
      },
      {
        id: "9",
        name: this.props.t("url.name"),
        iconName: "url"
      }
    ];

    const visibleFeature = this.state.visibleFeature;
    return (
      <section className="features__section">
        <div className="features__text__container">
          <div>
            <p className="features__intro__heading">
              Super admin account let's you manage as many vendors as you need
              to!{" "}
            </p>
          </div>
          <div>
            <p className="features__intro__subheading">
              Customize and white label everything to your preferece with global
              settings. Use an iFrame for proof of concept and leverage our API
              to lunch when you are ready.
            </p>
          </div>
        </div>
        <div className="features__details__grid">
          {features.map(
            (feature, index) =>
              visibleFeature === feature.id && (
                <div key={index} className="feature__details__container">
                  <p className="feature__heading" id={features.id}>
                    #{feature.name}
                  </p>
                  <p className="feature__paragraph" id={features.id}>
                    _{feature.feature1}
                  </p>
                  <p className="feature__paragraph" id={features.id}>
                    _{feature.feature2}
                  </p>
                  <p className="feature__paragraph" id={features.id}>
                    _{feature.feature3}
                  </p>
                  <p className="feature__paragraph" id={features.id}>
                    _{feature.feature4}
                  </p>
                  <p className="feature__paragraph" id={features.id}>
                    _{feature.feature5}
                  </p>
                </div>
              )
          )}
          <div className="features__icons__grid">
            {buttons.map(button => (
              <div key={button.id} className="feature__container">
                <span onClick={() => this.toggleHidden(button.id)}>
                  <div className="feature__name">{button.name}</div>
                  <Icon
                    name={button.iconName}
                    className="feature__icon"
                    alt="Geolocation Icon"
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
export default translate("common")(FeaturesItems);
