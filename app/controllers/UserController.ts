
// Controls user information and actions
import { User } from "../interfaces/User";
import { LOCAL } from "../constants";
import { LoginResponse } from "../interfaces/ServerResponse";
import { cookies } from "next/headers";

export default class UserController {

    private static userCookie = cookies();
    private static user: User | null = null;
    
    // user logins
    static async loginUser(email: string, password: string): Promise<User | Response | undefined> {
        try {
            const res = await fetch(`${LOCAL}/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (res.ok) {
                const data: LoginResponse = await res.json();

                this.userCookie.set('user', JSON.stringify(data.data));

                return data.data;
            } else {
                console.log(`Error Logging In: ${res.statusText}`)
                return res;
            }
            
        } catch (error) {
            console.log(`Error Logging In: ${error}`)
        }
    };

    // user signup
    static async signup(email: string, password: string, authCode: string): Promise<Response | undefined> {
        try {
            const res = await fetch(`${LOCAL}/api/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, authCode }),
            });

            if (!res.ok) {
                console.log(`Error Signing Up: ${res.statusText}`)
            }
            return res;

        } catch (error) {
            console.log(`Error Signing Up: ${error}`)
        }
    };

    // TODO: Remove this shit and use cookies/storage
    // get user information
    static getUser() {
        return this.userCookie.get('user');
    };

    static setUser(user: User) {
        UserController.user = user;
    }

    // user logouts
    static async logoutUser() {

        // reset user information
        UserController.user = {
            id: null,
            email: "",
            username: "",
            friends: []
        };
    };
}
