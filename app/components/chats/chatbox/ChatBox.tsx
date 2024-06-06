'use client'

import React from 'react'
import { ChatBoxProps } from './ChatBoxProps'
import { Message } from '@/app/interfaces/Message'

export const ChatBox = ({
  lastMessageID,
  sender,
  receiver,
  callback
}: ChatBoxProps) => {

  // placeholder for incrementing message ids
  let increment = 1;

  // states
  const [text, setText] = React.useState<string>('');

  // handle enter key press
  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && text.length > 0) {
      const newMessage: Message = {
        id: lastMessageID + increment,
        sender: sender,
        receiver: receiver,
        date: new Date(),
        text: text
      };

      callback(newMessage);
      setText('');
    }
  };

  // handle text change
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }

  return (
    <div className='flex w-full p-4 h-fit flex-row align-middle'>
        <button className='flex bg-slate-700 hover:brightness-110 rounded h-full w-fit'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 rounded">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
            </svg>
        </button>
        <input
        type='text'
        placeholder={`Message @${receiver}`}
        className='flex w-full h-fit bg-slate-600 text-white rounded-lg p-2'
        onKeyDown={handleEnter}
        onChange={handleTextChange}
        value={text}
        />
    </div>
  )
}

