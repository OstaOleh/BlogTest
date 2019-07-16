import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

import firebaseConfig from "../../firebase";

class Login extends Component {
    state= {
        hasError: false,
        errorMsg: ''
    }
    handleSignUp = async e => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        try {
            const user = await firebaseConfig
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
            this.props.history.push("/");
        } catch (error) {
            console.log(error);
            this.setState({
                hasError: true,
                errorMsg: error.message
            })
        }
    };
    removeErrorMsg = () => this.setState({hasError: false});
    
    render() {
        console.log(this.state)
        return (
            <div className="ui container">
                <h1>Log in</h1>
                <form className="ui form" onSubmit={this.handleSignUp}>
                    <div className="field">
                        <label>
                            Email
                            <input
                            style={{ width: "100%" }}
                            name="email"
                            type="email"
                            placeholder="Email"
                            onFocus={this.removeErrorMsg}
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
                            onFocus={this.removeErrorMsg}
                            />
                        </label>
                    </div>
                    <button className="ui button" type="submit">Log in</button>
                        {this.state.hasError ?
                        <div className="ui error message" style={{display: 'block'}}>
                            <div className="content">
                                <p>{this.state.errorMsg}</p>
                            </div>
                        </div> 
                         : '' }
                    
                </form>
                <Link to={'/signup'}>Go to SignUp</Link>
            </div>
        )
    }
}

export default withRouter(Login);