import {Conversation, Organization} from '../Types/Organization';
import sendMessage from "../Twilio/sendMessage";

const notifyAdmins = async (organization: Organization,
                            conversation: Conversation,
                            contents: string,
                            sender: string = ""): Promise<boolean> => {
    let status = true;
    console.log("NOTIFYING ADMINS", organization.organizationId, conversation.conversationLine, contents, sender)
    for (const number in organization.adminPhoneNumbers) {
        console.log("checking:", number)
        if (number !== sender) { // check to make sure to not send a response from an Admin to themselves
            console.log("sending msg to:", number)
            const msg = await sendMessage(conversation.conversationLine, number, `Text line message: ${contents}`) // from, to, contents
        } else {
            console.log("sender is themselves", sender, number)
        }
    }
    return status;
}

export default notifyAdmins;
