'use client'

import Link from "next/link";
import { NavBar } from "../components/nav-bar/NavBar";
import { LinkItem } from "../interfaces/LinkItem";
import { useState } from "react";
import { Modal } from "../components/modal/Modal";
import { InfoPage } from "../components/info-page/InfoPage";
import React from "react";
import UserController from "../controllers/UserController";


export default function Page({}) {

    // Form States
    const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    const [authCode, setAuthCode] = useState('');
	const [feedback, setFeedback] = useState('');

    // Verification Code State
    const [showModal, setShowModal] = useState(false);

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

    // constants
    const passwordMinLength = 8;

    // Form submit handler
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // check email
        if (!email.includes('@')) {
            setFeedback('Invalid Email Address');
            return;
        }

        // check password
        if (password.length < passwordMinLength) {
            setFeedback('Invalid Password Length');
            return;
        }

        // verify code
        // TODO: implement code
        UserController.signup(email, password, authCode).then((res: Response | undefined) => {
            if (res?.ok) {
                console.log('User Created');
            } else {
                console.log('Error Creating User');
            }
        });

        // submit form to db
    }

    return (
        <div className="w-screen h-screen">
            <div className="w-full h-fit">
                <NavBar links={testNavs} loggedIn={false}/>
            </div>
            {
                showModal ?
                <Modal
                allowQuickClose={true}
                showModal={showModal}
                closeModal={() => setShowModal(false)}
                openModal={() => setShowModal(true)}
                >
                    <InfoPage
                    title="What is a Verfication Code?">
                        <h1>Verification Code</h1>
                        <p>Check your email for the verification code</p>
                    </InfoPage>
                </Modal>
                : <></>
            }
            <div className="flex items-center justify-center">
                <div 
                    className="w-full h-5/6 mt-5 max-w-xs mx-auto bg-slate-400 rounded-xl
                        sm:px-6 sm:py-8 md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl flex flex-col gap-4
            border-4 border-primary shadow-2xl shadow-black"
                    style={{ boxShadow: '-10px 10px 30px 0 rgba(0, 0, 0, 0.1)' }}>
                    <h3 className="text-xl font-bold text-center sm:text-2xl text-gray-700">Sign Up An Account</h3>
                    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                        <div className="flex items-center flex-row mt-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <input
                                type="text"
                                id="email"
                                aria-label='email'
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                        <div className="flex justify-center align-middle">
                            <span className="pr-4">
                                {password.length >= passwordMinLength ? <>&#x2713;</> : <span>&#10005;</span>}
                            </span>
                            {`Password must be at least ${passwordMinLength} characters`}
                        </div>
                        <div className="flex items-center flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                            </svg>
                            <input
                                type="code"
                                id="code"
                                aria-label='code'
                                placeholder="Enter Verification Code"
                                value={authCode}
                                onChange={(e) => setAuthCode(e.target.value)}
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
                            Sign Up
                        </button>
                        </div>
                    </form>
                        <div className="mt-5">
                            <Link href="/login" className="underline">Login</Link>
                            <button className="flex float-right text-sm text-primary hover:underline sm:text-base"
                            onClick={() => setShowModal(prev => !prev)}>
                                Verification Code?
                            </button>
                        </div>
                </div>
		    </div>
        </div>
    )
}

