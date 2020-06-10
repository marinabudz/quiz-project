export default class Api {
  _mainUrl = "https://twinword-word-association-quiz.p.rapidapi.com/type1/";
  async getReponse(url) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "twinword-word-association-quiz.p.rapidapi.com",
        "x-rapidapi-key": "7452b4f0d9msh104f81511034f82p1e7f9ajsn5f64dbb7ec68"
      }
    });
    if (!response.ok) {
      throw new Error(
        `Could not fetch URL ${response.url} received ${response.status}`
      );
    }
    return response.json();
  }
  async getBasicWords() {
    const response = await this.getReponse(
      "https://twinword-word-association-quiz.p.rapidapi.com/type1/?area=toefl&level=3"
    );
    return response.quizlist.map(this._questionTemplate);
  }
  async getMiddleWords() {
    const response = await this.getReponse(
      "https://twinword-word-association-quiz.p.rapidapi.com/type1/?area=toefl&level=6"
    );
    return response.quizlist.map(this._questionTemplate);
  }
  async getAdvancedWords() {
    const response = await this.getReponse(
      "https://twinword-word-association-quiz.p.rapidapi.com/type1/?area=toefl&level=9"
    );
    return response.quizlist.map(this._questionTemplate);
  }

  _questionTemplate = quiz => {
    return {
      questions: quiz.quiz,
      options: quiz.option,
      answer: quiz.correct
    };
  };
}

//   async getMiddleWords() {
//     const response = await this.getReponse("?area=toefl&level=6");
//     return response;
//   }
//   async getAdvancedWords() {
//     const response = await this.getReponse("?area=toefl&level=9");
//     return response;
//   }
//   async getRandomWords() {
//     const randomNumber = Math.floor(Math.random() * 10);
//     const response = await this.getReponse(`?area=toefl&level=${randomNumber}`);
//     return response;
//   }

//_mainUrl =
//     "https://twinword-word-association-quiz.p.rapidapi.com/type1/?area=toefl&level=3";
//   async getReponse(url) {
//     const response = await fetch(`${this._mainUrl}${url}`, {
//       method: "GET",
//       headers: {
//         "x-rapidapi-host": "twinword-word-association-quiz.p.rapidapi.com",
//         "x-rapidapi-key": "7452b4f0d9msh104f81511034f82p1e7f9ajsn5f64dbb7ec68"
//       }
//     });
