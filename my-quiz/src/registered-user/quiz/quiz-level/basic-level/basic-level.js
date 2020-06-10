import React, { Component } from "react";
import Api from "../../../../api/api";
import * as ROUTES from "../../../../constants/routes";
import { Link } from "react-router-dom";
import win from "../images/win3.png";
import "../styles/quiz-level.css";
import bg from "../images/10.png";
import Footer from "../../../../landing-page/footer/footer";
export default class BasicQuiz extends Component {
  apiData = new Api();
  state = {
    myAnswer: null,
    currentQuestion: 0,
    data: [],
    score: 0,
    disabled: true,
    isEnd: false,
    options: [],
    questions: []
  };
  //load data
  componentDidMount() {
    this.apiData.getBasicWords().then(data =>
      this.setState(() => {
        return {
          data: data,
          questions: data[this.state.currentQuestion].questions,
          options: data[this.state.currentQuestion].options,
          answer: data[this.state.currentQuestion].answer
        };
      })
    );
  }
  //next question update score
  nextQuestion = () => {
    const { myAnswer, answer, score, currentQuestion } = this.state;
    if (myAnswer === answer) {
      this.setState({
        score: score + 1
      });
    }
    this.setState({
      currentQuestion: currentQuestion + 1
    });
  };

  //update data
  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState({
        disabled: true,
        questions: data[this.state.currentQuestion].questions,
        options: data[this.state.currentQuestion].options,
        answer: data[this.state.currentQuestion].answer
      });
    }
  }
  //check answer
  checkAnswer = answer => {
    this.setState({
      myAnswer: answer,
      disabled: false
    });
  };

  finishQuiz = () => {
    const { data, currentQuestion, score } = this.state;
    if (currentQuestion === data.length - 1) {
      this.setState({
        isEnd: true
      });
    }
    if (this.state.userAnswer === this.state.correctAnswer) {
      this.setState({
        score: score + 1
      });
    }
  };

  render() {
    const {
      data,
      options,
      currentQuestion,
      isEnd,
      questions,
      score,
      disabled
    } = this.state;
    if (data.length === 0) {
      return (
        <h3 className="quiz-loading">
          Data is loading
          <div class="loadingio-spinner-spinner-ntt0kww4wf spinner">
            <div class="ldio-uhc8q8oxs89">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div style={{ marginTop: 200 }}>
            <Footer />
          </div>
        </h3>
      );
    } else {
      if (!isEnd) {
        return (
          <div className="each-quiz text-center d-flex flex-column">
            <div className="each-quiz__container">
              <span>{`Questions ${currentQuestion + 1}  out of ${
                data.length
              } questions `}</span>
              <div>
                <h3 className="each-quiz__title">
                  Select synonym of the words:
                </h3>
                <div className="mt-4 mb-4 each-quiz__questions text-capitalize">
                  {questions.map((question, index) => {
                    return <div key={index}> {question} </div>;
                  })}
                </div>
              </div>
              <div>
                {options.map(option => {
                  return (
                    <button
                      className="btn btn-default each-quiz__button text-capitalize"
                      onClick={() => this.checkAnswer(option)}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {currentQuestion < data.length - 1 && (
                <button
                  className="btn btn-default each-quiz__button each-quiz__next-button"
                  disabled={disabled}
                  onClick={this.nextQuestion}
                >
                  Next
                </button>
              )}

              {currentQuestion === data.length - 1 && (
                <button
                  className="btn btn-default each-quiz__button each-quiz__finish-button"
                  onClick={this.finishQuiz}
                >
                  Finish
                </button>
              )}
            </div>
            <img src={bg} alt="background" className="each-quiz__image" />
            <Footer />
          </div>
        );
      } else {
        return (
          <div className="quiz-result text-monospace">
            <h3>Quiz is Over </h3>

            <h4 className="mb-5 mt-3">
              Your Final score is
              <span className="badge badge-warning text-wrap ml-3 mr-3">
                {score}
              </span>
              points
            </h4>
            <img className="result-trophy" src={win} alt="trophy" />
            <h4 className="mt-5 mb-5 ">Never give up and try one more time!</h4>
            <Link to={ROUTES.QUIZ}>
              <button className="btn btn-default quiz-result__button">
                Restart
              </button>
            </Link>
            <Footer />
          </div>
        );
      }
    }
  }
}

// getData(arr) {
//   let questionNumber = 1;
//   return arr.map(({ options, questions, answer }) => {
//     const option = options.map(elem => {
//       return <p> {elem}</p>;
//     });
//     const question = questions.map(elem => {
//       return <p>{elem}</p>;
//     });
//     return (
//       <div className="d-flex flex-row">
//         <div className="pl-5 d-flex flex-column">
//           question{questionNumber++}: {question}
//         </div>
//         <div className="pl-5 d-flex flex-column">choices:{option}</div>
//         <div className="pl-5 d-flex flex-column">answer: {answer}</div>
//         <button className="btn btn-default" onClick={this.nextQuestion}>
//           Next
//         </button>
//         <button className="btn btn-default" onClick={this.showPrevious}>
//           Previous
//         </button>
//       </div>
//     );
//   });
// }
