// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "resume-builder-1742c.firebaseapp.com",
    projectId: "resume-builder-1742c",
    storageBucket: "resume-builder-1742c.appspot.com",
    messagingSenderId: "823093464463",
    appId: "1:823093464463:web:8dbbf218cddc5cd4998ffa",
    // measurementId: "G-FMVD6HHJMR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);