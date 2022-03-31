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
    console.log("CALLING HANDLE RESPONSE")
    let data;
    console.log(conversationLine);
    const response = await conversationLineLookup(conversationLine);
    console.log(response);
    if (response.status) {
        data = response.data;
    } else {
        // todo throw error here?
        console.log("CONVERSATION LINE NOT FOUND")
        return;
    }
    const organizationId = data.organizationId;
    console.log(organizationId)
    const userNumber = data.userNumber;
    console.log("GOT CL:", data.userNumber);
    console.log("GOT orgID:", organizationId);
    const organization = await getOrganization(organizationId);
    const admin = organization.adminPhoneNumbers[phoneNumber];
    console.log(admin)
    if (admin) { // the number responding is an Admin
        const conversation = organization.conversations[phoneNumber]
        const msg = await sendMessage(organization.organizationId, userNumber, `${organization.messagePrefix} ${contents}`); // send message from the Admin to the User
        // notify other Admins that one Admin has already sent a response
        const notif = await notifyAdmins(
            organization,
            conversation.conversationLine,
            `ADMIN RESPONSE SENT FROM ${ admin.name }:\n${contents}`,
            phoneNumber
        );
        return notif && msg;
    } else { // the number responding is *not* an Admin
        return false;
    }
}

export default handleResponse;
