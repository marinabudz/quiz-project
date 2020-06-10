import React, { Component } from "react";
import headerPicture from "./images/main.png";
import Typing from "react-typing-animation";
import "./header.css";

export default class Header extends Component {
  AnimatedTypingComponent = mainText => (
    <Typing>
      <div className="header-description__text">
        <span>{mainText}</span>
      </div>
    </Typing>
  );
  render() {
    const mainMessage = `     ¿Who are we? \n Hello my friend ! \n It is nice to see you here! `;
    const brokeMessage = mainMessage.split("\n").map(i => (
      <span>
        <br></br>
        {i}
      </span>
    ));
    return (
      <div
        className="header-description d-flex flex-lg-row flex-sm-column justify-content-lg-around justify-content-sm-center"
        id="home"
      >
        {this.AnimatedTypingComponent(brokeMessage)}
        <div className="header-description__image">
          <img src={headerPicture} alt="study-girl" />
        </div>
      </div>
    );
  }
}
