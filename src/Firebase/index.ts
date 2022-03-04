import {FirebaseApp, getApps, initializeApp} from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import {Firestore, getFirestore} from '@firebase/firestore';
import {Auth, getAuth} from '@firebase/auth';

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let firebaseApp: FirebaseApp;
let db: Firestore;
let auth: Auth;

if (getApps().length > 0) {
  firebaseApp = initializeApp(clientCredentials);
   db = getFirestore(firebaseApp);
  auth = getAuth(firebaseApp);
}

export { db, auth, firebaseApp }
