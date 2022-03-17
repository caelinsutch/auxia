import twilioClient from './twilioClient';

const createPhoneNumber = async (sender: string) => {
  const data = await twilioClient.incomingPhoneNumbers.create({
    areaCode: "500",
    // smsUrl: "https://rqx5xs6mx9.execute-api.us-east-1.amazonaws.com/dev/incoming",
    friendlyName: "Text line with " + sender
  });

  return data.phoneNumber;
}

export default createPhoneNumber;
