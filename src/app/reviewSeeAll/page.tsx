"use client";
import React from 'react'
import { useState } from 'react';
import { useRouter } from "next/navigation";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ModalEditReview from '../modal/ModalEditReview';

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
            <div className='flex justify-start mb-4 mt-28 ms-10'>
                <button onClick={()=>router.push('/review')}>
                    <img src={Back}></img>
                </button>
            </div>
            <div className="flex rounded-lg w-auto ms-10 me-10 mx-auto mb-16 bg-gray-100 h-96">
                <div className="flex ml-auto me-4">
                    <button onClick={()=>setIsVisible(true)} className="flex justify-end rounded-lg me-3 text-3xl">
                        ...
                     </button>
                </div>
            </div>
            <div className="flex-grow"></div>
            <ModalEditReview onClose={handleOnClose} visible={isVisible}/>
            <Footer/>
        </div>
    );   
}
