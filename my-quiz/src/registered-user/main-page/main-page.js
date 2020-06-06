import React from "react";
import "./main-page.css";
import background from "./images/7.jpg";

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="main-page-container d-flex flex-row justify-content-between">
        <img src={background} alt="background" className="main-page__picture" />
        <div className="main-page-text">
          <p className="main-page-text__title"> Welcome dear friend!</p>
          <p> Let's explore and improve English skills together </p>
          <button className="btn btn-default main-page-text__button">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
