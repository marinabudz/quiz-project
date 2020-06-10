import React from "react";
import getStarted from "./images/5.png";
import "./get-started.css";
const GetStarted = () => {
  return (
    <div className=" get-started container d-flex flex-column text-center justify-content-center">
      <h2> Let's Make Something Great Together</h2>
      <button className="btn get-started-button">Get Started</button>
      <div className="get-started-image text-center">
        <img src={getStarted} alt="people" />
      </div>
    </div>
  );
};
export default GetStarted;
