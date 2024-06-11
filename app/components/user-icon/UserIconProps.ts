import { User } from "@/app/interfaces/User";

export interface UserIconProps {
    user: User;
    key?: number;
    callback?: () => void;
}
