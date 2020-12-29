import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiy-tVT2joJ6M6h6R9v0CCA4o-UJdbusc",
  authDomain: "ohms-2c216.firebaseapp.com",
  projectId: "ohms-2c216",
  storageBucket: "ohms-2c216.appspot.com",
  messagingSenderId: "935063287123",
  appId: "1:935063287123:web:8291ea7a25512e721bdda6",
  measurementId: "G-2PPXEJJE2D"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;