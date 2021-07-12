import firebase from 'firebase/app';
import 'firebase/auth'; //This brings in the google authenticator
import 'firebase/firestore'; //This brings the database as a storage space;

const config = { //This is to configure the firebase application. 
  apiKey: "AIzaSyCkq5a4C1I0XdiwlT3srtJDerfj0Yiltc8",
  authDomain: "e-commerce-website-56417.firebaseapp.com",
  projectId: "e-commerce-website-56417", 
  storageBucket: "e-commerce-website-56417.appspot.com",
  messagingSenderId: "975791121506",
  appId: "1:975791121506:web:559693d116304f86c95d3b",
  measurementId: "G-JTX0RK25DK"
}

firebase.initializeApp(config); //This is to initialize the firebase application

export const auth = firebase.auth();
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider(); //The google auth utility

provider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = () => auth.signInWithPopup(provider); 
   
// Authenticate with Firebase using the Google provider object. You can prompt your users to sign in with their Google Accounts either by opening a pop-up window or by redirecting to the sign-in page. The redirect method is preferred on mobile devices.
// To sign in with a pop-up window, call signInWithPopup: while to sign-in by redirecting to a sign-in page, we use the signInWithRedirect method and the syntax goes thus: firebase.auth().signInWithRedirect(provider);

export default firebase;