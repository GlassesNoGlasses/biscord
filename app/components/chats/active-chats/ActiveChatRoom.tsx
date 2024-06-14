
import React from 'react'
import { Message } from '@/app/interfaces/Message';
import { ActiveChatRoomProps } from './ActiveChatRoomProps';
import { ChatBox } from '../chatbox/ChatBox';
import { MessageDisplay } from '../../message-display/MessageDisplay';

export const ActiveChatRoom = ({
    room,
    user,
    callback
}: ActiveChatRoomProps) => {

  // sort messages by latest date
  const messages = room.messages.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // update messages when sending new message
  const updateMessages = (newMessage: Message) => {
    callback(newMessage);
  }
  

  return (
    <div className='flex flex-col h-full w-full'>
      <div className='flex h-5/6 w-full bg-gray-700'>
        <div className='flex flex-col h-full w-full justify-start align-bottom overflow-auto'>
          {
            messages.map((message, index) => {
              return (
                <li key={index}>
                  <MessageDisplay message={message}/>
                </li>
              )
            })
          }
        </div>
      </div>
      <div className='flex h-1/6 w-full bg-slate-800 align-bottom justify-center'>
        <ChatBox
        lastMessageID={messages.length > 0 ? messages[messages.length - 1].id : -1}
        receiver={room.type === 'PRIVATE' ? room.name : 'everyone'}
        sender={user ? user.username : ''}
        callback={updateMessages}
        />
      </div>
    </div>
  )
}

