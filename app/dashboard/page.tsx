'use client'

import { useEffect, useState } from "react";
import { User } from "../interfaces/User"
import UserController from "../controllers/UserController";
import { NavBar } from "../components/nav-bar/NavBar";
import { FriendList } from "../components/friend-list/FriendList";
import { Chat } from "../components/chats/Chat";


// dashboard page
export default function Page() {

    useEffect(() => {
        // no backend yet, so store user in local class
        const testUser: User = {
            id: 1,
            email: "test@gmail.com",
            username: "ABCD",
            description: "This is a test user",
            friends: []
        };
    
        const testFriends: User[] = [
            {
                id: 2,
                email: "alex@gmai.com",
                username: "Alex",
                description: "I'm Gay",
                friends: [testUser]
            },
            
            {
                id: 3,
                email: "Bigger Nerd",
                username: "Nerd",
                description: "I'm a bigger nerd",
                friends: [testUser]
            }
        ];
    
        testUser.friends = testFriends;

        // manually set user for now...
        UserController.setUser(testUser);

        // get user information

        const currentUser = UserController.getUser();
        setUser(currentUser);
    }, [])

    // states
    const [user, setUser] = useState<User | null>(null);
    const [focusedUser, setFocusedUser] = useState<User | null>(null);

    // handle user selection
    const handleSelect = (friend: User) => {
        console.log(friend)
        setFocusedUser(friend);
    };

    useEffect(() => {
        console.log(focusedUser);
    }, [focusedUser])

    return (
        <div className="h-screen w-screen">
            <div className="w-full h-fit">
                <NavBar links={[]}/>
            </div>
            <div className="w-full h-full flex flex-row">
                <div className="flex h-full w-1/4">
                    {
                        user ?
                        <FriendList friends={user.friends} handleSelect={handleSelect}/>
                        : <></>
                    }
                </div>
                <div className="flex h-full w-3/4 bg-zinc-300">
                    {
                        focusedUser ?

                        <Chat
                        friends={[focusedUser]}
                        user={user}
                        sessionID={1}
                        prevMessages={[]}
                        />

                        :
                        <span>Select a friend to chat with...</span>
                    }
                </div>
            </div>
        </div>
    )
}
