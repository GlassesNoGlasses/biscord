
import React from 'react'
import { InfoPageProps } from './InfoPageProps'

export const InfoPage = ({
    title,
    children,
}: InfoPageProps) => {

  return (
    <div className='flex align-middle justify-center bg-slate-500'>
        <div>
            <h2>{title}</h2>
            <div>{children}</div>
        </div>
    </div>
  )
}

