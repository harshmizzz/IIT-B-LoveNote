import firebase from "firebase";
import "firebase/storage";
import "firebase/analytics";
import { useDispatch } from "react-redux";
import { login, logout } from "./userSlice";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

firebase.analytics();

const auth = firebase.auth();
const storage = firebase.storage();
const db = firebaseApp.firestore();
export { auth, storage, db };
