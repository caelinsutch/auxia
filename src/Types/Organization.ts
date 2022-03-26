import {Admin} from "./Admin";

export type Conversation = {
    // organizationPhoneNumber: string; // ID of the conversation
    conversationLine: string // conversationLine, organizationId
}

export type Organization = {
    organizationId: string, // main line number of the org
    organizationName: string, // name of the organization. e.g. "zeta psi"
    organizationUniversity: string, // school code of university of org. e.g. 001312 for berkeley
    ownerUserId: string; // User ID/phone number of owner
    adminPhoneNumbers: { [key:string]: Admin }; // Phone numbers of Admin mapped to name
    conversations: Record<string, Conversation>; // Map of incoming phone numbers to conversations
    messagePrefix: string // what to send to a User before forwarding an admin's message
}
