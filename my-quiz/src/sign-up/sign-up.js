import React, { Component } from "react";
import "./sign-up.css";
import background from "./images/7.jpg";
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
      <div className="registration d-flex flex-row justify-content-between">
        <img
          src={background}
          alt="background"
          className="registration__picture"
        />
        <div className="registration__items d-flex flex-column">
          <p className="pb-lg-5 pb-sm-3 pt-lg-5 pt-sm-3 mb-0 registration__title">
            Registration Form
          </p>
          <form
            onSubmit={this.onSubmit}
            className="d-flex flex-column registration__form "
          >
            <div className="registration__form-item">
              <i class="fa fa-user mt-2" aria-hidden="true"></i>
              <input
                placeholder=" Full name"
                name="username"
                onChange={this.onChange}
                type="text"
                value={username}
                className="registration__form-input form-control shadow-none"
              />
            </div>
            <div className="registration__form-item">
              <i class="fa fa-envelope  mt-2" aria-hidden="true"></i>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={this.onChange}
                name="email"
                className="registration__form-input form-control shadow-none"
              />
            </div>

            <div className="registration__form-item">
              <i class="fa fa-lock  mt-2" aria-hidden="true"></i>
              <input
                type="password"
                value={password}
                name="password"
                placeholder="Password"
                onChange={this.onChange}
                className="registration__form-input form-control shadow-none"
              />
            </div>
            <div className=" registration__form-item">
              <i class="fa fa-lock  mt-2" aria-hidden="true"></i>
              <input
                className="registration__form-input form-control shadow-none"
                type="password"
                value={passwordVerify}
                placeholder="Confirm password"
                name="passwordVerify"
                onChange={this.onChange}
              />
            </div>
            <button
              className="btn btn-default pb-lg-4 pb-sm-1 pt-lg-4 pt-sm-1 registration__button"
              type="submit"
              disabled={isInvalid}
            >
              Submit
            </button>
            {error && <p>{error.message}</p>}
          </form>
        </div>
      </div>
    );
  }
}

// after successful sign up redirect user to HOME page
// use compose to organize higher-order components
const RegisterForm = compose(withRouter, withFirebase)(RegisterFormBase);

export default Register;
export { RegisterForm };

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
