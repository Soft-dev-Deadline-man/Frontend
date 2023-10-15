"use client";
import React from 'react'
import { useRouter } from "next/navigation";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function page() {
    const router = useRouter();

    return (
        <div className="h-screen overflow-y-auto">
            <div className="static fixed flex w-full h-16 bg-white p-3">
                <div className="flex ml-auto w-full h-16 p-2">
                    <Navbar/>
                </div>
                <button onClick={()=>router.push('/profile')}>
                    <div className="rounded-full h-10 w-10 bg-blue-500 ml-auto"></div>
                </button>
                
            </div>
            <div className="relatieve flex flex-col justify-center">
                <div className="w-full h-96 bg-blue-100"></div>
                <div className="profile-header mx-auto">
                    <div className="rounded-full h-48 w-48 bg-blue-500 -translate-y-1/2"></div>
                </div>
                <div className="flex flex-col items-center mb-16">
                    <a className="text-2xl">Name</a>
                <a className="text-gray-500 text-xs">Email</a>
            </div>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-center items-end space-x-52 w-full mb-8">
                    <button onClick={()=>router.push('/profile')}>Account</button><a> {" | "} </a>
                    <button onClick={()=>router.push('/review')}>My Review</button><a> {" | "} </a>
                    <button onClick={()=>router.push('/bookmark')}>Bookmark</button>
                </div>
            </div>
            <div className="rounded-lg w-5/6 mx-auto mb-16 bg-blue-100 h-128">
                <div className="flex flex-col mr-auto p-8">
                    <a className="text-gray-500 mb-4">Name</a>
                    <a className=" mb-4"></a>
                    <a className="text-gray-500 mb-4">Email</a>
                    <a className=" mb-4"></a>
                    <a className="text-gray-500 mb-4">Password</a>
                    <a className=" mb-4"></a>
                    <a className="text-gray-500 mb-8">Bio</a>
                    <a className="rounded-lg w-496 h-40 py-3 gap-2 border-2 border-blue-300">
                        <a className="p-8"></a>
                    </a>
                    <div className="flex justify-center items-end p-6">
                        <button className="rounded-lg w-28 h-12 py-3 gap-2 border-2 border-blue-300">Edit</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );   
}