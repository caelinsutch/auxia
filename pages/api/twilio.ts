import {NextApiHandler} from 'next';
import MessagingResponse from 'twilio/lib/twiml/MessagingResponse';
import {MessagingWebhookBody} from '../../src/Types';

const twilioWebhook: NextApiHandler = (req, res) => {
  if (req.method !== 'POST') {
    res.status(400).send({ message: 'Only POST requests allowed' })
    return
  }
  const body = req.body as MessagingWebhookBody;

  const regExp= /\[([^\]]+)]/;

  if (body.Body.match(regExp)) {

  } else {
    // Incoming Text

  }

  const twiml = new MessagingResponse();

}
