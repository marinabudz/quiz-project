import React, { Component } from "react";
import chatbot from "./images/3.eps";
import Answers from "./components/answers";
export default class Chatbot extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>
          <Answers />
        </p>
      </div>
    );
  }
}
