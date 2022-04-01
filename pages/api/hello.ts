// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
// import createConversation from "../../src/Helpers/createConversation";
import createOrganization from "../../src/Helpers/createOrganization";
import addAdmin from "../../src/Helpers/addAdmin";
import getOrganization from "../../src/Helpers/getOrganization";
import removeAdmin from "../../src/Helpers/removeAdmin";
import createConversation from "../../src/Helpers/createConversation";
import handleExternal from "../../src/Helpers/handleExternal";
import conversationLineLookup from "../../src/Helpers/conversationLineLookup";
// import handleExternal from "../../src/Helpers/handleExternal";
// import conversationLineLookup from "../../src/Helpers/conversationLineLookup";
// import handleResponse from "../../src/Helpers/handleResponse";
// import sendMessage from "../../src/Twilio/sendMessage";
type Data = {
    name: string
}

// todo include images too
// if they send a photo reply we can't see it
// 2-3 weeks to release number

// analytics
// number of users at fraternity
// # of users which
// store times messages were sent
// average response time, per house
//

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    let response = {
        status: 1,
        data: "testing"
    }

    /* testing workflow
     * Create new organization
     * Add admin (me) within that organization
     * Create conversation with new number in that organization
     * Send a message from a user to the organization number
     * Hopefully receive message
     * Remove admin (me)
     * Send another message and hopefully not receive message
     * Add admin back to organization admin map
     *
     * Create another organization
     * Add new admin to org
     * User texts both organization lines independently
     *
     * Add original admin to new org
     * User texts both lines
     *
     */

    /*
    * Number directory
    *   newOrganization: generated
    *   ownerPhoneNumber: 516
    *   newAdmin: ?
    *   testingNumber: (305) 209-8033
    *
    *
    * */
    const OWNER_PHONE_NUMBER = "+15165517371";
    const TESTING_NUMBER = "+13052098033";
    const ORGANIZATION_ID = "+15105748368";

    // const newOrganization = await createOrganization("First", "1", "+15165517371", "");
    // if (typeof newOrganization === "object") { // if it has returned the new Organization object
    //     const addAdminStatus = await addAdmin(newOrganization, OWNER_PHONE_NUMBER, "Ethan Testing");
    // }

    // const organization = await getOrganization("+15105748368");
    // console.log(organization);

    // console.log(process.env.PRIVATE_KEY_ID, process.env.FIREBASE_PRIVATE_KEY, process.env.FIREBASE_CLIENT_EMAIL, process.env.PROJECT_ID)
    //
    // await handleExternal(ORGANIZATION_ID, TESTING_NUMBER, "TESTING");

    const line = await conversationLineLookup("+15108718808");
    // console.log(line)

    res.json({name: "response", ...response})
}
