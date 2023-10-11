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
            <div className="rounded-lg w-2/6 mx-auto mb-8 bg-gray-100 h-128">
                <div className='flex justify-center mt-4 mb-4'>
                    <div className='text-2xl'>ให้คะแนนสถานที่นี้</div>
                </div>
            </div>
            <div className="rounded-lg w-5/6 mx-auto mb-16 bg-gray-100 h-128">
                <div className='flex flex-col'>
                    <a className='text-2xl ms-6 mt-6'>เขียนรีวิว</a>
                    <a className='w-7/8 border-2 border-gray-200 mt-4 mb-4 ms-6 me-6'></a>
                    <a className='text-xl ms-6 '>หัวเรื่องรีวิว</a>
                    <div className='flex flex-row justify-center space-x-24 mb-4 mt-4'>
                        <button className='rounded w-64 h-10 bg-[#276968] text-white'>Save</button>
                        <button className='rounded w-64 h-10 bg-[#276968] text-white'>Cancle</button>
                    </div>
                </div>
            </div>
            <div className="flex-grow"></div>
            <Footer/>
        </div>
    );   
}
