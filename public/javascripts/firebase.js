// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoOXPNZdWXI6O_UJYJp9NXYqhBZ5EkyhM",
  authDomain: "fir-2c8cc.firebaseapp.com",
  projectId: "fir-2c8cc",
  storageBucket: "fir-2c8cc.appspot.com",
  messagingSenderId: "161320756553",
  appId: "1:161320756553:web:9d9c99894d4e279a89a698",
  measurementId: "G-HJQXNJ63LZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);