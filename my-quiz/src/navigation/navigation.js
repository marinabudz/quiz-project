import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import SignOut from "../sign-out/sign-out";
import AuthUserContext from "../session/session";

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NatigationAuth /> : <NatigationNotAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const NatigationAuth = () => {
  return (
    <div className="d-flex flex-row justify-content-around">
      <div>
        <Link to={ROUTES.HOME}>Home</Link>
      </div>
      <div>
        <Link to={ROUTES.ABOUT_US}>About us</Link>
      </div>
      <div>
        <Link to={ROUTES.WHAT_OFFER}>What we offer</Link>
      </div>
      <div>
        <Link to={ROUTES.QUIZ}> Quiz</Link>
      </div>
      <div>
        <Link to={ROUTES.ACCOUNT}>Account</Link>{" "}
      </div>
      <div>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </div>
      <div>
        <Link to={ROUTES.CONTACT}>Contact</Link>
      </div>
      <div>
        <SignOut />
      </div>
    </div>
  );
};

const NatigationNotAuth = () => {
  return (
    <div className="d-flex flex-row justify-content-around">
      <div>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </div>
      <button className="btn btn-default">
        <Link to={ROUTES.SIGN_IN}>Log In</Link>
      </button>
      <button className="btn btn-default">
        <Link to={ROUTES.SIGN_UP}>Register </Link>
      </button>
    </div>
  );
};
export default Navigation;

// const Navigation = () => (
//   <div className="d-flex flex-row justify-content-around">
//     <div>
//       <Link to={ROUTES.LANDING}>Landing</Link>
//     </div>
//     <div>
//       <Link to={ROUTES.HOME}>Home</Link>
//     </div>
//     <div>
//       <Link to={ROUTES.ACCOUNT}>Account</Link>{" "}
//     </div>
//     <div>
//       <Link to={ROUTES.ADMIN}>Admin</Link>
//     </div>
//     <button className="btn btn-default">
//       <Link to={ROUTES.SIGN_IN}>Log` In</Link>
//     </button>
//     <button className="btn btn-default">
//       <Link to={ROUTES.SIGN_UP}>Register </Link>
//     </button>
//     <div>
//       <SignOut />
//     </div>
//   </div>
// );

// const Navigation = ({ authUser }) => (
//   <div>{authUser ? <NatigationAuth /> : <NatigationNotAuth />} </div>
// );
