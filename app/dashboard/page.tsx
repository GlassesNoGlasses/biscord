'use client'

import { useEffect, useState } from "react";
import { User } from "../interfaces/User"
import UserController from "../controllers/UserController";
import { NavBar } from "../components/nav-bar/NavBar";
import { FriendList } from "../components/friend-list/FriendList";
import { UserProfile } from "../components/user-profile/UserProfile";
import { ActiveChatRoom } from "../components/chats/active-chats/ActiveChatRoom";
import { Chats } from "../components/chats/Chats";
import { ChatRoom, ChatType } from "../interfaces/ChatRoom";
import MessageController from "../controllers/MessageController";
import { redirect } from "next/navigation";
import { Message } from "../interfaces/Message";


// dashboard page
export default function Page() {

    useEffect(() => {
        // get current user
        const currentUser = UserController.getUser();

        // if successful login and fetch
        if (currentUser) {
            // set current user
            setUser(currentUser);
            
            // get chats
            MessageController.getAllChatRooms(currentUser).then((rooms: ChatRoom[] | undefined) => {
                if (rooms) {
                    setChats(rooms);
                }
            })
        } else {
            // redirect to login if no user found
            redirect('/login');
        }
    }, [])
    
    // states
    const [user, setUser] = useState<User | undefined>(undefined);
    const [chats, setChats] = useState<ChatRoom[]>([]);
    const [focusedChatRoom, setFocusedChatRoom] = useState<ChatRoom | null>(null);

    // handle changing chat rooms
    const handleRoomSelect = (room: ChatRoom) => {
        setFocusedChatRoom(room);
    };

    // callback for updating message states
    const updateMessages = (newMessage: Message): void => {
        if (focusedChatRoom) {
            const updatedRoom = {...focusedChatRoom};
            updatedRoom.messages.push(newMessage);
            setFocusedChatRoom(updatedRoom);
        }
    }

    useEffect(() => {
        if (!focusedChatRoom || !user) {
            return;
        }

        MessageController.updateMessages(focusedChatRoom, user?.id).then((res: Response | undefined) => {
            if (!res) {
                console.log('Error updating messages');
                return;
            }
            console.log(res);
        })
    }, [focusedChatRoom])

    return (
        <div className="h-screen w-screen">
            <div className="w-full h-fit">
                <NavBar links={[]}/>
            </div>
            <div className="w-full h-full flex flex-row">
                <div className="flex h-full w-1/4">
                    {
                        user && chats.length > 0 ?
                        <Chats rooms={chats} onRoomSelect={handleRoomSelect}/>
                        : <></>
                    }
                </div>
                <div className="flex h-full w-3/4 bg-zinc-300">
                    {
                        focusedChatRoom ?

                        <ActiveChatRoom
                        room={focusedChatRoom}
                        user={user}
                        callback={updateMessages}
                        />

                        : user ? <UserProfile user={user}/> : <></>
                    }
                </div>
            </div>
        </div>
    )
}
