import {NextApiRequest} from 'next';

export type MessagingWebhookBody = {
  MessageSid: string;
  Body: string;
  From: string;
  To: string;
};
