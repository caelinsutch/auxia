import {Conversation, Organization} from '../Types/Organization';
import sendMessage from "../Twilio/sendMessage";

const notifyAdmins = async (organization: Organization,
                            conversation: Conversation,
                            contents: string,
                            sender: string = ""): Promise<boolean> => {
    let status = true;
    for (const number in organization.adminPhoneNumbers) {
        if (number !== sender) { // check to make sure to not send a response from an Admin to themselves
            const msg = await sendMessage(conversation.conversationLine, number, contents) // from, to, contents
            if (!msg) {
                status = false;
                break;
            }
        }
    }
    return status;
}

export default notifyAdmins;
