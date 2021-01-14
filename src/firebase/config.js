import firebase from "firebase/app";
import "firebase/storage"
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSFHaJ58LPh2PdwbjRL_DsSeYg53M_JTY",
  authDomain: "reacstorage.firebaseapp.com",
  projectId: "reacstorage",
  storageBucket: "reacstorage.appspot.com",
  messagingSenderId: "799029323260",
  appId: "1:799029323260:web:51c8f3d87ed3fe99ebfe79",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp}