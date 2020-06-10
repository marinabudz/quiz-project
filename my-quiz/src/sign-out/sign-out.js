import React from "react";
import { withFirebase } from "../firebase/context";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";
import "./sign-out.css";

const SignOut = ({ firebase }) => (
  <button
    type="button"
    onClick={firebase.doSignOut}
    className="btn btn-default button mt-sm-4"
  >
    <Link to={ROUTES.LANDING}>Sign Out</Link>
  </button>
);

export default withFirebase(SignOut);
