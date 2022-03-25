var admin = require("firebase-admin");
import * as firebaseAdmin from "firebase-admin";

require("dotenv").config()
// import serviceAccount from "./key.json";

if (!firebaseAdmin?.apps?.length && firebaseAdmin) {
    admin.initializeApp({ // todo move to .env
        credential: admin.credential.cert({
                "type": "service_account",
                "project_id": "auxia-app",
                "private_key_id": "62dae61651b1b283291bf0e27799789261f36f02",
                "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC4G9P3CPpfpAB/\nWhUqjCptaSlL9QQe9PqJSE3+ymY6xFIRRbRIS9CpMsUUJ9UlqtGjNnXYKPFQDen+\n5Py5lamAVYFZ4tNvBmsKiWkqDWxSZwbRff61KVOMZPfpICDw7NzYdo1tqAw0DU9m\n1UF/eifral/N2Sbl+9H3rmbJwUMaSlUGLfMk3FGQGjnpl3b/0ya6wuCxpfK7dkjC\nHL7cBpo/2XgvXCVrpksBVLHI6bhaL47WZIUyL5syNfvdPNlOEkpnwUhYoO4bWQwp\nQSXAfjI7qh7xCM7WnP7MGZBoEVsFXzhf0LBIB8OwFhNeLWKGbUq6sNwDm6k2bVs4\nRkGRXHDpAgMBAAECggEABlVavNhPuKONKtRf/wc0XHAuLgE/Q4tc5QUaPcYbrzDa\nu+Jgec413uQyuGdIY1PVg15XvnhmGMFpx817ziySWKpYWU2+xUZ8vy+L8RjmHY2S\nw/koHnZN+/nrN1dWGsOjM0Ucx2VtCgtdLGXwq2B56BTQN+Yc+vNnPTSAL7eYxdoy\npnpd6mt9g1gUqG5sHI9Y1jpNDNVjJ4T8xUviWeJ/sBNFJ8fFr8RdmD2hjIVMZ+X1\n0fSpxj9XyufPma5Qn4jlGbmaEOua7wmgxmv22n7ZlWjw7518qCtojxtlOlpLSifz\nVbNcr2dyeJ7fmcuAjv5vv5nu2mlq7M0AaTAXJRYdqQKBgQD9LcgzmMlDmVW/qtaq\neWQj9JFvGvjftc4+w6klIdVOPt9p07KBf2o/WgM1st8lrh5G+aoAAAYLywlpuFPc\n4yh59ngjY4T20oTYOsXb5kKIjSADD9vPengSykKLYvmLdSVHrar6VNddJZ9sLpd1\nsnsT4rRklAIR/OEOafZtVl2HzQKBgQC6KQQ4Y6k7oU9ZiooBf6ATkjph9cgoUsxJ\nGIz2Wqgekzwdy5M3wuVsC8j2wqfZVcjA+TtRQbSZMmsF6PcIIWMgtZBANQTRdLWQ\nwOusIpk4NxTUG/JuZQzvzzOVB99cJRBht+qBzMs9tjK5gVSX5Hfkg+Gd8n4+WLnd\n2GruCww5jQKBgQDTeOsxldv+19QU/YjC6hRoJ/9Wc4wPqFc2e84L0v/NlJyeU5JV\nsmy3r+LgdqEHYzGtDRsfVuW18gjRwoJiDWegv+tHe/fzBpKp3iWocOOAFYj4pcVv\nvxcOct00eh6Aiv/xqDEZWcZt6mAIR76BM+y0BnexTyOPjM8bcAzC9RG4vQKBgDzc\ngAa3fnKCUGDjzC6lPP5pBjFUm3WjbCpRnnREO0aTuEm9booCa+MhDzitdxa01wdP\n9DailpqnQxoRigHceH4PHfP/4W1hDKMgj2wde55HU8XsxRuWad5VDXYhtsJ3U52+\n9SoufBvW30qKn89w4EmTXEW5K9DSTSHcSUk9z2dZAoGAPoqbw0+BmBPZ1ebNSnGq\ne97d7F0gK96iaOLns5LUO99CxfLBJjAvj+aw4blY8JsiKMLayxgcR/BvwhAwgJch\nvPMSPyiXKUZs6O/VatWUUOZtV+S56Dcn6jSaIeyNAYNvLSwl3FyK+m2MzqwXJEyr\n0m4bEKCBGI3eHpUdTPmF9M8=\n-----END PRIVATE KEY-----\n",
                "client_email": "firebase-adminsdk-kz4yu@auxia-app.iam.gserviceaccount.com",
                "client_id": "101802175417463987412",
                "auth_uri": "https://accounts.google.com/o/oauth2/auth",
                "token_uri": "https://oauth2.googleapis.com/token",
                "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
                "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-kz4yu%40auxia-app.iam.gserviceaccount.com"
            }
        )
    });

//   firebaseAdmin.initializeApp({
//     credential: firebaseAdmin.credential.cert({
//       privateKey: process.env.FIREBASE_PRIVATE_KEY,
//       clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//       projectId: process.env.PROJECT_ID,
//     }),
//     databaseURL: "https://flare-social.firebaseio.com",
//   });
}


export default admin;

const firestore = firebaseAdmin.firestore();

export {firestore};
