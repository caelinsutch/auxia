import twilioClient from './twilioCLient';

const sendMessage = (from: string, to: string, message: string) =>
  twilioClient.messages.create({
    from,
    to,
    body: message,
  })

export default sendMessage;