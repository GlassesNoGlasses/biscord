
// Controls user information and actions

import { User } from "../interfaces/User";

export default class UserController {

    private static user: User | null = null;
    
    // user logins
    static async loginUser(email: string, password: string) {
        // login user


        // if user is logged in, set user
        UserController.user = {
            id: null, // null for now
            email: email,
            username: "", // username is empty for now, will update after fetching
            friends: [] // friends is empty for now, will update after fetching
        };
    };

    // user registers
    static async registerUser(email: string, password: string, code: string) {
        // register user
    };

    // get user information
    static getUser() {
        return UserController.user;
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
