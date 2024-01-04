// Import the functions you need from the SDKs 
//import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';





// TODO: Add SDKs for Firebase products 
// https://firebase.google.com/docs/web/setup#available-libraries

// web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyDy3Jnu9c5ZA3nNYLgGUyhz8IsfYPA3ZCM",
  authDomain: "loms-authentication.firebaseapp.com",
  projectId: "loms-authentication",
  storageBucket: "loms-authentication.appspot.com",
  messagingSenderId: "700905346471",
  appId: "1:700905346471:web:1136b417c94cd37ccfd282",
  measurementId: "G-CG4F70JVP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export {auth};