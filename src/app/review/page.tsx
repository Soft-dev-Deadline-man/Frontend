"use client";
import React from 'react'
import { useState } from 'react';
import { useRouter } from "next/navigation";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ModalEditReview from '../modal/ModalEditReview';
import ModalUploadProfile from '../modal/ModalUploadProfile';

export default function page() {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const handleOnClose  = ()=>setIsVisible(false);
    const [isVisibles, setIsVisibles] = useState(false);
    const handleOnCloses  = ()=>setIsVisibles(false);
    const ProfileUrl = "https://cdn.pic.in.th/file/picinth/tommy.png";
    const BackgroundUrl = "https://cdn.pic.in.th/file/picinth/bgdcca7009fd1b7f73.png";
    const LogoUrl = "https://cdn.pic.in.th/file/picinth/logoa1979d25595efb53.png";
    const Edit = "https://cdn.pic.in.th/file/picinth/Vector797beeee58cd47a2.png";
    const EditIcon ="https://cdn.pic.in.th/file/picinth/edit-icon.png";

    return (
        <div className="h-screen overflow-y-auto">
           <Navbar LogoUrl={LogoUrl} ProfileUrl={ProfileUrl} /> 
            <div className="flex flex-col z-10">
                <div className="relative h-96 w-full">
                    <img src={BackgroundUrl} className="object-cover w-full h-full"></img>
                </div>
                <div className="profile-header mx-auto">
                    <div className="relative rounded-full h-48 w-48 -translate-y-1/2">
                        <img src={ProfileUrl}></img>
                        <button onClick={()=>setIsVisibles(true)} className='absolute -bottom-5 right-0'>
                            <div className="flex justify-center items-center rounded-full h-12 w-12 bg-[#FF6F6B] -translate-y-1/2">
                                <img className="w-8 h-8" src={EditIcon}></img>
                            </div>
                        </button>
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
                        <a className="flex rounded-lg w-20 mb-2 mx-auto border-2 border-[#276968]"></a>
                    </div>
                    <a className="my-auto text-gray-300"> {" | "} </a>
                    <div className="flex flex-col justify-center">
                        <button className="text-[#276968]" onClick={()=>router.push('/bookmark')}>Bookmark</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-end'>
                <button className="flex flex-row items-center justify-center h-10 w-24 me-10 mb-4 rounded bg-white border-2 border-[#276968] text-[#276968]" onClick={()=>router.push('/reviewSeeAll')}>See all</button>
            </div>
            <div className="flex rounded-lg w-auto ms-10 me-10 mx-auto mb-16 bg-gray-100 h-96">
                <div className="flex ml-auto me-4">
                    <button onClick={()=>setIsVisible(true)} className="flex justify-end rounded-lg me-3 text-3xl">
                        ...
                     </button>
                </div>
            </div>
            <ModalUploadProfile onCloses={handleOnCloses} visibles={isVisibles}/>
            <ModalEditReview onClose={handleOnClose} visible={isVisible}/>
            <Footer/>
        </div>
    );   
}