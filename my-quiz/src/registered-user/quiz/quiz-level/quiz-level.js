import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../../constants/routes";
const Quiz = () => {
  return (
    <div className="conatiner">
      <button className="btn btn-default">
        <Link to={ROUTES.BASIC_QUIZ}>Basic</Link>
      </button>
      <button className="btn btn-default">
        <Link to={ROUTES.MIDDLE_QUIZ}>Intermidiate</Link>
      </button>
      <button className="btn btn-default">
        <Link to={ROUTES.ADVANCED_QUIZ}>Advanced</Link>
      </button>
    </div>
  );
};
export default Quiz;
