import React from "react";
import { withFirebase } from "../firebase/context";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";

const SignOut = ({ firebase }) => (
  <button
    type="button"
    onClick={firebase.doSignOut}
    className="btn btn-default"
  >
    <Link to={ROUTES.LANDING}>Sign Out</Link>
  </button>
);

export default withFirebase(SignOut);
