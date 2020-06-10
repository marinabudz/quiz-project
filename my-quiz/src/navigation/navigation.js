import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "./images/header-logo.jpg";
import SignOut from "../sign-out/sign-out";
import AuthUserContext from "../session/session";
import "./navigation.css";

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NatigationAuth /> : <NatigationNotAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const NatigationAuth = () => {
  return (
    <Navbar bg="none" expand="lg" className="header" id="header-main">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Link to={ROUTES.HOME}>
        <Navbar.Brand>
          <img src={logo} className="header__logo" alt="logo" />
        </Navbar.Brand>
      </Link>

      <Navbar.Collapse
        id="basic-navbar-nav"
        className=" justify-content-between"
      >
        <Nav className="header__menu text-sm-center">
          <Link to={ROUTES.HOME}>Home</Link>
          <Link to={ROUTES.ABOUT_US}>About us</Link>
          <Link to={ROUTES.WHAT_OFFER}>What we offer</Link>
          <Link to={ROUTES.QUIZ}> Quiz</Link>
          <Link to={ROUTES.CONTACT}>Contact</Link>
          <Link to={ROUTES.ACCOUNT}>Account</Link>
        </Nav>
        <Nav>
          <SignOut />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
const NatigationNotAuth = () => {
  return (
    <React.Fragment>
      {/* navbar  */}
      <Navbar bg="none" expand="lg" className="header" id="header-main">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Link to={ROUTES.LANDING}>
          <Navbar.Brand>
            <img src={logo} className="header__logo" alt="logo" />
          </Navbar.Brand>
        </Link>

        <Navbar.Collapse
          id="basic-navbar-nav"
          className=" justify-content-between"
        >
          <Nav className="header__menu text-sm-center">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#what-we-offer">What we offer</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav className="text-sm-center mt-sm-3 mt-lg-4">
            <Link to={ROUTES.SIGN_IN}>
              <button className="header__logIn header__buttonSize btn btn-default mb-sm-3  mr-lg-5 mr-sm-0">
                Log In
              </button>
            </Link>
            <Link to={ROUTES.SIGN_UP}>
              <button className="header__signUp header__buttonSize btn btn-default ">
                Sign Up
              </button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Nav.Link href="#header-main">
        <button
          className="btn btn-default  mr-5 bg-warning bg-danger header__up "
          href="#header"
        >
          <i class="fa fa-arrow-up"></i>
        </button>
      </Nav.Link>
    </React.Fragment>
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

{
  /* <div className="d-flex flex-row justify-content-around">
      <div>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </div>
      <button className="btn btn-default">
        <Link to={ROUTES.SIGN_IN}>Log In</Link>
      </button>
      <button className="btn btn-default">
        <Link to={ROUTES.SIGN_UP}>Register </Link>
      </button>
    </div> */
}

// <div className="d-flex flex-row justify-content-around">
// <div>
//   <Link to={ROUTES.HOME}>Home</Link>
// </div>
// <div>
//   <Link to={ROUTES.ABOUT_US}>About us</Link>
// </div>
// <div>
//   <Link to={ROUTES.WHAT_OFFER}>What we offer</Link>
// </div>
// <div>
//   <Link to={ROUTES.QUIZ}> Quiz</Link>
// </div>
// <div>
//   <Link to={ROUTES.ACCOUNT}>Account</Link>
// </div>
// <div>
//   <Link to={ROUTES.ADMIN}>Admin</Link>
// </div>
// <div>
//   <Link to={ROUTES.CONTACT}>Contact</Link>
// </div>
// <div>
//   <SignOut />
// </div>
// </div>
