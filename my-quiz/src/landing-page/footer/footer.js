import React from "react";
import logo from "./images/footer-logo.jpg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer pt-sm-4 pb-sm-4">
      <div className="container d-flex flex-lg-row flex-sm-column justify-content-lg-between">
        <img className="footer__logo" src={logo} alt="logo" />
        <span className="text-capitalize pt-4 ">Let's make studying fun!</span>
        <div className="footer__social d-flex flex-row pt-md-0 pt-sm-4">
          <a href="">
            <img
              src="https://img.icons8.com/nolan/64/facebook-circled.png"
              alt="facebook"
              className="pr-1"
            />
          </a>
          <a href="">
            <img
              src="https://img.icons8.com/nolan/64/instagram-new.png"
              alt="instagram"
              className="pr-1"
            />
          </a>
          <a href="">
            <img
              src="https://img.icons8.com/nolan/64/google-plus.png"
              alt="gmail"
              className="pr-1"
            />
          </a>
          <a href="">
            <img
              src="https://img.icons8.com/nolan/64/telegram-app.png"
              alt="facebook"
              className="pr-1"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
