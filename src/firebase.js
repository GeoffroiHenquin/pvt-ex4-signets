import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyCDd3wn5EyoL0xkVL9aJJwTJTvVlUdIYso",
  authDomain: "gh-pvt-hiver-2021.firebaseapp.com",
  projectId: "gh-pvt-hiver-2021",
  storageBucket: "gh-pvt-hiver-2021.appspot.com",
  messagingSenderId: "949483338277",
  appId: "1:949483338277:web:c1ecd9c9ffb204d446ddcc"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
