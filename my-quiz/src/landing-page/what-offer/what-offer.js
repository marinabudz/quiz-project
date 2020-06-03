import React from "react";
import offerImage from "./images/6.pdf";
import chatbotImage from "./images/3.eps";
import explanationImage from "./images/4.pdf";
import "./what-offer.css";
const Offer = () => {
  return (
    <React.Fragment>
      {/* first block -> multilevel quiz */}
      <h1 className="text-center mt-5 pt-5"> What do we offer ?</h1>

      <div className="offer-quiz">
        <div className="offer-quiz__picture">
          <img src={offerImage} alt="offerImage" />
        </div>
        <div className="offer-quiz__details">
          <div className="offer-quiz__background-yellow">
            <p className="offer-quiz__details-header">Multilevel Quizes</p>
            <p>There are three levels: Begginner, Intermidiate and Advanced</p>
            <p>
              Each level maintains words starting from simple to complicated
            </p>
          </div>
          <img src="" alt="" />
        </div>
      </div>

      {/* second block -> chatbot */}

      <div className="offer-quiz offer-chatbot">
        <div className="offer-quiz__details">
          <div className="offer-quiz__background-pink">
            <p className="offer-quiz__details-header">User-Friendly Chatbot</p>
            <p>Don't know which level of the quiz to choose ?</p>
            <p>Chatbot will help you to determine your English level</p>
            <button className="btn btn-default offer-quiz__button" onClick="">
              Press Me
            </button>
          </div>
          <img src="" alt="" />
        </div>
        <div className="offer-quiz__picture">
          <img src={chatbotImage} alt="chatbotImage" />
        </div>
      </div>

      {/* third  block -> explanation */}

      <div className="offer-quiz">
        <div className="offer-quiz__picture">
          <img src={explanationImage} alt="chatbotImage" />
        </div>
        <div className="offer-quiz__details">
          <div className="offer-quiz__background-blue">
            <p className="offer-quiz__details-header">
              Detailed Explanation With Examples
            </p>
            <p>Find out accurate meaning of the word</p>
            <p>Find out corect manner to use word in the sentance</p>
          </div>
          <img src="" alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Offer;
