import { User } from "./User";

export interface LoginResponse {
    message?: string;
    data?: User;
    error?: string;
};

