
import React from 'react'
import { MessageDisplayProps } from './MessageDisplayProps'

export const MessageDisplay = ({
    key,
    message,
}: MessageDisplayProps) => {

  return (
    <div key={key} className='flex flex-col w-full h-fit pl-2'>
        <div className='flex flex-row w-full h-fit'>
            <span className='text-lg text-emerald-200'>
                {message.sender}
            </span>
            <div className='pl-3 text-sm text-white flex justify-center align-middle'>
                {message.date.toDateString()}
            </div>
        </div>
        <span className='text-base text-white'>
            {message.text}
        </span>
    </div>
  )
}

