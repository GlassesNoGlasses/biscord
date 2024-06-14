
import { ChatRoom } from "@/app/interfaces/ChatRoom";
import { Message } from "@/app/interfaces/Message";
import { User } from "@/app/interfaces/User";

export interface ActiveChatRoomProps {
    room: ChatRoom,
    user: User | undefined,
    callback: (newMessage: Message) => void,
}
