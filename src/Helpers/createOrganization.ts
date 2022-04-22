import {organizationCollection} from '../Firebase';
import {createPhoneNumber} from '../Twilio';
import {Organization} from '../Types/Organization';

const createOrganization = async (organizationName: string, organizationUniversity: string, ownerPhoneNumber: string, chosenPhoneNumber: string): Promise<Organization | boolean> => {
    const newPhoneNumber = await createPhoneNumber("", organizationName, true);
    const newOrganization: Organization = {
        organizationId: newPhoneNumber,
        organizationName: organizationName,
        organizationUniversity: organizationUniversity,
        ownerUserId: ownerPhoneNumber,
        adminPhoneNumbers: {},
        conversations: {},
        messagePrefix: `${ organizationName } Risk Team:\n`
    }

    const organization = await organizationCollection.doc(newPhoneNumber).set(newOrganization);
    if (!!organization) {
        return newOrganization;
    } else {
        return false;
    }
}

export default createOrganization;
