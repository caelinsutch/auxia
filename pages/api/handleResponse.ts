// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import handleResponse from "../../src/Helpers/handleResponse";
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
    const from = JSON.parse(req.body.From);
    const body = JSON.parse(req.body.Body);
    const to = JSON.parse(req.body.To);
    console.log(from, body, to);
    if (!from || !body || !to) {
        return res.json({name: "error", data: "incomplete request"})
    }
    await handleResponse(to, from, body);
    const data = {res: "yes", from, body, to};
    res.json({name: "response", data})
}
