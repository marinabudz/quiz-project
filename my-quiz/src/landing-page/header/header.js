import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "./images/header-logo.jpg";
import headerPicture from "./images/main.pdf";
import Typing from "react-typing-animation";
import "./header.css";

export default class Header extends Component {
  AnimatedTypingComponent = (header, mainText) => (
    <Typing>
      <div className="header-description__text">
        <span className="">
          {header} <br />
          <span className="">{mainText}</span>
        </span>
      </div>
    </Typing>
  );
  render() {
    const headerMessage = "Who are  we? ";
    const mainMessage = `Hello my friend ! \n It is nice to see you here! `;
    const brokeMessage = mainMessage.split("\n").map(i => (
      <span>
        <br></br>
        {i}
      </span>
    ));
    return (
      <React.Fragment>
        <div className="container">
          {/* navbar  */}
          <Navbar bg="none" expand="lg">
            <Navbar.Brand href="#home">
              <img src={logo} className="header__logo" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav "
              className=" justify-content-between"
            >
              <Nav className="float-sm-right text-right header__menu">
                <Nav.Link href="#home">About</Nav.Link>
                <Nav.Link href="#home">What we offer</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
              </Nav>
              <Nav>
                <Button
                  href="#"
                  onClick=""
                  className="header__logIn header__buttonSize"
                >
                  Log In
                </Button>
                <Button
                  href="#"
                  onClick=""
                  className="header__signUp header__buttonSize"
                >
                  Sign Up
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <div className="header-description d-flex flex-row justify-content-around">
          {this.AnimatedTypingComponent(headerMessage, brokeMessage)}
          <div className="header-description__image">
            <img src={headerPicture} alt="study-girl" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
