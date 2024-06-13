
import { LOCAL } from "../constants";
import { ChatRoom } from "../interfaces/ChatRoom";
import { Message } from "../interfaces/Message";
import { FetchChatMessagesResponse } from "../interfaces/ServerResponse";
export default class MessageController {

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

    static async updateMessages(chatRoom: ChatRoom): Promise<Response | undefined> {
        try {
            if (!chatRoom || chatRoom.ID || chatRoom.messages) {
                return;
            }

            const res = await fetch(`${LOCAL}/api/updateMessages/${chatRoom.ID}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(chatRoom.messages),
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

