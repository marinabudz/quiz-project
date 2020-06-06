// create an app
import app from "firebase/app";
// implement the authentication API for Firebase class
import "firebase/auth";

// all the keys needed and got em from firebase website
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }
  //   start to create functions for authentification
  //   serve communication channel from the Firebase class to the Firebase API

  //    sign up function
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  // login/sign-in function
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  // sign out function
  doSignOut = () => this.auth.signOut();
  // reset password
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  //   change password
  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}
export default Firebase;
