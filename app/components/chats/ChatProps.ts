
import { ChatRoom } from "@/app/interfaces/ChatRoom";
import { Message } from "@/app/interfaces/Message";
import { User } from "@/app/interfaces/User";

export interface ChatProps {
    room: ChatRoom
    prevMessages: Message[],
    friends: User[],
    user: User | null
}
