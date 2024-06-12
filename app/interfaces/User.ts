
export interface User {
    id: number,
    email: string;
    username: string;
    description: string;
    friends: User[];
    profilePicture?: File;
}
