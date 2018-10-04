import React, { Component } from "react";

class Contact extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    };

    render() {
        return (
            <div>
                <form>
                    <input
                        placeholder="First name"
                        value={this.state.firstName}
                        onChange={e => this.setState({ firstName: e.target.value })}
                    />

                    <input
                        placeholder="Last name"
                        value={this.state.lastName}
                        onChange={e => this.setState({ lastName: e.target.value })}
                    />

                    <input
                        placeholder="email"
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}
                    />

                    <input
                        placeholder="subject"
                        value={this.state.subject}
                        onChange={e => this.setState({ subject: e.target.value })}
                    />
                    <input
                        placeholder="message"
                        value={this.state.message}
                        onChange={e => this.setState({ message: e.target.value })}
                    />
                </form>
            </div>
        );
    }
}

export default Contact;
