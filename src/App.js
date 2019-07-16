import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute.js";
import firebase from "./firebase";

import Load from "./components/Loader/Loader";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Post from "./components/Post/Post";

import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  state = { loading: true, authenticated: false, user: null };

  componentWillMount() {
    console.log(firebase)
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }

  render() {
    const { authenticated, loading } = this.state;

    if (loading) {
      return <Load />
    }

    return (
      <Router>
        <div>
          <PrivateRoute
            exact
            path="/"
            component={Home}
            authenticated={authenticated}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/posts/:id" component={Post} />
        </div>
      </Router>
    );
  }
}

export default App;