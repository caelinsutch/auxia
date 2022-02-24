import { firestore } from "./admin";
import {Organization} from '../Types/Organization';
import {CollectionReference} from 'firebase-admin/lib/firestore';

const organizationCollection = firestore.collection("organizations") as CollectionReference<Organization>;
const userCollection = firestore.collection("users");

export { userCollection, organizationCollection };
