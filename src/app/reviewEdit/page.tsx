"use client";
import React from 'react'
import { useState } from 'react';
import { useRouter } from "next/navigation";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Page() {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const handleOnClose  = ()=>setIsVisible(false);
    const ProfileUrl = "https://cdn.pic.in.th/file/picinth/tommy.png";
    const LogoUrl = "https://cdn.pic.in.th/file/picinth/logoa1979d25595efb53.png";
    const Back = "https://cdn.pic.in.th/file/picinth/Button.png";

    return (
        <div className="h-screen flex flex-col">
            <Navbar LogoUrl={LogoUrl} ProfileUrl={ProfileUrl} /> 
            <div className='flex justify-start mb-16 mt-28 ms-10'>
                <button onClick={()=>router.push('/review')}>
                    <img src={Back}></img>
                </button>
            </div>
            <div className="rounded-lg w-5/6 mx-auto mb-16 bg-gray-100 h-128">

            </div>
            <div className="flex-grow"></div>
            <Footer/>
        </div>
    );   
}
