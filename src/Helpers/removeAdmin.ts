import {Organization} from "../Types/Organization";
import {Response} from "../Types/Response";
import {organizationCollection} from "../Firebase";
import {arrayRemove, updateDoc} from "firebase/firestore";

const removeAdmin = async (organization: Organization, adminPhoneNumber: string, adminName: string): Promise<Response> => {
    // todo change Admins from an array of numbers to a mapping of numbers to names
    // todo untested
    organization.adminPhoneNumbers[adminPhoneNumber].name = adminName;

    const adminDoc = organizationCollection.doc(organization.organizationId);

    // todo will this work
    // @ts-ignore
    // todo update this query to update the admins with the new map structure
    const res = await updateDoc(adminDoc, { // todo get return value or check for error
        admins: arrayRemove(adminPhoneNumber)
    });

    return {
        status: 1,
        data: "success"
    }
}

export default removeAdmin;
