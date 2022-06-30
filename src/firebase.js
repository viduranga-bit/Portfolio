import firebase from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyBIJN9W6zWPFfpNtGcsMyyU64WmSOHxJGU",
    authDomain: "portfolio-2331e.firebaseapp.com",
    projectId: "portfolio-2331e",
    storageBucket: "portfolio-2331e.appspot.com",
    messagingSenderId: "1000411182372",
    appId: "1:1000411182372:web:30a7eb410aedf7f5606fb1",
    measurementId: "G-ED8VT0E9VN"
  };

  firebase.initializeApp(firebaseConfig);

  
  export default firebase;