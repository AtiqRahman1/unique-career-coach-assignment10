// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUj9mThC7HrIC3p5FzPkhng7IFAC6Ah6o",
    authDomain: "unique-career-coach.firebaseapp.com",
    projectId: "unique-career-coach",
    storageBucket: "unique-career-coach.appspot.com",
    messagingSenderId: "968773121682",
    appId: "1:968773121682:web:20e9031f8b81376767d84b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;