export type Conversation ={
  organizationPhoneNumber: string; // ID of the conversation
}

export type Organization = {
  ownerUserId: string; // User ID of owner
  adminPhoneNumbers: string[]; // Phone Numbers of admins
  conversations: Record<string, Conversation>; // Map of incoming phone numbers to conversations
}
