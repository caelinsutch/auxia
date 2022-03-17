import {Organization} from "../Types/Organization";
import {Response} from "../Types/Response";
import {organizationCollection} from "../Firebase";
import {arrayUnion, updateDoc} from "firebase/firestore";

const addAdmin = async (organization: Organization, adminPhoneNumber: string, adminName: string): Promise<Response> => {
    // todo change Admins from an array of numbers to a mapping of numbers to names
    // todo untested
    organization.adminPhoneNumbers[adminPhoneNumber].name = adminName;

    const adminDoc = organizationCollection.doc(organization.organizationId);

    // todo will this work
    // @ts-ignore
    // todo update this query to update the admins with the new map structure
    const res = await updateDoc(adminDoc, { // todo get return value or check for error
        admins: arrayUnion(adminPhoneNumber)
    });

    return {
        status: 1,
        data: "success"
    }
}

export default addAdmin;
