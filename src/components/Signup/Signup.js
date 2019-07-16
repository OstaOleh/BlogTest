import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

import firebaseConfig from "../../firebase";

class Signup extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await firebaseConfig
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
        <div className="ui container">
            <h1>Sign up</h1>
            <form className="ui form" onSubmit={this.handleSignUp}>
                <div className="field">
                    <label>
                        Email
                        <input
                        style={{ width: "100%" }}
                        name="email"
                        type="email"
                        placeholder="Email"
                        />
                    </label>
                </div>
                <div className="field">
                    <label>
                        Password
                        <input
                        style={{ width: "100%" }}
                        name="password"
                        type="password"
                        placeholder="Password"
                        />
                    </label>
                </div>
                <button className="ui button" type="submit">Sign Up</button>
            </form>
            <Link to={'/login'}>Go to Login</Link>
        </div>
    );
  }
}

export default withRouter(Signup);