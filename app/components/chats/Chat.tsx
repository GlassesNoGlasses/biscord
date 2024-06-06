
import React from 'react'
import { ChatProps } from './ChatProps'
import { ChatBox } from './chatbox/ChatBox'
import { Message } from '@/app/interfaces/Message';

export const Chat = ({
    sessionID,
    prevMessages,
    friends,
    user,
}: ChatProps) => {

  // states
  const [messages, setMessages] = React.useState<Message[]>(
    prevMessages.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));

  // update messages when sending new message
  const updateMessages = (newMessage: Message) => {
    console.log(newMessage);

    setMessages([...messages, newMessage]);
  }
  

  return (
    <div className='flex flex-col h-full w-full justify-center'>
      <div className='flex h-5/6 w-full bg-gray-700'>

      </div>
      <div className='flex h-1/6 w-full bg-slate-800 align-bottom justify-center'>
        <ChatBox
        lastMessageID={messages.length > 0 ? messages[messages.length - 1].id : -1}
        receiver={friends.length > 1 ? 'everyone' : friends[0].username}
        sender={user ? user.username : ''}
        callback={updateMessages}
        />
      </div>
    </div>
  )
}

