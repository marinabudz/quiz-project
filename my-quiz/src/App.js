import React, { Component } from "react";

import Navigation from "./navigation/navigation";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./landing-page/landing-page";
import HomePage from "./registered-user/registered-user";
import Login from "./log-in/log-in";
import Register from "./sign-up/sign-up";
import * as ROUTES from "./constants/routes";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navigation />
          <hr />
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_IN} component={Login} />
          <Route path={ROUTES.SIGN_UP} component={Register} />
          <Route path={ROUTES.HOME} component={HomePage} />

          {/* <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} /> */}
        </Router>
      </React.Fragment>
    );
  }
}
