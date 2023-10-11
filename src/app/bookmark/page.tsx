"use client";
import React from 'react'
import { useRouter } from "next/navigation";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function page() {
    const router = useRouter();
    const ProfileUrl = "https://cdn.pic.in.th/file/picinth/tommy.png";
    const BackgroundUrl = "https://cdn.pic.in.th/file/picinth/bgdcca7009fd1b7f73.png";
    const LogoUrl = "https://cdn.pic.in.th/file/picinth/logoa1979d25595efb53.png";

    return (
        <div className="h-screen overflow-y-auto">
            <Navbar LogoUrl={LogoUrl} ProfileUrl={ProfileUrl} /> 
            <div className="flex flex-col z-10">
                <div className="flex h-96 w-full">
                    <img src={BackgroundUrl} className="object-cover w-full h-full"></img>
                </div>
                <div className="profile-header mx-auto">
                    <div className="rounded-full h-48 w-48 -translate-y-1/2">
                        <img src={ProfileUrl} ></img>
                    </div>
                </div>
                <div className="flex flex-col items-center mb-16">
                    <a className="text-2xl">Tommy</a>
                    <a className="text-gray-500 text-xs">Email</a>
                </div>
            </div>
            <div className="flex h-14 w-full bg-gray-100 my-auto mb-4">
                <div className="flex justify-center space-x-52 w-full">
                    <div className="flex flex-col justify-center">
                        <button className="text-[#276968]" onClick={()=>router.push('/account')}>Account</button>
                    </div>
                    <a className="my-auto text-gray-300"> {" | "} </a>
                    <div className="flex flex-col justify-center">
                        <button className="text-[#276968]" onClick={()=>router.push('/review')}>My Review</button>
                    </div>
                    <a className="my-auto text-gray-300"> {" | "} </a>
                    <div className="flex flex-col justify-center">
                        <button className="text-[#276968]" onClick={()=>router.push('/bookmark')}>Bookmark</button>
                        <a className="flex rounded-lg w-20 mb-2 mx-auto border-2 border-[#276968]"></a>
                    </div>
                </div>
            </div>
            <div className="flex rounded-lg w-5/6 mx-auto mb-16 border-2 border-[#276968] bg-gray-100 h-128">
                <div className="flex flex-col mr-auto p-8">
                    
                </div>
            </div>
            <Footer/>
        </div>
    );   
}