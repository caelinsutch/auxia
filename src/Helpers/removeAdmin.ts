import {Organization} from "../Types/Organization";
import {Response} from "../Types/Response";
import {organizationCollection} from "../Firebase";
import {arrayRemove, updateDoc} from "firebase/firestore";

const removeAdmin = async (organization: Organization, adminPhoneNumber: string): Promise<Response> => {
    organization.adminPhoneNumbers.push(adminPhoneNumber);

    const adminDoc = organizationCollection.doc(organization.organizationId);

    // todo will this work
    // @ts-ignore
    const res = await updateDoc(adminDoc, { // todo get return value or check for error
        admins: arrayRemove(adminPhoneNumber)
    });

    return {
        status: 1,
        data: "success"
    }
}

export default removeAdmin;
