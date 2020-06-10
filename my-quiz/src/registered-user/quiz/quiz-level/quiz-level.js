import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";
import basic from "./images/basic.pdf";
import middle from "./images/intermidiate.pdf";
import advanced from "./images/advanced.pdf";
import "./quiz-level.css";
const Quiz = () => {
  return (
    <div className="quizes">
      <div className="quiz-container text-center pt-5">
        <div className="d-flex flex-column quiz ">
          <img src={basic} alt="basic-level" />
          <p className="quiz__name">Basic Quiz</p>
          <p className="text-center">_________________</p>
          <p className="quiz__description ">
            This quiz is great mastery of essential English words will no doubt
            be very helpful to you in achieving a satisfactory GMAT score or
            improving communication skills
          </p>
          <button className="btn btn-default quiz__button mt-2">
            <Link to={ROUTES.BASIC_QUIZ}>Basic</Link>
          </button>
        </div>
        <div className="d-flex flex-column quiz">
          <img src={middle} alt="basic-level" />
          <p className="quiz__name">Intermidiate Quiz</p>
          <p className="text-center">_________________</p>
          <p className="quiz__description mb-5">
            This quiz is greate for person who has the knowledge or skill of
            someone who is more advanced than a beginner but not yet an expert.
          </p>
          <button className="btn btn-default quiz__button mt-1">
            <Link to={ROUTES.MIDDLE_QUIZ}>Intermidiate</Link>
          </button>
        </div>
        <div className="d-flex flex-column quiz">
          <img src={advanced} alt="basic-level" />
          <p className="quiz__name"> Advanced Quiz</p>
          <p className="text-center">_________________</p>
          <p className="quiz__description mb-5">
            This quiz is intended for people who have a good knowledge of
            English words to communicate and write with absolute confidence
          </p>
          <button className="btn btn-default quiz__button ">
            <Link to={ROUTES.ADVANCED_QUIZ}>Advanced</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Quiz;
