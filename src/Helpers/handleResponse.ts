import getOrganization from "./getOrganization";
import sendMessage from "../Twilio/sendMessage";
import conversationLineLookup from "./conversationLineLookup";

/**
 * Handles Admins replying to a User through a Main Line number
 * @param {string} conversationLine - the conversationLine number receiving a message
 * @param {string} phoneNumber - the incoming phone number of a User
 * @param {string} contents - the contents of the User's message to forward
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
    const admins = organization.adminPhoneNumbers;
    if (admins.indexOf(phoneNumber) !== -1) { // the number responding is an Admin
        const conversation = organization.conversations[phoneNumber]
        return await sendMessage(organization.organizationId, userNumber, contents); // from, to, contents
    } else { // the number responding is *not* an Admin
        return false;
    }
}

export default handleResponse;
