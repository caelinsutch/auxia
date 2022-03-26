// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import handleExternal from "../../src/Helpers/handleExternal";
// import createConversation from "../../src/Helpers/createConversation";
// import handleExternal from "../../src/Helpers/handleExternal";
// import conversationLineLookup from "../../src/Helpers/conversationLineLookup";
// import handleResponse from "../../src/Helpers/handleResponse";
// import sendMessage from "../../src/Twilio/sendMessage";
type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
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
    *   ownerPhoneNumber: 516/me
    *   newAdmin: ?
    *   testingNumber: (305) 209-8033
    *
    *
    * */
    console.log("new request");
    const from = req.body.From;
    const body = req.body.Body;
    const to = req.body.To;
    console.log(from, body, to);
    if (!from || !body || !to) {
        return res.json({name: "error", data: "incomplete request"})
    }
    await handleExternal(to, from, body);
    const data = {res: "yes", from, body, to};
    res.json({name: "response", data})
}
