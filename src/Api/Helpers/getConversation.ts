import {Conversation} from '../../Types/Organization';
import {organizationCollection} from '../FirebaseAdmin';

const getConversation = async (organizationId: string, phoneNumber: string): Promise<Conversation> => {
    const organizationRef = await organizationCollection.doc(organizationId).get();
    const organization = organizationRef.data();
    if (!organization) throw new Error('Organization not found!')
    return organization.conversations[phoneNumber];
};

export default getConversation;
