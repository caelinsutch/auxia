var admin = require("firebase-admin");
import * as firebaseAdmin from "firebase-admin";

require("dotenv").config()
// import serviceAccount from "./key.json";

if (!firebaseAdmin?.apps?.length && firebaseAdmin) {
    admin.initializeApp({ // todo move to .env
        credential: admin.credential.cert(process.env.FIREBASE_AUTH)
    });
}


export default admin;

const firestore = firebaseAdmin.firestore();

export {firestore};
