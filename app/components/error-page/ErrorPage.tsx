
import React from 'react'
import { ErrorPageProps } from './ErrorPageProps'
import { ERROR_CODES } from '@/app/constants';
import Link from 'next/link';

export const ErrorPage = ({
    type
}: ErrorPageProps) => {

    const errorMessage = type in ERROR_CODES ? ERROR_CODES[type] : ERROR_CODES[400];
    
  return (
    <div className='flex h-screen w-screen bg-white'>
        <span className='font-bold h-fit w-full text-center text-4xl'>{`${"Error: ".concat(errorMessage)}`}</span>
        <div className='flex text-center text-lg font-semibold'>
            The page you are trying to access is currently unavailable. Please try again later.
        </div>
        <Link href={"/"}>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                Go Home
            </button>
        </Link>
    </div>
  )
}

