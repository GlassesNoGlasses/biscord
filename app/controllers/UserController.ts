
// Controls user information and actions
import { User } from "../interfaces/User";
import { LOCAL, DAY } from "../constants";
import { LoginResponse } from "../interfaces/ServerResponse";
import { cookies } from "next/headers";

export default class UserController {

    // private static userCookie = cookies();
    private static user: User | undefined = undefined;
    
    // user logins
    static async loginUser(email: string, password: string): Promise<User | undefined> {
        try {
            const res = await fetch(`${LOCAL}/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            console.log(res);

            if (res.ok) {
                const data: LoginResponse = await res.json();

                if (data.data) {
                    this.setUser(data.data);
                }

                return data.data;
            } else {
                console.log(`Error Logging In: ${res.statusText}`)
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

    // update user information
    static async updateUser(user: User): Promise<Response | undefined> {
        try {
            const res = await fetch(`${LOCAL}/api/updateUser/${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username: user.username, description: user.description}),
            });

            if (!res.ok) {
                console.log(`Error Updating User: ${res.statusText}`)
            }
            return res;

        } catch (error) {
            console.log(`Error Updating User: ${error}`)
        }
    }

    // TODO: Update this when backend is ready & authentification is implemented
    // get user information
    static getUser() {
        return this.user;
    };

    // sets user cookie
    static setUser(user: User) {
        this.user = user;
    }

    // user logouts
    static async logoutUser() {
        this.user = undefined;
    }
}
