import { Message } from "./Message";
import { User } from "./User";

export interface ChatRoom {
    ID: number,
    users: User[],
    messages: Message[]
}
