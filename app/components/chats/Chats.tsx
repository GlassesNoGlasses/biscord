
import React, { ChangeEvent } from 'react'
import { ChatProps } from './ChatProps'
import { ChatRoom } from '@/app/interfaces/ChatRoom'
import { ProfilePicture } from '../profile-picture/ProfilePicture'
import { DefaultPicture } from '../default-profile-picture/DefaultPicture'

export const Chats = ({
    rooms,
    onRoomSelect,
}: ChatProps) => {

  React.useEffect(() => {
    console.log(rooms);
  }, [])

  // states used
    const [searchTerm, setSearchTerm] = React.useState<string>('');
    const [filteredRooms, setFilteredRooms] = React.useState<ChatRoom[]>(rooms);

    // filter users by username
    const filterChatsByName = (rooms: ChatRoom[], searchTerm: string) => {
        return rooms.filter((room: ChatRoom) => {
            return room.name.toLowerCase().includes(searchTerm.toLowerCase())
        });
    }

    // handle search filter
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const updatedSearchTerm = event.target.value;
        setSearchTerm(updatedSearchTerm);
        setFilteredRooms(filterChatsByName(rooms, updatedSearchTerm));
    };

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
        <div className='flex flex-col h-fit w-full'>
          {
            filteredRooms.map((room: ChatRoom, index: number) => {
              return ChatRoomIcon(room, () => onRoomSelect(room), index);
            })
          }
        </div>
    </div>
  )
}

const ChatRoomIcon = (room: ChatRoom, callback: () => void, key: number): JSX.Element => {
  return (
      <button className='flex flex-row h-fit w-full bg-slate-700 hover:brightness-110
        border-b-2 border-black align-middle justify-center focus:brightness-125'
        onClick={callback}
        key={key}>
        {
          room.roomIcon ?
            <ProfilePicture picture={room.roomIcon}/>
          : <DefaultPicture styling='rounded-full h-20 w-20'/>
        }
        <div className='flex h-full w-5/6 items-center pl-2 flex-col'>
            <h1 className='text-white'>{room.name}</h1>
        </div>
    </button>
  )
}

