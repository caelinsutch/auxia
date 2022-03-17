import { firestore } from "./admin";
import {Conversation, Organization} from '../Types/Organization';
import {CollectionReference} from 'firebase-admin/lib/firestore';

const organizationCollection = firestore.collection("organizations") as CollectionReference<Organization>;
const conversationLineCollection = firestore.collection("conversationLines");
const userCollection = firestore.collection("users");

export { userCollection, organizationCollection, conversationLineCollection };
