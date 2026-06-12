// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyClVcliLB_iOqbXCilNYSAclIOK5TyBJz0",
  authDomain: "playportal-bf6d4.firebaseapp.com",
  projectId: "playportal-bf6d4",
  storageBucket: "playportal-bf6d4.firebasestorage.app",
  messagingSenderId: "419889829572",
  appId: "1:419889829572:web:f341cf03579997830c5b91"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

console.log("Firebase initialized successfully!");