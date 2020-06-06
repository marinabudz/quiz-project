import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "../firebase";
import * as ROUTES from "../constants/routes";

const PasswordChangePage = () => (
  <div>
    <h3> Change Password</h3>
    <PasswordChangeForm />
  </div>
);

const INITIAL_STATE = {
  newPassword: "",
  verifyNewPassword: "",
  error: null
};

class PasswordChangeFormBase extends Component {
  state = { ...INITIAL_STATE };
  onSubmit = e => {
    const { oldPassword } = this.state;
    this.props.firebase
      .doPasswordUpdate(oldPassword)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
    e.preventDefault();
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.tartget.value
    });
  };
  render() {
    const { newPassword, verifyNewPassword } = this.state;
    const isInvalid = newPassword === "" || newPassword !== verifyNewPassword;
    return (
      <div>
        <div className="container">
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="New Password"
              onChange={this.onChange}
              name="newPassword"
              value={newPassword}
            />
            <input
              type="text"
              value={verifyNewPassword}
              placeholder="Verify New Password"
              onChange={this.onChange}
              name="verifyNewPassword"
            />
            <button
              className="btn btn-default"
              type="submit"
              disabled={isInvalid}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
const PasswordChangeLink = () => (
  <div>
    <Link to={ROUTES.PASSWORD_CHANGE}> Change Password</Link>
  </div>
);
export default PasswordChangePage;
const PasswordChangeForm = withFirebase(PasswordChangeFormBase);
export { PasswordChangeLink, PasswordChangeForm };
