import { User } from "@/app/interfaces/User";

export interface FriendListProps {
    friends: User[];
    handleSelect: (friend: User) => void;
}
