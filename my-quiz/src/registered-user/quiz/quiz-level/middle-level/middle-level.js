import React, { Component } from "react";
import Api from "../../../../api/api";
export default class MiddleQuiz extends Component {
  apiData = new Api();

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.apiData.getBasicWords().then(data => this.setState({ data }));
  }
  getData(arr) {
    return arr.map(({ choices, questions, answer }) => {
      const choice = choices.map(elem => {
        return <p> {elem}</p>;
      });
      const question = questions.map(elem => {
        return <p> {elem}</p>;
      });
      return (
        <div className="d-flex flex-row">
          <div className="pl-5 d-flex flex-column">question: {question}</div>
          <div className="pl-5 d-flex flex-column">choices:{choice}</div>
          <div className="pl-5 d-flex flex-column">answer: {answer}</div>
        </div>
      );
    });
  }
  render() {
    const { data } = this.state;
    if (!data) {
      console.log("data is loading");
    }
    const items = this.getData(data);

    return <div>{items}</div>;
  }
}
