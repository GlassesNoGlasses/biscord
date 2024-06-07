import React from 'react'
import { UserIconProps } from './UserIconProps'

export const UserIcon = ({
    user,
    callback
}: UserIconProps) => {

  return (
    <button className='flex flex-row h-fit w-full bg-inherit hover:brightness-110
        border-x-2 border-b-2 border-black align-middle justify-center focus:brightness-125'
        onClick={callback}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12 rounded">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        <div className='flex h-full w-5/6 items-center pl-2 flex-col'>
            <h1 className='text-white'>{user.username}</h1>
            <h2 className='text-slate-200'>{user.description ? user.description : ""}</h2>
        </div>
    </button>
  )
}
