'use client'

import React, { useEffect, useState } from 'react'
import { ImageUploadProps } from './ImageUploadProps'

export const ImageUpload = ({
    children,
    callback
}: ImageUploadProps) => {

    // image uploading logic
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    // callback when image is changed
    useEffect(() => {
        if (selectedImage) {
            callback(selectedImage);
        }
    }, [selectedImage])

    // image upload handler
    const ImageUploadHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        // Get the selected file
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];

            setSelectedImage(file);
        }
    }

  return (
    <div className='flex flex-row h-full w-full'>
        <label htmlFor='image-upload-input' className='flex h-full w-full justify-center'>
            {children}
        </label>

        <input
        type="file"
        id='image-upload-input'
        accept="image/*"
        className='hidden invisible'
        onChange={ImageUploadHandler}
        />
    </div>
  );
}

