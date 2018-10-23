import React, { Component } from "react";
import "../../css/style.css";
import FeaturesItem from "./FeaturesItem";
import Icon from "../../assets/icons/";

import Toggle from "../Toggle/ToggleRPC";

import { translate } from "react-i18next";

class FeaturesItems extends Component {
  render() {
    return (
      <section className="features__section">
        <section className="features__section__grid">
          <div className="features__text__container">
            <div>
              {" "}
              <p className="features__heading">
                Super admin account let's you manage as many vendors as you need
                to!{" "}
              </p>
            </div>
            <div>
              {" "}
              <p className="features__subheading">
                Customize and white label everything to your preferece with
                global settings. Use an iFrame for proof of concept and leverage
                our API to lunch when you are ready.
              </p>
            </div>
          </div>
          <div className="features__details__grid">
            <Toggle>
              {({ on, toggle }) => (
                <div>
                  {on && (
                    <div className="features__details">
                      <p className="features__details__heading">
                        {" "}
                        <span className="featuresSpan">#</span>{" "}
                        {this.props.t("sms.name")}
                      </p>
                      <p className="features__details__paragraph">
                        {" "}
                        <span className="featuresSpan">_</span>{" "}
                        {this.props.t("sms.feature1")}
                      </p>
                      <p className="features__details__paragraph">
                        {" "}
                        <span className="featuresSpan">_</span>{" "}
                        {this.props.t("sms.feature2")}
                      </p>
                      <p className="features__details__paragraph">
                        {" "}
                        <span className="featuresSpan">_</span>{" "}
                        {this.props.t("sms.feature3")}
                      </p>
                      <p className="features__details__paragraph">
                        {" "}
                        <span className="featuresSpan">_</span>{" "}
                        {this.props.t("sms.feature4")}
                      </p>
                      <p className="features__details__paragraph">
                        {" "}
                        <span className="featuresSpan">_</span>{" "}
                        {this.props.t("sms.feature5")}
                      </p>
                    </div>
                  )}
                  <Icon
                    name="sms"
                    className="icon__features"
                    alt="SMS Icon"
                    onClick={toggle}
                  />
                </div>
              )}
            </Toggle>
            <div className="features__icons__grid ">
              <div className="feature__item">
                <div className="feature__name">
                  <FeaturesItem link="/">
                    {this.props.t("sms.name")}
                  </FeaturesItem>
                </div>
                <Icon name="sms" className="icon__features" alt="SMS Icon" />
              </div>

              <div className="feature__item">
                <div className="feature__name">
                  <FeaturesItem link="/">
                    {this.props.t("pricing.name")}
                  </FeaturesItem>
                </div>
                <Icon
                  name="pricing"
                  className="icon__features"
                  alt="Geolocation Icon"
                />
              </div>
              <div className="feature__item">
                <div className="feature__name">
                  <FeaturesItem link="/">
                    {this.props.t("inbox.name")}
                  </FeaturesItem>
                </div>
                <Icon
                  name="inbox"
                  className="icon__features"
                  alt="Geolocation Icon"
                />
              </div>
              <div className="feature__item">
                <div className="feature__name">
                  <FeaturesItem link="/">
                    {this.props.t("api.name")}
                  </FeaturesItem>
                </div>
                <Icon
                  name="api"
                  className="icon__features"
                  alt="Geolocation Icon"
                />
              </div>

              <div className="feature__item">
                <div className="feature__name">
                  <FeaturesItem link="/">
                    {this.props.t("ivr.name")}
                  </FeaturesItem>
                </div>
                <Icon name="ivr" className="icon__features" alt="IVR Icon" />
              </div>

              <div className="feature__item">
                <div className="feature__name">
                  <FeaturesItem link="/">
                    {this.props.t("security.name")}
                  </FeaturesItem>
                </div>
                <Icon
                  name="security"
                  className="icon__features"
                  alt="Geolocation Icon"
                />
              </div>
              <div className="feature__item">
                <div className="feature__name">
                  <FeaturesItem link="/">
                    {this.props.t("geolocation.name")}
                  </FeaturesItem>
                </div>
                <Icon
                  name="geolocation"
                  className="icon__features"
                  alt="Geolocation Icon"
                />
              </div>

              <div className="feature__item">
                <div className="feature__name">
                  <FeaturesItem link="/">
                    {this.props.t("white.name")}
                  </FeaturesItem>
                </div>
                <Icon
                  name="whitelabel"
                  className="icon__features"
                  alt="Geolocation Icon"
                />
              </div>

              <div className="feature__item">
                <div className="feature__name">
                  <FeaturesItem link="/">
                    {this.props.t("url.name")}
                  </FeaturesItem>
                </div>
                <Icon
                  name="url"
                  className="icon__features"
                  alt="Geolocation Icon"
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default translate("common")(FeaturesItems);
