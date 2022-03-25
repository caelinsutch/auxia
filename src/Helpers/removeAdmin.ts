import {Organization} from "../Types/Organization";
import {Response} from "../Types/Response";
import {organizationCollection} from "../Firebase";
import {arrayRemove, updateDoc} from "@firebase/firestore";
const FieldValue = require('firebase-admin').firestore.FieldValue;

const removeAdmin = async (organization: Organization, adminPhoneNumber: string, adminName: string): Promise<Response> => {
    const organizationDoc = organizationCollection.doc(organization.organizationId);

    const updateRes = await organizationDoc.update({
        [`adminPhoneNumbers.${adminPhoneNumber}`]: FieldValue.delete()
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

export default removeAdmin;
