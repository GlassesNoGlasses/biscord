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
        // get user information
        const currentUser = UserController.getUser();
        setUser(currentUser);
    }, [])

    // states
    const [user, setUser] = useState<User | undefined>(undefined);
    const [focusedUser, setFocusedUser] = useState<User | null>(null);

    // handle user selection
    const handleSelect = (friend: User) => {
        setFocusedUser(friend);
    };

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
                        focusedUser && user ?

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
