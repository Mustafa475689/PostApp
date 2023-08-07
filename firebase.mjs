import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyDtuPLhHB1Z2T1-wcRBJDwarsurmNHRRR4",
    authDomain: "chat-4351a.firebaseapp.com",
    projectId: "chat-4351a",
    storageBucket: "chat-4351a.appspot.com",
    messagingSenderId: "1072893187976",
    appId: "1:1072893187976:web:f5b333808351039461cc3d",
    measurementId: "G-889NX033EV"
  };

  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);