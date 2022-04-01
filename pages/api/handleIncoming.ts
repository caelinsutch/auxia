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

    // console.log("new request");
    const from = req.body.From;
    const body = req.body.Body;
    const to = req.body.To;
    // console.log(from, body, to);
    if (!from || !body || !to) {
        return res.json({name: "error", data: "incomplete request"})
    }
    await handleExternal(to, from, body);
    const data = {res: "yes", from, body, to};
    res.json({name: "response", data})
}
