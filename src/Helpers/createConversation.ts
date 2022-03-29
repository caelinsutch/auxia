import {conversationLineCollection, organizationCollection} from '../Firebase';
import {createPhoneNumber} from '../Twilio';
import {Conversation} from '../Types/Organization';

const createConversation = async (organizationId: string, phoneNumber: string): Promise<Conversation> => {
    const organizationDoc = organizationCollection.doc(organizationId);
    const newPhoneNumber = await createPhoneNumber("", phoneNumber, false);

    const lineUpdate = await conversationLineCollection.doc(newPhoneNumber).set({
        organizationId: organizationId,
        userNumber: phoneNumber
    }); // todo return check for status

    const conversation: Conversation = {
        conversationLine: newPhoneNumber
    }

    await organizationDoc.update({
        [`conversations.${phoneNumber}`]: conversation
    });

    return conversation;
}

export default createConversation;
