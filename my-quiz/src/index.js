import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import FirebaseContext from "./firebase/context";
// import Firebase from "./firebase/firebase";
import Firebase, { FirebaseContext } from "./firebase";
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

//The Firebase Context.provider  provide a Firebase instance
