import getOrganization from "./getOrganization";
import createConversation from "../Helpers/createConversation";
import notifyAdmins from "./notifyAdmins";
import { sendMessage } from "../Twilio";

/**
 * Forwards all incoming messages from a User to an Organization's Main Line to the Organization's Admins
 * @param {string} organizationId - the messaged number, which is the ID of the Organization
 * @param {string} phoneNumber - the incoming phone number of a User
 * @param {string} contents - the contents of the User's message to forward
* */
const handleExternal = async (organizationId: string, phoneNumber: string, contents: string) => {
    // todo add return status
    const organization = await getOrganization(organizationId);
    console.log(organization)
    let conversation = organization.conversations[phoneNumber];
    console.log(conversation)
    if (!conversation) { // the conversation does not exist
        console.log("convo not found")
        conversation = await createConversation(organizationId, phoneNumber);
        await sendMessage(organizationId, phoneNumber, "Your message has been received! An admin will reply shortly.")
        console.log(conversation)
    }
    await notifyAdmins(organization, conversation.conversationLine, contents);
}

export default handleExternal;
