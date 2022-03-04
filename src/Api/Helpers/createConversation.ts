import {organizationCollection} from '../FirebaseAdmin';
import {createPhoneNumber} from '../Twilio';
import {Conversation} from '../../Types/Organization';

const createConversation = async (organizationId: string, phoneNumber: string): Promise<Conversation> => {
  const organizationDoc = organizationCollection.doc(organizationId);
  const newPhoneNumber = await createPhoneNumber(phoneNumber);

  const conversation: Conversation = {
    organizationPhoneNumber: newPhoneNumber,
  }

  await organizationDoc.update({
    [`conversations.${phoneNumber}`]: conversation
  });

  return conversation;
}

export default createConversation;
