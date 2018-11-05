import React, { Component } from "react";
import "../../css/style.css";
import { translate } from "react-i18next";

const initialState = {
  firstName: "",
  lastName: "",
  mail: "",
  phoneNumber: "",
  message: "",
  firstNameError: "",
  mailError: "",
  messageError: ""
};
// this.state = {
//   email: this.props.t(firstName.mail)
// };
class Contact extends Component {
  state = initialState;

  change = e => {
    const isCheckbox = e.target.type === "checkbox";
    this.setState({
      [e.target.id]: isCheckbox ? e.target.checked : e.target.value
    });
  };

  validate = () => {
    let firstNameError = "";
    let mailError = "";
    let messageError = "";

    if (!this.state.firstName) {
      firstNameError = this.props.t("contact.mailError");
    }
    if (!this.state.mail.includes("@")) {
      mailError = this.props.t("contact.mailError");
    }

    if (!this.state.message) {
      messageError = this.props.t("contact.messageError");
    }

    if (mailError || firstNameError || messageError) {
      this.setState({ mailError, firstNameError, messageError });
      return false;
    }

    return true;
  };
  handleSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();

    if (isValid) {
      this.setState(initialState);
      // console.log(this.state);
    }
  };

  render() {
    return (
      <section className="contact">
        <form className="form__grid" onSubmit={this.handleSubmit}>
          <div className="contact__fieldset">
            <legend>{this.props.t("contact.legend")}</legend>
            <label>
              <input
                id="firstName"
                placeholder={this.props.t("contact.firstName")}
                value={this.state.firstName}
                onChange={this.change}
                maxLength="20"
                firstNameError={this.props.t("contact.firstName")}
              />
              <div className="contact__error_message">
                {this.state.firstNameError}
              </div>
            </label>

            <label>
              <input
                id="lastName"
                placeholder={this.props.t("contact.lastName")}
                value={this.state.lastName}
                onChange={this.change}
                maxLength="20"
              />
            </label>

            <label>
              <input
                id="mail"
                placeholder="yourmail@gmail.com"
                value={this.state.mail}
                onChange={this.change}
                maxLength="20"
              />
              <div className="contact__error_message">
                {this.state.mailError}
              </div>
            </label>

            <label>
              <input
                id="phoneNumber"
                placeholder={this.props.t("contact.phoneNumber")}
                value={this.state.phoneNumber}
                onChange={this.change}
                maxLength="20"
                inputMode="numeric"
                type="number"
              />
            </label>

            <div className="checkbox">
              <input id="alphanumeric" type="checkbox" onChange={this.change} />
              <label>{this.props.t("contact.alphanumeric")}:</label>
            </div>
            <div className="checkbox">
              <input
                id="international"
                type="checkbox"
                onChange={this.change}
              />
              <label>{this.props.t("contact.international")}:</label>
            </div>

            <label>
              <textarea
                id="message"
                placeholder={this.props.t("contact.message")}
                value={this.state.message}
                onChange={this.change}
                maxLength="500"
              />
              <div className="contact__error_message">
                {this.state.messageError}
              </div>
            </label>

            {/* <button onClick={e => this.onSubmit(e)}>Submit</button> */}
            <button className="button__contact" type="submit">
              {this.props.t("contact.button")}
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default translate("common")(Contact);
