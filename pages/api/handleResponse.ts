// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import handleResponse from "../../src/Helpers/handleResponse";
const MessagingResponse = require("twilio").twiml.MessagingResponse;
const twiml = new MessagingResponse();
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

    console.log("new response request");
    if (!req.body.From || !req.body.Body || !req.body.To) {
        return res.json({name: "error", data: "incomplete request"})
    }
    const from = req.body.From;
    const body = req.body.Body;
    const to = req.body.To;
    console.log(from, body, to);
    if (!from || !body || !to) {
        console.log("INCOMPLETE REQ")
        return res.json({name: "error", data: "incomplete request"})
    }
    await handleResponse(to, from, body);
    res.writeHead(200, { "Content-Type": "text/xml" });
    console.log("twiml")
    console.log(twiml.toString())
    return res.end(twiml.toString());
}
