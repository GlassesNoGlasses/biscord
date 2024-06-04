'use client'

import React from 'react'
import { NavProps } from './NavProps'
import { HomeIcon } from '../home-icon/HomeIcon'
import { LinkItem } from '@/app/interfaces/LinkItem'
import Link from 'next/link'

export const NavBar = ({
    links,
    loggedIn
}: NavProps) => {

    const [navLinks, setNavLinks] = React.useState<LinkItem[]>(SortLinks(links));
    const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(loggedIn);

  return (
    <div className='flex w-full h-full bottom-4 bg-slate-500 justify-evenly align-middle'>
        <div className='flex w-1/6 h-full items-center pl-2'>
            <HomeIcon/>
        </div>
        <div className='flex w-4/6 h-full justify-evenly align-middle'>
            {
                navLinks.map((link: LinkItem) => {
                    return NavBarItem(link)
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

const NavBarItem = (link: LinkItem): JSX.Element => {
    return (
        <Link href={link.href} className='flex h-full w-fit align-middle'>
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
        <Link className='p-2 px-5 m-2 bg-red-500 hover:bg-red-600 active:bg-red-700
			text-white font-bold rounded-lg shadow-md transition-colors duration-150 ease-in
			text-base hover:brightness-110'
			href='/signup' onClick={LogOutCallBack}>
				Sign Out
		</Link>
    )
}

