
import { LOCAL } from "../constants";
import { ChatRoom, ChatType } from "../interfaces/ChatRoom";
import { Message } from "../interfaces/Message";
import { FetchAllChatRoomsResponse, FetchChatMessagesResponse } from "../interfaces/ServerResponse";
import { User } from "../interfaces/User";
export default class MessageController {

    private static setRoomNames = (rooms: ChatRoom[] | undefined, currentUsername: string): ChatRoom[] => {
        if (!rooms) {
            return [];
        }

        return rooms.map((room: ChatRoom) => {
            if (room.type === ChatType.PRIVATE) {
                room.name = room.users.filter((user: User) => user.username !== currentUsername)[0].username;
            }
            return room;
        });
    }

    static async getAllChatRooms(user: User): Promise<ChatRoom[] | undefined> {
        try {
            if (!user) {
                return;
            }

            const res = await fetch(`${LOCAL}/api/fetchAllChatRooms/${user.id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (res.ok) {
                const data: FetchAllChatRoomsResponse = await res.json();

                const chats = this.setRoomNames(data.data, user.username);
                return chats;
            } else {
                console.log(`Error Getting Chat Rooms: ${res.statusText}`)
                return;
            }
        } catch (error) {
            console.log(`Error Getting Chat Rooms: ${error}`)
        }
    }

    static async getChatMessages(userID: number, chatRoomID: number): Promise<Message[] | undefined> {
        try {
            if (!userID || !chatRoomID) {
                return;
            }

            const res = await fetch(`${LOCAL}/api/fetchMessages/${userID}/${chatRoomID}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (res.ok) {
                const data: FetchChatMessagesResponse = await res.json();

                return data.data;
            } else {
                console.log(`Error Getting Messages: ${res.statusText}`)
                return;
            }
            
        } catch (error) {
            console.log(`Error Getting Messages: ${error}`)
        }
    };

    static async updateMessages(chatRoom: ChatRoom, userID: number): Promise<Response | undefined> {
        try {
            if (!chatRoom || !chatRoom.id || !userID) {
                return;
            }

            // invalid user updating the chat room
            if (!chatRoom.users.find((user: User) => Number(user.id) === userID)) {
                return;
            }

            const messages = chatRoom.messages;

            const res = await fetch(`${LOCAL}/api/updateMessages/${chatRoom.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({messages: messages}),
            });

            if (res.ok) {
                return res; 
            }

            console.log(`Error Updating Messages: ${res.statusText}`)
        } catch (error) {
            console.log(`Error Updating Messages: ${error}`)
        }
    }
}

