
import React from 'react'
import { ProfilePictureProps } from './ProfilePictureProps'

export const ProfilePicture = ({
    picture
}: ProfilePictureProps) => {
  return (
    <img src={URL.createObjectURL(picture)} alt='profile' className='flex rounded-full h-20 w-20 object-cover'/>
  )
}

