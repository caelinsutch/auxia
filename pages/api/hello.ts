// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
// import createConversation from "../../src/Helpers/createConversation";
import createOrganization from "../../src/Helpers/createOrganization";
// import handleExternal from "../../src/Helpers/handleExternal";
// import conversationLineLookup from "../../src/Helpers/conversationLineLookup";
// import handleResponse from "../../src/Helpers/handleResponse";
// import sendMessage from "../../src/Twilio/sendMessage";
type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    let response = {
        status: 1,
        data: "testing"
    }
    // const convo = await createConversation("1", "2'");
    // console.log(convo);



    // const org = await createOrganization("testing org", "001312", "+15165517371", "")
    // console.log(org);
    // await handleExternal("+15005550006", "+15165517371", "hello world")


    // const conversationLine = "555"; // conversationLine
    // response = await conversationLineLookup(conversationLine);
    // // @ts-ignore
    // const organizationId = response.data["organizationId"];
    // // @ts-ignore
    // const userNumber = response.data["userNumber"];
    // console.log(organizationId, userNumber);
    // await handleResponse(conversationLine, response.data, "testing")
    res.json({name: "response", ...response})
}
