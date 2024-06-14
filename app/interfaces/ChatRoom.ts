import { Message } from "./Message";
import { User } from "./User";

export enum ChatType {
    PRIVATE = 'PRIVATE',
    GROUP = 'GROUP'
}

export interface ChatRoom {
    id: number,
    name: string,
    users: User[],
    messages: Message[],
    type: ChatType,
    roomIcon?: File,
}
