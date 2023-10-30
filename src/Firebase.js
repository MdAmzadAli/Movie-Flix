import { initializeApp } from "firebase/app";
import  {getAuth} from "firebase/auth";
// import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCrKGh6cOwCTo-D7_Z31IouvEv_ikef_D0",
  authDomain: "netflix-clone-c58c0.firebaseapp.com",
  projectId: "netflix-clone-c58c0",
  storageBucket: "netflix-clone-c58c0.appspot.com",
  messagingSenderId: "975909184716",
  appId: "1:975909184716:web:7069f343c835a935a70e69"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export {auth};
// export default auth;