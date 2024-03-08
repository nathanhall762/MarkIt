import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCBdqei3UhG1APt-4CiMEBGM46n3IczvZs",
  authDomain: "markit-a6d25.firebaseapp.com",
  projectId: "markit-a6d25",
  storageBucket: "markit-a6d25.appspot.com",
  messagingSenderId: "103527109310",
  appId: "1:103527109310:web:487002e25ba0676f3404ef",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);