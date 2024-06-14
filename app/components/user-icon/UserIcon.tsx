import React from 'react'
import { UserIconProps } from './UserIconProps'
import { ProfilePicture } from '../profile-picture/ProfilePicture'
import { DefaultPicture } from '../default-profile-picture/DefaultPicture'

export const UserIcon = ({
    user,
    callback
}: UserIconProps) => {

  return (
    <button className='flex flex-row h-fit w-full bg-inherit hover:brightness-110
        border-b-2 border-black align-middle justify-center focus:brightness-125'
        onClick={callback}>
        {
          user.profilePicture ?
            <ProfilePicture picture={user.profilePicture}/>
          : <DefaultPicture styling='rounded-full h-20 w-20'/>
        }
        <div className='flex h-full w-5/6 items-center pl-2 flex-col'>
            <h1 className='text-white'>{user.username}</h1>
            <h2 className='text-slate-200'>{user.description ? user.description : ""}</h2>
        </div>
    </button>
  )
}
