import { User } from "./User";

export interface LoginResponse {
    message?: string;
    data?: User;
    error?: string;
};

export interface SignUpResponse {
    message?: string;
    error?: string;
};
