import React, { Component } from "react";
import "./sign-up.css";
import { Link, withRouter } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { withFirebase } from "../firebase/context";
import { compose } from "recompose";
const Register = () => {
  return (
    <div>
      {/* make the Firebase instance available in the SignUpForm component’s props   */}
      <RegisterForm />
    </div>
  );
};

const INITIAL_STATE = {
  username: "",
  email: "",
  password: "",
  passwordVerify: "",
  error: null
};

class RegisterFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = e => {
    // will pass all the form data to the Firebase authentication API via your authentication interface in the Firebase class:
    const { username, email, password } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        // after successful sign up redirect user to HOME page
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => this.setState({ error }));
    e.preventDefault();
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { username, email, password, passwordVerify, error } = this.state;
    const isInvalid =
      password !== passwordVerify ||
      password === "" ||
      email === "" ||
      username === "";
    return (
      <div className="container ">
        <form onSubmit={this.onSubmit} className="d-flex flex-column col-6">
          <input
            placeholder="Full name"
            name="username"
            onChange={this.onChange}
            type="text"
            value={username}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={this.onChange}
            name="email"
          />
          <input
            type="password"
            value={password}
            name="password"
            placeholder="Password"
            onChange={this.onChange}
          />
          <input
            type="password"
            value={passwordVerify}
            placeholder="Confirm password"
            name="passwordVerify"
            onChange={this.onChange}
          />
          <button
            className="btn btn-default"
            type="submit"
            disabled={isInvalid}
          >
            Sumbit
          </button>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}
const RegisterLink = () => (
  <p className="text-center">
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);
// after successful sign up redirect user to HOME page
// use compose to organize higher-order components
const RegisterForm = compose(withRouter, withFirebase)(RegisterFormBase);

export default Register;
export { RegisterForm, RegisterLink };

//{
/* <div className="auth-page">
<div className="container has-text-centered">
  <div className="column is-4 is-offset-4">
    <h3 className="title has-text-grey">Register</h3>
    <p className="subtitle has-text-grey">
      Please Register to proceed.
    </p>
    <div className="box">
      <figure className="avatar">
        <img src="https://placehold.it/128x128" />
      </figure>
      <form onSubmit={this.onSubmit}>
        <div className="field">
          <div className="control">
            <input
              name="email"
              className="input is-large"
              type="email"
              placeholder="Your Email"
              autofocus=""
              autocomplete="email"
            />
            <div className="form-error">
              <span className="help is-danger">Email is required</span>
              <span className="help is-danger">
                Email address is not valid
              </span>
            </div>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              name="fullName"
              className="input is-large"
              type="text"
              placeholder="Full Name"
              autofocus=""
            />
            <div className="form-error">
              <span className="help is-danger">Name is required</span>
              <span className="help is-danger">Name is not valid</span>
            </div>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              name="avatar"
              className="input is-large"
              type="text"
              placeholder="Avatar"
              autofocus=""
            />
            <div className="form-error">
              <span className="help is-danger">Avatar is required</span>
              <span className="help is-danger">
                Avatart is not valid
              </span>
            </div>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              name="password"
              className="input is-large"
              type="password"
              placeholder="Your Password"
              autocomplete="current-password"
            />
            <div className="form-error">
              <span className="help is-danger">
                Password is required
              </span>
            </div>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              name="passwordConfirmation"
              className="input is-large"
              type="password"
              placeholder="Repeat Password"
              autocomplete="current-password"
            />
            <div className="form-error">
              <span className="help is-danger">
                Password Confirmation is required
              </span>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="button is-block is-info is-large is-fullwidth"
        >
          Register
        </button>
      </form>
    </div>
    <p className="has-text-grey">
      <a>Sign In With Google</a>&nbsp;
      <a href="/">Sign Up</a> &nbsp;·&nbsp;
      <a href="../">Need Help?</a>
    </p>
  </div>
</div>
</div> */
//}
