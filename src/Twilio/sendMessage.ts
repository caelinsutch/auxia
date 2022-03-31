import twilioClient from './twilioClient';

const sendMessage = async (from: string, to: string, message: string): Promise<any> => {
    console.log("SENDING MESSAGE", from, to, message)
    return await twilioClient.messages.create({
        from,
        to,
        body: message,
    });
}

export default sendMessage;
