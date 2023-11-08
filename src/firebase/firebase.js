import { initializeApp } from "@firebase/app";
import { getFirestore, collection } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAb2BYEtqUUGtJB2l5juN9xsMHQQ0J8U5c",
  authDomain: "night-trailer.firebaseapp.com",
  projectId: "night-trailer",
  storageBucket: "night-trailer.appspot.com",
  messagingSenderId: "53674490705",
  appId: "1:53674490705:web:f8dab8727a2a6720a9f170"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export default app;