"use client";
import React from 'react'
import { useRouter } from "next/navigation";
import { useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface IUserComment {
    rating: number;
    title: string;
    description: string;
    recommendActivity: string;
    spendTime: string;
  }

export default function Page() {
    const router = useRouter();
    const ProfileUrl = "https://cdn.pic.in.th/file/picinth/tommy.png";
    const LogoUrl = "https://cdn.pic.in.th/file/picinth/logoa1979d25595efb53.png";
    const Back = "https://cdn.pic.in.th/file/picinth/Button.png";
    const [comment, setComment] = useState<IUserComment>({
        rating: 0,
        title: "",
        description: "",
        recommendActivity: "",
        spendTime: "",
      });
      const [count, setCount] = useState({
        title: 0,
        description: 0,
        recommendActivity: 0,
        spendTime: 0,
      });
    const inputValue =
    (name: string) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (event?.target != null) {
        setComment({ ...comment, [name]: event.target.value });
        setCount({ ...count, [name]: event.target.value.length });
      }
    };

    return (
        <div className="h-screen flex flex-col">
            <Navbar LogoUrl={LogoUrl} ProfileUrl={ProfileUrl} /> 
            <div className='flex justify-start mb-4 mt-28 ms-10'>
                <button onClick={()=>router.push('/review')}>
                    <img src={Back}></img>
                </button>
            </div>
            <div className="rounded-lg w-3/6 mx-auto mb-8 bg-gray-100 h-128">
                <div className='flex justify-center mt-4 mb-4'>
                    <div className='text-2xl'>location</div>
                </div>
            </div>
            <div className="rounded-lg w-2/6 mx-auto mb-8 bg-gray-100 h-128">
                <div className='flex justify-center mt-4 mb-4'>
                    <div className='text-2xl'>ให้คะแนนสถานที่นี้</div>
                </div>
            </div>
            <div className="rounded-lg w-5/6 mx-auto mb-16 bg-gray-100 h-128">
                <div className="ms-6 me-6 my-5">
                    <div className="my-2">
                        <h1 className='text-2xl'>เขียนรีวิว</h1>
                    </div>
                    <div className="border-b-2 border-[#D9D9D9] w-full my-2"></div>
                </div>
                <div className="ms-6 me-6 my-5">
                    <div className="flex justify-between my-2">
                        <h2>หัวเรื่องรีวิว</h2>
                        <p>{count.title} / 80</p>
                    </div>
                    <input
                        type="text"
                        value={comment.title}
                        onChange={inputValue("title")}
                        className="w-full border-2 rounded-lg h-10 bg-inherit"
                    />
                </div>
                <div className="ms-6 me-6 my-5">
                    <div className="flex justify-between my-2">
                        <h2>รายละเอียดรีวิว</h2>
                        <p>{count.description} / 700</p>
                    </div>
                    <textarea
                        rows={5}
                        value={comment.description}
                        onChange={inputValue("description")}
                        className="w-full border-2 rounded-lg"
                    />
                </div>
                <div className="ms-6 me-6 my-5">
                    <div className="flex justify-between my-2">
                        <h2>กิจกรรมแนะนำ</h2>
                        <p>{count.recommendActivity} / 40</p>
                    </div>
                    <input
                        type="text"
                        value={comment.recommendActivity}
                        onChange={inputValue("recommendActivity")}
                        className="w-full border-2 rounded-lg h-10 bg-inherit"
                    />
                </div>
                <div className="ms-6 me-6 my-5">
                    <div className="flex justify-between my-2">
                        <h2>ระยะเวลาที่ใช้กับสถานที่นี้</h2>
                        <p>{count.spendTime} / 40</p>
                    </div>
                    <input
                        type="text"
                        value={comment.spendTime}
                        onChange={inputValue("spendTime")}
                        className="w-full border-2 rounded-lg h-10 bg-inherit"
                    />
                </div>
                <div className='flex flex-row justify-center space-x-24 mb-4 mt-4'>
                    <button className='rounded w-64 h-10 bg-[#276968] text-white'>Save</button>
                    <button className='rounded w-64 h-10 bg-[#276968] text-white'>Cancle</button>
                </div>
            </div>
            <div className="flex-grow"></div>
            <Footer/>
        </div>
    );   
}
