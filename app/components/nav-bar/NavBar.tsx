'use client'

import React, { useEffect } from 'react'
import { NavProps } from './NavProps'
import { HomeIcon } from '../home-icon/HomeIcon'
import { LinkItem } from '@/app/interfaces/LinkItem'
import Link from 'next/link'
import UserController from '@/app/controllers/UserController'

export const NavBar = ({
    links,
    loggedIn
}: NavProps) => {

    // navbar states
    const [navLinks, setNavLinks] = React.useState<LinkItem[]>(SortLinks(links));
    const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(loggedIn ? true : false);

    useEffect(() => {
        // check if a user is already logged in
        const user = UserController.getUser()

        setIsLoggedIn(user !== undefined)
    }, [])

  return (
    <div className='flex w-full h-full bottom-4 bg-slate-500 justify-evenly align-middle'>
        <div className='flex w-1/6 h-full items-center pl-2'>
            <HomeIcon/>
        </div>
        <div className='flex w-4/6 h-full justify-evenly align-middle'>
            {
                navLinks.map((link: LinkItem, index: number) => {
                    return NavBarItem(link, index)
                })
            }
        </div>
        <div className='flex w-1/6 h-fit'>
            {
                isLoggedIn ? LoggedIn(() => setIsLoggedIn(false)) : NotLoggedIn()
            }
        </div>
    </div>
  )
}

const SortLinks = (links: LinkItem[]): LinkItem[]  => {
    return links.sort((a, b) => {
        // sort by priority first
        if (a.priority && b.priority) {
            return a.priority - b.priority
        } else {
            // else go by alphabetical
            return a.title.localeCompare(b.title)
        }
    })
}

const NavBarItem = (link: LinkItem, index: number): JSX.Element => {
    return (
        <Link key={index} href={link.href} className='flex h-full w-fit align-middle'>
            {link.title}
        </Link>
    )
};

const NotLoggedIn = (): JSX.Element => {
    return (
        <div className='flex align-middle justify-evenly'>
            <Link className='p-2 px-5 m-2 bg-primary hover:bg-secondary 
                text-white font-bold rounded-lg shadow-md transition-colors duration-150 ease-in
                text-base'
                href='/login'>
                    Log In
            </Link>
            <Link className='p-2 px-5 m-2 bg-secondary hover:bg-primary 
                text-white font-bold rounded-lg shadow-md transition-colors duration-150 ease-in
                text-base'
                href='/signup'>
                    Sign Up
			</Link>
        </div>
    )
};

const LoggedIn = (LogOutCallBack: () => void): JSX.Element => {
    return (
        <> 
            <Link className='p-2 px-5 m-2 bg-red-500 hover:bg-red-600 active:bg-red-700
                text-white font-bold rounded-lg shadow-md transition-colors duration-150 ease-in
                text-base hover:brightness-110'
                href='/signup' onClick={LogOutCallBack}>
                    Sign Out
            </Link>
            <Link className='h-fit w-fit'
            href='/settings'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12 rounded">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </Link>
        </>

    )
}

