import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCBdqei3UhG1APt-4CiMEBGM46n3IczvZs", // TODO: Move to .env and github secrets
  authDomain: "markit-a6d25.firebaseapp.com", // TODO: Move to .env and github secrets
  projectId: "markit-a6d25", // TODO: Move to .env and github secrets
  storageBucket: "markit-a6d25.appspot.com", // TODO: Move to .env and github secrets
  messagingSenderId: "103527109310", // TODO: Move to .env and github secrets
  appId: "1:103527109310:web:487002e25ba0676f3404ef", // TODO: Move to .env and github secrets
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);