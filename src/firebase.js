import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDoaB_PoXmASVxey4sy0-sQLztYKvs28aY",
  authDomain: "clone-6c662.firebaseapp.com",
  projectId: "clone-6c662",
  storageBucket: "clone-6c662.appspot.com",
  messagingSenderId: "578305377986",
  appId: "1:578305377986:web:584bbe4878457b4b0ddd5b",
  measurementId: "G-FJ3TFV0NWB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };