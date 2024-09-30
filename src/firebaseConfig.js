// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDgy_sdV_4kgMP_7Ly4nB1ZvFuncYFTqDs',
  authDomain: 'appraiserweb-5dae4.firebaseapp.com',
  projectId: 'appraiserweb-5dae4',
  storageBucket: 'appraiserweb-5dae4.appspot.com',
  messagingSenderId: '1065111805273',
  appId: '1:1065111805273:web:f66d4ac43e039ef7824048',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
