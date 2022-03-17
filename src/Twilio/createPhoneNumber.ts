import twilioClient from './twilioClient';

const createPhoneNumber = async (chosenNumber: string = "", lineWith: string, isOrganization: boolean) => {
    /* todo scheme for getting/creating new SMS URLs?
    *  todo create function to manage creating a new webhook(?) for each organization, or just use one hook?
    *   probably safer to have a unique webhook URL for each organization, wouldn't have to DB lookup for each org
    */

    const orgSmsUrl = "https://rqx5xs6mx9.execute-api.us-east-1.amazonaws.com/dev/incoming"; // todo change
    let opts = {}
    const friendlyName = isOrganization ? `MAIN LINE number for ${ lineWith }` : `TEXT LINE with ${ lineWith }`;

    if (chosenNumber) {
        opts = {
            phoneNumber: chosenNumber,
            // smsUrl: orgSmsUrl,
            friendlyName: friendlyName
        }
    } else {
        // todo if they haven't chosen a number get a new one instead of area code registration
        const num = await twilioClient.availablePhoneNumbers('US').fetch();
        opts = {
            areaCode: "510",
            // smsUrl: orgSmsUrl,
            friendlyName: friendlyName
        }
    }

    const res = await twilioClient.incomingPhoneNumbers.create(opts);
    return res.phoneNumber;
}

export default createPhoneNumber;
