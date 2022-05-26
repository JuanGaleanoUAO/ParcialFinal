import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBYLUX1BuE61oMFtCZnK3WAgtdwSmi6N3g",
  authDomain: "base-datos-d41c4.firebaseapp.com",
  projectId: "base-datos-d41c4",
  storageBucket: "base-datos-d41c4.appspot.com",
  messagingSenderId: "30473759337",
  appId: "1:30473759337:web:110bfbcd8104d2efbbd0f8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };