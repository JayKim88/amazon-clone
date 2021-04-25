import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDof3yqvoaz9dRNwlYfhHHX56EVyprbWS0",
  authDomain: "challenge-cc017.firebaseapp.com",
  projectId: "challenge-cc017",
  storageBucket: "challenge-cc017.appspot.com",
  messagingSenderId: "852584789925",
  appId: "1:852584789925:web:51c29467aa116ee2599a4c",
  measurementId: "G-K56QBW31E7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };