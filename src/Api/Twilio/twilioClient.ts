require('dotenv').config()
import { Twilio } from "twilio";
import {accountSid, authToken} from '../../Constants';

const twilioClient = new Twilio(accountSid, authToken);

export default twilioClient;
