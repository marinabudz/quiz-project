import React, { Component } from "react";
import Api from "../../../../api/api";
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

  correctButtton = () => {
    const { currentQuestion, data } = this.state;
    if (currentQuestion < data.length - 1) {
      return (
        <button
          disabled={this.state.disabled}
          onClick={this.nextQuestionHandler}
        >
          Next
        </button>
      );
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
    if (!data) {
    }
    if (!isEnd) {
      return (
        <div>
          <span>{`Questions ${currentQuestion}  out of ${data.length -
            1} remaining `}</span>
          <div>
            <h3> Slect synonym of the words:</h3>
            <ul>
              {questions.map((question, index) => {
                return <li key={index}> {question}</li>;
              })}
            </ul>
          </div>
          <div>
            {options.map(option => {
              return <p onClick={() => this.checkAnswer(option)}>{option}</p>;
            })}
          </div>
          <div>{data.length}</div>
          <div>{this.correctButtton}</div>
        </div>
      );
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
