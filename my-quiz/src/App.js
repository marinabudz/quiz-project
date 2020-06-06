import React, { Component } from "react";

import Navigation from "./navigation/navigation";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./landing-page/landing-page";
import HomePage from "./registered-user/registered-user";
import Login from "./log-in/log-in";
import Register from "./sign-up/sign-up";
import Offer from "./landing-page/what-offer/what-offer";
import Contact from "./landing-page/contact/contact";
import Quiz from "./registered-user/quiz/quiz-level/quiz-level";
import { withFirebase } from "./firebase/";
import BasicQuiz from "./registered-user/quiz/quiz-level/basic-level/basic-level";
import MiddleQuiz from "./registered-user/quiz/quiz-level/middle-level/middle-level";
import AdvancedQuiz from "./registered-user/quiz/quiz-level/advanced-level/advanced-level";

import * as ROUTES from "./constants/routes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }
  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <Navigation authUser={this.state.authUser} />
          <hr />
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_IN} component={Login} />
          <Route path={ROUTES.SIGN_UP} component={Register} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.WHAT_OFFER} component={Offer} />
          <Route path={ROUTES.CONTACT} component={Contact} />
          <Route path={ROUTES.QUIZ} component={Quiz} />
          <Route path={ROUTES.BASIC_QUIZ} component={BasicQuiz} />
          <Route path={ROUTES.MIDDLE_QUIZ} component={MiddleQuiz} />
          <Route path={ROUTES.ADVANCED_QUIZ} component={AdvancedQuiz} />

          {/* <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} /> 
          <Route path={ROUTES.} component={} />
          <Route path={ROUTES.} component={} />
             <Route path={ROUTES.ABOUT_US} component={} />*/}
        </Router>
      </React.Fragment>
    );
  }
}
export default withFirebase(App);
