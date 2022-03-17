import {organizationCollection} from '../Firebase';
import {createPhoneNumber} from '../Twilio';
import {Conversation, Organization} from '../Types/Organization';

const getOrganization = async (organizationId: string): Promise<Organization> => {
    const organization = await organizationCollection.doc(organizationId).get()
    const data = await organization.data();
    return data as Organization;
}

export default getOrganization;
