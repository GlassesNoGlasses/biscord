import { ChatRoom } from "./ChatRoom";
import { Message } from "./Message";
import { User } from "./User";

export interface LoginResponse {
    message?: string;
    data?: User;
    error?: string;
};

export interface FetchChatMessagesResponse {
    message?: string,
    data?: Message[],
    error?: string,
};

export interface FetchAllChatRoomsResponse {
    message?: string,
    data?: ChatRoom[],
    error?: string,
}
