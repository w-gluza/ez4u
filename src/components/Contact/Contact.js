import React, { Component } from "react";


const initialState = {
    firstName: '',
    lastName: '',
    mail: '',
    subject: '',
    message: '',
    firstNameError: '',
    mailError: '',
    messageError: '',
}
class Contact extends Component {

    state = initialState;

    change = e => {
        const isCheckbox = e.target.type === 'checkbox';
        this.setState({
            [e.target.id]: isCheckbox
                ? e.target.checked
                : e.target.value
        });
    };

    validate = () => {
        let firstNameError = '';
        let mailError = '';
        let messageError = '';

        if (!this.state.firstName) {
            firstNameError = 'This field is mandatory';
        }
        if (!this.state.mail.includes("@")) {
            mailError = "This field is mandatory";
        }

        if (!this.state.message) {
            messageError = "This field is mandatory";
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
                <div className="contact__container">
                    <form onSubmit={this.handleSubmit}>
                        <fieldset className="contact__fieldset--main">
                            <legend>Get a quote!</legend>
                            <label>
                                <input
                                    id='firstName'
                                    placeholder="First Name"
                                    value={this.state.firstName}
                                    onChange={this.change}
                                />
                                <div className="contact__error_message">{this.state.firstNameError}</div>

                            </label>

                            <label>
                                <input
                                    id='lastName'
                                    placeholder="Last Name"
                                    value={this.state.lastName}
                                    onChange={this.change}
                                />
                            </label>

                            <label>
                                <input
                                    id='mail'
                                    placeholder="yourmail@gmail.com"
                                    value={this.state.mail}
                                    onChange={this.change}
                                />
                                <div className="contact__error_message">{this.state.mailError}</div>
                            </label>
                        </fieldset>

                        <fieldset className="contact__fieldset--details">
                            {/* Work on those checkbox */}
                            <div className="checkbox">

                                <input
                                    id='alfanumeric'
                                    type="checkbox"
                                    onChange={this.change}
                                />
                                <label>Alfanumeric Numbers:</label>

                            </div>
                            <div className="checkbox">

                                <input
                                    id='international'
                                    type="checkbox"
                                    onChange={this.change}
                                />
                                <label>International receivers:</label>
                            </div>
                            <label>
                                <input
                                    id='subject'
                                    placeholder="subject"
                                    value={this.state.subject}
                                    onChange={this.change}
                                />
                            </label>

                            <label>
                                <textarea
                                    id='message'
                                    placeholder="Let us know how we can help!"
                                    value={this.state.message}
                                    onChange={this.change}

                                />
                                <div className="contact__error_message">
                                    {this.state.messageError}
                                </div>
                            </label>

                            {/* <button onClick={e => this.onSubmit(e)}>Submit</button> */}
                            <button type='submit'>Submit</button>
                        </fieldset>
                    </form>
                </div>
            </section>
        );
    }
}

export default Contact;
