// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeAppCheck, ReCaptchaV3Provider, getToken } from "firebase/app-check";

const firebaseConfig = {
  apiKey: "AIzaSyDy6TD2WC6le1wzGfjPSLBdP6cY1JKrpTI",
  authDomain: "article-react-c8968.firebaseapp.com",
  projectId: "article-react-c8968",
  storageBucket: "article-react-c8968.appspot.com",
  messagingSenderId: "966837875867",
  appId: "1:966837875867:web:d2226b35273c1db16b023e",
  measurementId: "G-9HJT0QSHP6"
};

const app = initializeApp(firebaseConfig);
const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('6LeUQeQmAAAAAA6xS1I_SI9mgdQVkzWcU47cJXEr'),
  
    // Optional argument. If true, the SDK automatically refreshes App Check
    // tokens as needed.
    isTokenAutoRefreshEnabled: true
  });

export { appCheck, getToken }
export const auth = getAuth(app);