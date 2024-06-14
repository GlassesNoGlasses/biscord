
import { ChatRoom } from "@/app/interfaces/ChatRoom";
import { User } from "@/app/interfaces/User";

export interface ChatProps {
    rooms: ChatRoom[],
    onRoomSelect: (room: ChatRoom) => void
}
