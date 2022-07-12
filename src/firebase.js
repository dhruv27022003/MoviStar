// import firebase from "firebase";
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"
import { initializeApp } from "firebase/app";
// import {initializeApp} from 'firebase/app';
// import {getAuth} from 'firebase/auth';
import {initializeFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCGrmchDPg9mwQAb3SBEsDoL-Rrdc6CZFU",
  authDomain: "movistar-ae9de.firebaseapp.com",
  projectId: "movistar-ae9de",
  storageBucket: "movistar-ae9de.appspot.com",
  messagingSenderId: "1098902744417",
  appId: "1:1098902744417:web:064b7f680c3f3b97b56920"
};
const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// const auth = getAuth(app);
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

// const app = initializeApp(firebaseConfig);




