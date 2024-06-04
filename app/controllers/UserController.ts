
// Controls user information and actions

import { User } from "../interfaces/User";

export default class UserController {

    private static user: User;
    
    // user logins
    static async loginUser(email: string, password: string) {
        // login user


        // if user is logged in, set user
        UserController.user = {
            id: null, // null for now
            email: email,
            password: password
        };
    };

    // user registers
    static async registerUser(email: string, password: string, code: string) {
        // register user
    };

    // get user information
    static async getUser() {
        return UserController.user;
    };

    // user logouts
    static async logoutUser() {

        // reset user information
        UserController.user = {
            id: null,
            email: "",
            password: ""
        };
    };
}
