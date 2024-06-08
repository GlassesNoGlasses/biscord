import { Message } from "@/app/interfaces/Message";

export interface ChatBoxProps {
    lastMessageID: number,
    sender: string,
    receiver: string,
    callback: (newMessage: Message) => void
}
