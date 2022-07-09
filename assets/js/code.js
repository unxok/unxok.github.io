// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPPVQcBjfyMzz-m4aF_UGB27G1k820G9s",
  authDomain: "unxok-test.firebaseapp.com",
  projectId: "unxok-test",
  storageBucket: "unxok-test.appspot.com",
  messagingSenderId: "491874157424",
  appId: "1:491874157424:web:2497db40fe5976eb35c5b5",
  measurementId: "G-D18QN5Y224",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function greeting() {
  let a = document.getElementById("hello");
  let x = a.value;
  let y = document.getElementById("goodbye");
  if (x === "hello") {
    y.innerHTML = "goodbye";
    console.log("success");
  } else {
    y.innerHTML = " error: please say 'hello' ";
    console.log("fail");
  }
}
