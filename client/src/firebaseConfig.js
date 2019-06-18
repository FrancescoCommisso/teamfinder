import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDTDEmAs_WyFnN9DP1O9hOttmofc2ZJ4rU",
  authDomain: "pickupleague-4b5b3.firebaseapp.com",
  databaseURL: "https://pickupleague-4b5b3.firebaseio.com",
  projectId: "pickupleague-4b5b3",
  storageBucket: "pickupleague-4b5b3.appspot.com",
  messagingSenderId: "119307379115",
  appId: "1:119307379115:web:36517c53323e453a"
};
const fb = firebase.initializeApp(config);
fb.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

export const firebaseApp = fb;
