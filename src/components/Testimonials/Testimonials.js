import React, { Component } from "react";
import "../../css/style.css";

import { translate } from "react-i18next";

class Testimonials extends Component {
  render() {
    return (
      <div>
        <div className="testimonials__text__container">
          <div>
            <p className="subheading">
              {this.props.t("testimonials.testimonial1")}
            </p>
          </div>
          <div>
            <p className="testimonial__author">
              {this.props.t("testimonials.author1")}
            </p>
          </div>

          <div>
            <p className="subheading">
              {this.props.t("testimonials.testimonial2")}
            </p>
          </div>
          <div>
            <p className="testimonial__author">
              {this.props.t("testimonials.author2")}
            </p>
          </div>

          <div>
            <p className="subheading">
              {this.props.t("testimonials.testimonial3")}
            </p>
          </div>
          <div>
            <p className="testimonial__author">
              {this.props.t("testimonials.author3")}
            </p>
          </div>

          <div>
            <p className="subheading">
              {this.props.t("testimonials.testimonial4")}
            </p>
          </div>
          <div>
            <p className="testimonial__author">
              {this.props.t("testimonials.author4")}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default translate("common")(Testimonials);
