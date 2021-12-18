
import firebase from "firebase";

// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_l3Wm2i-uwdN2G7TeGQ93R0okWQEJ17A",
    authDomain: "clone-5a4de.firebaseapp.com",
    projectId: "clone-5a4de",
    storageBucket: "clone-5a4de.appspot.com",
    messagingSenderId: "375344884329",
    appId: "1:375344884329:web:93f1f4f7a162c1b8d910f8",
    measurementId: "G-XE8RV5C3BK"
  };
  const firebaseApp  = firebase.initializeApp(firebaseConfig);
  
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();
// export { db, auth };

// const db = getFirestore(firebaseApp);
// const auth = getAuth();
// const storage =getStorage(firebaseApp);

export { db,auth,storage};
// export default getStorage();