
import React from 'react'
import { NavProps } from './NavProps'
import { HomeIcon } from '../home-icon/HomeIcon'
import { LinkItem } from '@/app/interfaces/LinkItem'
import Link from 'next/link'

export const NavBar = ({
    links
}: NavProps) => {

  return (
    <div className='flex w-full h-1/6 bg-gray-400 bottom-4 justify-evenly align-middle'>
        <div className='flex w-1/6 h-full justify-center'>
            <HomeIcon/>
        </div>
        <div className='flex w-4/6 h-full justify-evenly'>
            {
                SortLinks(links).map((link: LinkItem) => {
                    return NavBarItem(link)
                })
            }
        </div>
        <div className='flex w-1/6 h-full'>
            <button className='h-full w-full'>Login</button>
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
        <Link href={link.href} className='h-full w-fit'>
            {link.title}
        </Link>
    )
}

