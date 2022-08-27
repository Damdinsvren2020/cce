import React, { Component } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";

import axios from "axios";

const hist = createBrowserHistory();

const PrivateRoute = ({ isLoggedIn, ...props }) =>
  isLoggedIn ? <Route {...props} /> : <Redirect to="/auth" />;

class App extends Component {
  state = {
    isLoaded: false,
    authenticated: false,
  };
  componentDidMount() {
    console.log("A3", sessionStorage.getItem("token"));
    axios
      .get("http://103.119.92.91:3050/account/authenticated", {
        headers: {
          token: sessionStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.data.authenticated) {
          this.setState({ authenticated: true });
        }
        this.setState({ isLoaded: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let display = <div>Loading ...</div>;
    if (this.state.isLoaded === true) {
      if (this.state.authenticated !== true) {
        display = (
          <Switch>
            <Route path="/auth" component={AuthLayout} />
            <Redirect from="/" to="/auth" />
          </Switch>
        );
      } else
        display = (
          <Switch>
            <Route path="/admin" component={AdminLayout} />
            <Redirect from="/" to="/admin/dashboard/" />
          </Switch>
        );
    }
    return (
      <Router history={hist}>
        {/* <PrivateRoute
            isLoggedIn={this.state.authenticated}
            path="/admin/dashboard"
            component={AdminLayout}
          />
          <Route path="/auth" component={AuthLayout} /> */}
        {display}
        {/* <Route path="/admin" component={AdminLayout} />
          <Route path="/auth" component={AuthLayout} /> */}

        {/* <Redirect from="/" to="/admin/dashboard/" /> */}
      </Router>
    );
  }
}

export default App;
