import getOrganization from "./getOrganization";
import sendMessage from "../Twilio/sendMessage";
import conversationLineLookup from "./conversationLineLookup";
import notifyAdmins from "./notifyAdmins";
import {Admin} from "../Types/Admin";

/**
 * Handles Admins replying to a User through a Main Line number
 * @param {string} conversationLine - the conversationLine number receiving a message
 * @param {string} phoneNumber - the phone number who has replied to a User, check for if they are an Admin
 * @param {string} contents - the contents of the Admin's message to forward
 * */
const handleResponse = async (conversationLine: string, phoneNumber: string, contents: string) => {
    let data;
    const response = await conversationLineLookup(conversationLine);
    if (response.status) {
        data = response.data;
    } else {
        // todo throw error here?
        return;
    }
    const organizationId = data.organizationId;
    const userNumber = data.userNumber;

    const organization = await getOrganization(data.organizationId);
    const admin = organization.adminPhoneNumbers[phoneNumber];

    if (admin) { // the number responding is an Admin
        const conversation = organization.conversations[phoneNumber]
        await sendMessage(organization.organizationId, userNumber, contents); // send message from the Admin to the User
        return await notifyAdmins( // notify other Admins that one Admin has already sent a response
            organization,
            conversation,
            `RESPONSE SENT FROM ${ admin.name }:\n${contents}`,
            phoneNumber
        );
    } else { // the number responding is *not* an Admin
        return false;
    }
}

export default handleResponse;
