import React, { Component } from "react";
import data from "./data";
import "../chatbot.css";

export default class Answers extends Component {
  state = {
    correctAnswer: false,
    wrongAnswer: false,
    correctPoints: 0,
    wrongPoints: 0
  };
  handleCorrect() {
    this.setState({
      correctAnswer: !this.state.correctAnswer
    });
  }
  handleWrong() {
    this.setState({
      wrongAnswer: !this.state.wrongAnswer
    });
  }
  processData = arr => {
    return arr.map(({ question, answers, correct }) => {
      const answer = answers.map((elem, index) => {
        return index === correct ? (
          <button
            onClick={this.handleCorrect}
            className={this.state.correctAnswer ? "correct-answer" : "regular"}
          >
            {elem}
          </button>
        ) : (
          <button
            onClick={this.handleWrong}
            className={this.state.wrongAnswer ? "wrong-answer" : "regular"}
          >
            {elem}
          </button>
        );
      });
      //   const pointsCorrect =
      //     answer.index === correct
      //       ? this.setState({ correctPoints: this.state.correctPoints + 1 })
      //       : this.setState({ wrongPoints: this.state.wrongPoints + 1 });
      return (
        <div>
          {/* <p> {pointsCorrect}</p> */}
          <p> {question}</p>
          <p> {answer}</p>
        </div>
      );
    });
  };

  render() {
    return <div> {this.processData(data)}</div>;
  }
}
//   constructor(props) {
//     super(props);
//     this.state = {
//       isAnswered: false,
//       classNames: ["", "", "", ""]
//     };

//     this.checkAnswer = this.checkAnswer.bind(this);
//   }

//   checkAnswer(e) {
//     let { isAnswered } = this.props;

//     if (!isAnswered) {
//       let elem = e.currentTarget;
//       let { correct, increaseScore } = this.props;
//       let answer = Number(elem.dataset.id);
//       let updatedClassNames = this.state.classNames;

//       if (answer === correct) {
//         updatedClassNames[answer - 1] = "right";
//         increaseScore();
//       } else {
//         updatedClassNames[answer - 1] = "wrong";
//       }

//       this.setState({
//         classNames: updatedClassNames
//       });

//       this.props.showButton();
//     }
//   }

//   shouldComponentUpdate() {
//     this.setState({
//       classNames: ["", "", "", ""]
//     });
//     return true;
//   }

//   render() {
//     let { answers } = this.props;
//     let { classNames } = this.state;

//     let transition = {
//       transitionName: "example",
//       transitionEnterTimeout: 500,
//       transitionLeaveTimeout: 300
//     };

//     return (
//       <div id="answers">
//         <ul>
//           <li onClick={this.checkAnswer} className={classNames[0]} data-id="1">
//             <span>A</span> <p>{answers[0]}</p>
//           </li>
//           <li onClick={this.checkAnswer} className={classNames[1]} data-id="2">
//             <span>B</span> <p>{answers[1]}</p>
//           </li>
//           <li onClick={this.checkAnswer} className={classNames[2]} data-id="3">
//             <span>C</span> <p>{answers[2]}</p>
//           </li>
//           <li onClick={this.checkAnswer} className={classNames[3]} data-id="4">
//             <span>D</span> <p>{answers[3]}</p>
//           </li>
//         </ul>
//       </div>
//     );
//   }
// }

// export default Answers;
