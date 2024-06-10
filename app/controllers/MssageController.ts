

// Controls user information and actions
import { User } from "../interfaces/User";
import { LOCAL } from "../constants";
import { LoginResponse } from "../interfaces/ServerResponse";
import { cookies } from "next/headers";
import { Message } from "../interfaces/Message";
import UserController from "./UserController";

export default class MessageController {

    static async getUserMessages(): Promise<Message[] | undefined> {
        try {
            const user = UserController.getUser();

            if (!user) {
                return undefined;
            }

            // const res = await fetch(`${LOCAL}/api/messages`, {
            //     method: 'GET',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            // });

            // if (res.ok) {
            //     const data: Message[] = await res.json();

            //     return data;
            // } else {
            //     console.log(`Error Getting Messages: ${res.statusText}`)
            // }
            
        } catch (error) {
            // console.log(`Error Getting Messages: ${error}`)
        }

    }
}

