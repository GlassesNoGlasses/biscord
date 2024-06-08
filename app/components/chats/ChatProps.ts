
import { Message } from "@/app/interfaces/Message";
import { User } from "@/app/interfaces/User";

export interface ChatProps {
    sessionID: number,
    prevMessages: Message[],
    friends: User[],
    user: User | null
}
