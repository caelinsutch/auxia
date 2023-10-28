import twilioClient from './twilioClient';

const createPhoneNumber = async (chosenNumber: string = "", lineWith: string, isOrganization: boolean) => {

    let smsUrl;
    let friendlyName;
    let opts = {}
    const serviceSid = "MGe34bf50b562f44d53faf5381149f7102"

    if (isOrganization) {
        friendlyName = `MAIN LINE number for ${lineWith}`;
        smsUrl = "https://auxia-production.up.railway.app/api/handleIncoming"
    } else {
        friendlyName = `TEXT LINE with ${lineWith}`;
        smsUrl = "https://auxia-production.up.railway.app/api/handleResponse";
    }

    if (chosenNumber) {
        opts = {
            phoneNumber: chosenNumber,
            smsUrl: smsUrl,
            friendlyName: friendlyName,
            smsMethod: "POST"
        }
    } else {
        // todo if they haven't chosen a number get a new one instead of area code registration
        const num = await twilioClient.availablePhoneNumbers('US').fetch();
        opts = {
            areaCode: "510",
            smsUrl: smsUrl,
            friendlyName: friendlyName,
            smsMethod: "POST",
        }
    }

    const res = await twilioClient.incomingPhoneNumbers.create(opts);

    await twilioClient.conversations.services(serviceSid)
        .phoneNumbers
        .create({sid: res.phoneNumber.sid})

    return res.phoneNumber;
}

export default createPhoneNumber;
