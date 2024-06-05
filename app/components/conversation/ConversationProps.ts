import { Message } from "@/app/interfaces/Message";

export interface ConversationProps {
    sessionID: number,
    messages: Message[],
}
