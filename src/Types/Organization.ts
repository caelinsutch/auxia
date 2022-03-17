export type Conversation = {
    // organizationPhoneNumber: string; // ID of the conversation
    conversationLine: string // conversationLine, organizationId
}

export type Organization = {
    organizationId: string, // main line number of the org
    organizationName: string, // name of the organization. e.g. "zeta psi"
    organizationUniversity: string, // school code of university of org. e.g. 001312 for berkeley
    ownerUserId: string; // User ID of owner
    adminPhoneNumbers: string[]; // Phone Numbers of admins
    conversations: Record<string, Conversation>; // Map of incoming phone numbers to conversations
}
