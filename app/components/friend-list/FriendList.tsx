' use client'

import React, { ChangeEvent, useEffect } from 'react'
import { FriendListProps } from './FriendListProps'
import { UserIcon } from '../user-icon/UserIcon'
import { User } from '@/app/interfaces/User'

export const FriendList = ({
    friends,
    handleSelect
}: FriendListProps) => {

    // states used
    const [searchTerm, setSearchTerm] = React.useState<string>('');
    const [filteredUsers, setFilteredUsers] = React.useState<User[]>(friends)

    // filter users by username
    const filterUsersByUsername = (users: User[], searchTerm: string) => {
        return users.filter((user: User) => {
            return user.username.toLowerCase().includes(searchTerm.toLowerCase())
        });
    }

    // handle search filter
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const updatedSearchTerm = event.target.value;
        setSearchTerm(updatedSearchTerm);
        setFilteredUsers(filterUsersByUsername(friends, updatedSearchTerm));
    };

    // magnifying glass icon &#x1F50D;

  return (
    <div className='flex overflow-y-auto flex-col w-full h-full bg-slate-600'>
        <div className='flex w-full h-fit p-2 bg-slate-600 border-b-4 border-slate-800'>
            <input
            type='text'
            placeholder='Search by username'
            value={searchTerm}
            onChange={handleSearchChange}
            className='flex w-full text-black text-sm justify-center rounded-lg'/>
        </div>
            {
                filteredUsers.map((friend: User, index: number) => {
                    return <UserIcon user={friend} key={index} callback={() => handleSelect(friend)}/>
                })
            }
    </div>
  )
}

