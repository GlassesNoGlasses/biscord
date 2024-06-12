'use client'

import React, { useState } from 'react'
import { UserProfileProps } from './UserProfileProps'
import UserController from '@/app/controllers/UserController'
import { ImageUpload } from '../image-upload/ImageUpload'
import { DefaultPicture } from '../default-profile-picture/DefaultPicture'
import { ProfilePicture } from '../profile-picture/ProfilePicture'
import FileController from '@/app/controllers/FileController'

export const UserProfile = ({
    user
}: UserProfileProps) => {

    
    // Profile Picture State
    const [profilePicture, setProfilePicture] = useState<File | undefined>(user.profilePicture);
    const [newPicture, setNewPicture] = useState<boolean>(false);
    
    const handleImageUpload = (image: File) => {
        setProfilePicture(image);
        setNewPicture(true);
    }
    
    // Form States
    const [username, setUsername] = useState<string>(user.username);
    const [description, setDescription] = useState<string>(user.description);

    // Form submit handler
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        // update user information
        UserController.updateUser({...user, username: username, description: description}).then((res: Response | undefined) => {
            console.log(res);
        });

        // update profile picture
        if (profilePicture && newPicture) {
            console.log("Attempting to update!")
            FileController.updateProfilePicture(user.id, profilePicture).then((res: Response | undefined) => {
                console.log(res);
            })
        }
    }

  return (
    <div className='flex h-full w-full bg-gray-700 justify-center align-middle'>
        <div className='flex flex-col h-[90%] w-[90%] bg-gray-800 justify-center align-middle'>
            <div className='flex flex-row h-1/5 w-full bg-inherit'>
                <ImageUpload callback={handleImageUpload}>
                    {
                        profilePicture ?
                            <ProfilePicture picture={profilePicture}/>
                        : <DefaultPicture styling='h-20 w-20 flex hover:brightness-125'/>
                    }
                </ImageUpload>
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

