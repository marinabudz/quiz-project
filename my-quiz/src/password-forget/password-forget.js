import React, { Component } from "react";
import background from "./images/7.jpg";
import { withFirebase } from "../firebase";
import "./password-forget.css";

const PasswordForgetPage = () => (
  <div>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  error: null
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { email, error } = this.state;
    const isInvalid = email === "";

    return (
      <div className="registration d-flex flex-row justify-content-between">
        <img
          src={background}
          alt="background"
          className="registration__picture"
        />
        <div className="registration__items d-flex flex-column">
          <p className="pb-lg-5 pb-sm-3 pt-lg-5 pt-sm-3 mb-0 registration__title">
            Forgot Password Form
          </p>
          <form
            onSubmit={this.onSubmit}
            className="d-flex flex-column registration__form "
          >
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
            <button
              disabled={isInvalid}
              type="submit"
              className="btn btn-default pb-lg-4 pb-sm-1 pt-lg-4 pt-sm-1 registration__button"
            >
              Reset My Password
            </button>
            {error && (
              <p>
                Unfortunately {error.message} error occured but our team is
                already on it
              </p>
            )}
          </form>
        </div>
      </div>
    );
  }
}

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm };
