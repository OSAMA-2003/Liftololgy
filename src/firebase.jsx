// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider, signOut } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrrP5414fhGqT14bj9D2XEQN8uG6Xfj9g",
  authDomain: "liftology-127e6.firebaseapp.com",
  projectId: "liftology-127e6",
  storageBucket: "liftology-127e6.firebasestorage.app",
  messagingSenderId: "371504890086",
  appId: "1:371504890086:web:3f7a62f0739f135563bb27",
  measurementId: "G-CSPHD46YJJ"
};




// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const googleProvider = new GoogleAuthProvider()


export const logout = () => {
  return signOut(auth);
};


