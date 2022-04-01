// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import addAdmin from "../../src/Helpers/addAdmin";
import getOrganization from "../../src/Helpers/getOrganization";

type Data = {
    name: string
    data: any
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    let response = {
        status: 1,
        data: "testing"
    }

    const organizationId = req.body.organizationId;
    const adminPhoneNumber = req.body.adminPhoneNumber;
    const adminName = req.body.adminName;

    // console.log(organizationId, adminPhoneNumber, adminName)

    if (!organizationId || !adminPhoneNumber || !adminName) {
        return res.json({name: "response", data: {status: 0, data: "error malformed request"}})
    }
    const organization = await getOrganization(organizationId);
    const result = await addAdmin(organization, adminPhoneNumber, adminName);
    // todo add errors
    result.data = {status: 1, response: result}

    res.json({name: "response", ...response})
}
