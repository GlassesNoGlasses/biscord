'use client'

import Link from "next/link";
import { NavBar } from "../components/nav-bar/NavBar";
import { LinkItem } from "../interfaces/LinkItem";
import { useState } from "react";
import UserController from "../controllers/UserController";
import { User } from "../interfaces/User";


export default function Page() {

    // Form States
    const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [feedback, setFeedback] = useState('');

    // NavBar Links Test data
    const testNavs: LinkItem[] = [
        {
            title: "Google",
            href: "google.com",
            priority: 1
        },
        {
            title: "FaceBook",
            href: "adsadasd",
            priority: 2,
        },
        {
            title: "instagram",
            href: "asdadad",
            priority: 2
        }
    ];

    // Form submit handler
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        UserController.loginUser(username, password).then((res): User | Response | undefined => {
            if (!res) {
                setFeedback('Invalid Credentials');
                return;
            } else if (res instanceof Response) {
                setFeedback('Server Error');
                console.log(res);
            } else {
                console.log(res);
            }
        })

    }

    return (
        <div className="w-screen h-screen">
            <div className="w-full h-fit">
                <NavBar links={testNavs} loggedIn={false}/>
            </div>
            <div className="flex items-center justify-center">
                <div 
                    className="w-full h-5/6 mt-5 max-w-xs mx-auto bg-slate-400 rounded-xl
                        sm:px-6 sm:py-8 md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl flex flex-col gap-4
            border-4 border-primary shadow-2xl shadow-black"
                    style={{ boxShadow: '-10px 10px 30px 0 rgba(0, 0, 0, 0.1)' }}>
                    <h3 className="text-xl font-bold text-center sm:text-2xl text-gray-700">Log in to your account</h3>
                    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                        <div className="flex items-center flex-row mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <input
                                type="text"
                                id="email"
                                aria-label='email or username'
                                placeholder="Enter email or username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="form-input w-full px-3 py-2 mt-2 border border-gray-200 rounded-full focus:outline-none
                                focus:ring focus:ring-slate-700 sm:px-4 sm:py-3 text-black"
                                style={{ boxShadow: 'inset -4px 4px 6px rgba(0, 0, 0, 0.1)' }}
                                required
                            />
                        </div>
                        <div className="flex items-center flex-row mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                            <input
                                type="password"
                                id="password"
                                aria-label='password'
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-input w-full px-3 py-2 mt-2 border border-gray-200 rounded-full focus:outline-none
                                focus:ring focus:ring-slate-700 sm:px-4 sm:py-3 text-black"
                                style={{ boxShadow: 'inset -4px 4px 6px rgba(0, 0, 0, 0.1)' }}
                                required
                            />
                        </div>
                        <div className="h-[2.5vh] flex justify-center align-middle">
                            <span className="text-red-700">{feedback}</span>
                        </div>
                        <div className="flex justify-center">
                        <button type='submit'
                            className='p-2 px-5 m-2 bg-slate-700 hover:bg-secondary
                                text-white font-bold rounded-lg shadow-md transition-colors duration-150 ease-in
                                text-base w-full'>
                            Log In
                        </button>
                        </div>
                    </form>
                        <div className="mt-5">
                            <Link href="/signup" className="underline">Sign Up</Link>
                            <a role="button" className="flex float-right text-sm text-primary hover:underline sm:text-base">
                                Forgot password?
                            </a>
                        </div>
                </div>
		    </div>
        </div>
    )
}

