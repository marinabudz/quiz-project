import React, { Component } from "react";
import "./log-in.css";
import background from "./images/7.jpg";
import { withFirebase } from "../firebase/index";
import { compose } from "recompose";
import { Link, withRouter } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { PasswordForgetLink } from "../password-forget/password-forget";
import { RegisterLink } from "../sign-up/sign-up";

const Login = () => {
  return (
    <div>
      <LoginForm />
    </div>
  );
};

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};
class LoginFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    const { password, email } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)

      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    e.preventDefault();
  };

  render() {
    const { password, email, error } = this.state;
    const isInvalid = password === "" || email === "";
    return (
      <div className="registration d-flex flex-row justify-content-between">
        <img
          src={background}
          alt="background"
          className="registration__picture"
        />
        <div className="registration__items d-flex flex-column">
          <p className="pb-lg-5 pb-sm-3 pt-lg-5 pt-sm-3 mb-0 registration__title">
            Login Form
          </p>
          <form onSubmit={this.onSubmit} className="d-flex flex-column">
            <div className="registration__form-item">
              <i class="fa fa-user mt-2" aria-hidden="true"></i>
              <input
                type="email"
                placeholder="Email"
                onChange={this.onChange}
                value={email}
                name="email"
                className="registration__form-input form-control shadow-none"
              />
            </div>
            <div className="registration__form-item">
              <i class="fa fa-lock  mt-2" aria-hidden="true"></i>
              <input
                name="password"
                type="password"
                onChange={this.onChange}
                value={password}
                placeholder="Password"
                className="registration__form-input form-control shadow-none"
              />
            </div>

            <button
              type="submit"
              className="btn btn-default pb-lg-4 pb-sm-1 pt-lg-4 pt-sm-1 registration__button"
              disabled={isInvalid}
            >
              Log In
            </button>
            {error && <p>{error.message}</p>}
          </form>
          <Link to={ROUTES.SIGN_UP} className="mt-5 registration-link ">
            Don't have an account?
          </Link>
          <Link to={ROUTES.PASSWORD_FORGET} className="mt-3 registration-link ">
            Forgot Password?
          </Link>
        </div>
      </div>
    );
  }
}

const LoginLink = () => <Link to={ROUTES.SIGN_IN}>Log In</Link>;
const LoginForm = compose(withRouter, withFirebase)(LoginFormBase);
export default Login;
export { LoginForm, LoginLink };
//  <div className="auth-page">
// <div className="container has-text-centered">
//   <div className="column is-4 is-offset-4">
//     <h3 className="title has-text-grey">Login</h3>
//     <p className="subtitle has-text-grey">Please login to proceed.</p>
//     <div className="box">
//       <figure className="avatar">
//         <img src="https://placehold.it/128x128" />
//       </figure>
//       <form>
//         <div className="field">
//           <div className="control">
//             <input
//               className="input is-large"
//               type="email"
//               placeholder="Your Email"
//               autofocus=""
//               autocomplete="email"
//             />
//             <div className="form-error">
//               <span className="help is-danger">Email is required</span>
//               <span className="help is-danger">
//                 Email address is not valid
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="field">
//           <div className="control">
//             <input
//               className="input is-large"
//               type="password"
//               placeholder="Your Password"
//               autocomplete="current-password"
//             />
//             <div className="form-error">
//               <span className="help is-danger">Password is required</span>
//             </div>
//           </div>
//         </div>
//         <button
//           type="button"
//           className="button is-block is-info is-large is-fullwidth"
//         >
//           Sign In
//         </button>
//       </form>
//     </div>
//     <p className="has-text-grey">
//       <a>Sign In With Google</a>&nbsp;
//       <a href="/">Sign Up</a> &nbsp;·&nbsp;
//       <a href="../">Need Help?</a>
//     </p>
//   </div>
// </div>
// </div>
// );
// }
