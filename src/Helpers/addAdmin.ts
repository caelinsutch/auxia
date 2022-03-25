import {Organization} from "../Types/Organization";
import {Response} from "../Types/Response";
import {organizationCollection} from "../Firebase";
import {arrayUnion, updateDoc} from "@firebase/firestore";

const addAdmin = async (organization: Organization, adminPhoneNumber: string, adminName: string): Promise<Response> => {
    const organizationDoc = organizationCollection.doc(organization.organizationId);

    const updateRes = await organizationDoc.update({
        [`adminPhoneNumbers.${adminPhoneNumber}`]: adminName
    });

    if (updateRes) {
        return {
            status: 1,
            data: "success"
        }
    } else {
        return {
            status: 0,
            data: updateRes
        }
    }


}

export default addAdmin;
