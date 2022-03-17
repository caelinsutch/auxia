import {conversationLineCollection} from '../Firebase';
import {Conversation} from '../Types/Organization';
import {Response} from "../Types/Response";

/**
 * Look up a User's number and the organizationId from the conversationLine number
 * @param {string} conversationLine - the conversationLine number
 * */
const conversationLineLookup = async (conversationLine: string): Promise<Response> => {
    const userNumber = await conversationLineCollection.doc(conversationLine).get();
    const data = userNumber.data();
    if (data !== undefined) {
        return {
            status: 1,
            data: data
        };
    } else {
        return {
            status: 0,
            data: "line not found"
        }
    }
}

export default conversationLineLookup;
