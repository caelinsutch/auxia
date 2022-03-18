import * as firebaseAdmin from "firebase-admin";
require("dotenv").config()
// import serviceAccount from "./key.json";

if (!firebaseAdmin?.apps?.length && firebaseAdmin) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
      clientEmail: process.env.CLIENT_EMAIL,
      projectId: process.env.PROJECT_ID,
    }),
    databaseURL: "https://flare-social.firebaseio.com",
  });
}

export default firebaseAdmin;

const firestore = firebaseAdmin.firestore();

export { firestore };
