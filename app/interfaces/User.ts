
export interface User {
    id: number | null,
    email: string;
    username: string;
    description?: string;
    friends: User[];
}
