import React from "react";
import Navigation from "./navigation/navigation";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./landing-page/landing-page";
import HomePage from "./registered-user/registered-user";
import Login from "./log-in/log-in";
import Register from "./sign-up/sign-up";
import Offer from "./landing-page/what-offer/what-offer";
import Contact from "./landing-page/contact/contact";
import Quiz from "./registered-user/quiz/quiz-level/quiz-level";
import BasicQuiz from "./registered-user/quiz/quiz-level/basic-level/basic-level";
import MiddleQuiz from "./registered-user/quiz/quiz-level/middle-level/middle-level";
import AdvancedQuiz from "./registered-user/quiz/quiz-level/advanced-level/advanced-level";
import withAuthentication from "./session/with-authentication";
import Header from "./landing-page/header/header";
import PasswordForgetPage from "./password-forget/password-forget";
import PasswordChangePage from "./password-update/password-update";
import Account from "./registered-user/account/account";
import * as ROUTES from "./constants/routes";

const App = () => (
  <Router>
    <Navigation />
    <hr style={{ marginTop: 0, marginBottom: 0 }} />
    <Route exact path={ROUTES.LANDING} component={LandingPage} />
    <Route path={ROUTES.SIGN_IN} component={Login} />
    <Route path={ROUTES.SIGN_UP} component={Register} />
    <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
    <Route path={ROUTES.PASSWORD_CHANGE} component={PasswordChangePage} />
    <Route path={ROUTES.HOME} component={HomePage} />
    <Route path={ROUTES.ACCOUNT} component={Account} />
    <Route path={ROUTES.WHAT_OFFER} component={Offer} />
    <Route path={ROUTES.CONTACT} component={Contact} />
    <Route path={ROUTES.QUIZ} component={Quiz} />
    <Route path={ROUTES.BASIC_QUIZ} component={BasicQuiz} />
    <Route path={ROUTES.MIDDLE_QUIZ} component={MiddleQuiz} />
    <Route path={ROUTES.ADVANCED_QUIZ} component={AdvancedQuiz} />
    <Route path={ROUTES.ABOUT_US} component={Header} />

    {/* <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} /> 
          <Route path={ROUTES.} component={} />
          <Route path={ROUTES.} component={} />
             <Route path={ROUTES.ABOUT_US} component={} />*/}
  </Router>
);

export default withAuthentication(App);
