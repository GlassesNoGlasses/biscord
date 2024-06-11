'use client'

import React, { useState } from 'react'
import { UserProfileProps } from './UserProfileProps'
import { UserIcon } from '../user-icon/UserIcon'
import UserController from '@/app/controllers/UserController'

export const UserProfile = ({
    user
}: UserProfileProps) => {

    // Form States
    const [username, setUsername] = useState<string>(user.username);
    const [description, setDescription] = useState<string>(user.description);

    // Form submit handler
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        UserController.updateUser({...user, username: username, description: description}).then((res: Response | undefined) => {
            console.log(res);
        })
    }

  return (
    <div className='flex h-full w-full bg-gray-700 justify-center align-middle'>
        <div className='flex flex-col h-[90%] w-[90%] bg-gray-800 justify-center align-middle'>
            <div className='flex flex-row h-1/5 w-full bg-inherit'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="rounded">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <div className='flex h-full w-5/6 items-center pl-2'>
                    <span className='flex text-center text-4xl'>{user.username}</span>
                </div>
            </div>
            <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
                <div className='flex flex-col w-full h-full gap-4'>
                    <div className='flex flex-col h-1/2 w-full'>
                        <label htmlFor='username' className='text-white'>Username</label>
                        <input
                        type='text'
                        id='username'
                        placeholder={`Current: ${user.username}`}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='flex w-[90%] text-black text-sm justify-center rounded-lg'/>
                    </div>
                    <div className='flex flex-col h-1/2 w-full'>
                        <label htmlFor='description' className='text-white'>Description</label>
                        <input
                        type='text'
                        id='description'
                        placeholder={`Current: ${user.description}`}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className='flex w-[90%] text-black text-sm justify-center rounded-lg'/>
                    </div>
                </div>
                <div className='flex justify-center align-middle h-fit w-full'>
                    <button type='submit'
                        className='p-2 px-5 bg-slate-700 hover:bg-secondary
                            text-white font-bold rounded-lg shadow-md transition-colors duration-150 ease-in
                            text-base w-fit'>
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

