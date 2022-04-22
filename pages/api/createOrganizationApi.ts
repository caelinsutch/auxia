// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import createOrganization from "../../src/Helpers/createOrganization";

type Data = {
    name: string
    data: any
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    console.log("OUTPUT: RECEIVED REQUEST")
    let response = {
        status: 1,
        data: "testing"
    }

    const organizationName = req.body.organizationName;
    const organizationUniversity = req.body.organizationUniversity;
    const ownerPhoneNumber = req.body.ownerPhoneNumber;
    const chosenPhoneNumber = req.body.chosenPhoneNumber || "";
    console.log(organizationName, organizationUniversity, ownerPhoneNumber, chosenPhoneNumber)

    if (!organizationName || !organizationUniversity || !ownerPhoneNumber) {
        return res.json({name: "response", data: {status: 0, data: "error malformed request"}})
    }
    console.log("before createOrganization")
    const newOrganization = await createOrganization(organizationName, organizationUniversity, ownerPhoneNumber, chosenPhoneNumber);
    console.log("after createOrganization", newOrganization)
    if (typeof newOrganization === "object") { // if it has returned the new Organization object
        response.data = "success";
    }

    res.json({name: "response", ...response})
}
