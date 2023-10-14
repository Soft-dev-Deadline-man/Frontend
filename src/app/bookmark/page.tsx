"use client";
import React from 'react'
import { useRouter } from "next/navigation";
import Navbar from '../../components/Navbar';
import LocationBox from '../../components/LocationBox';
import {IBlog} from '../../types/Blog';

export default function page() {
    const router = useRouter();
    const ProfileUrl = "https://cdn.pic.in.th/file/picinth/tommy.png";
    const BackgroundUrl = "https://cdn.pic.in.th/file/picinth/bgdcca7009fd1b7f73.png";
    const LogoUrl = "https://cdn.pic.in.th/file/picinth/logoa1979d25595efb53.png";

    const blogInfo: IBlog = {
        title: "Example Blog",
        catagory: "Travel",
        entrancePrice: {adult: 100, child: 50,senior: 80,},
        address: "123 Main St",
        rating: "4.5",
        separateRating: "4.5",
        reviews: [{ author: "John Doe", rating: 4, comment: "Great experience!"},
          {author: "Jane Smith", rating: 5, comment: "Excellent service and friendly staff."},
        ],
        latitude: "123.456",
        longtitude: "78.910",
        forbidden: {animal : "none",},
        contact: {Tel:"0881234567", Facebook:"sleepy",},
        image: ["https://cdn.pic.in.th/file/picinth/Group-2608839.png",],
      };

    return (
        <div className="h-screen overflow-y-auto flex flex-col items-center">
            <Navbar /> 
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
            <div className="flex w-full bg-gray-100 my-auto mb-4">
                <div className="flex justify-evenly py-2 w-full">
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
            <div className="flex flex-col w-5/6 justify-center">
                <div className='flex justify-end'>
                    <button className="flex flex-row items-center justify-center h-10 w-24 me-0 mb-4 rounded bg-white border-2 border-[#276968] text-[#276968]" onClick={()=>router.push('/reviewSeeAll')}>See all</button>
                </div>
                <div className="flex rounded-lg w-full mb-16 border-2 border-[#276968] bg-gray-100 h-128">
                    <div className="grid grid-cols-2">
                        {/* <LocationBox blogInfo={blogInfo}/> */}
                    </div>
                </div>
            </div>
        </div>
    );   
}