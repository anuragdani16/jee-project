import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCqBl5h20g5I5sCNqef5gwPBvEytPvcsQk",
  authDomain: "jee-advanced-practice.firebaseapp.com",
  projectId: "jee-advanced-practice",
  storageBucket: "jee-advanced-practice.firebasestorage.app",
  messagingSenderId: "975340848424",
  appId: "1:975340848424:web:841bec053af1251b6fbc1d",
  measurementId: "G-B5RNTJQG9W"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);