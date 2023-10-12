"use client";
import React from 'react'
import { useState ,useRef } from 'react';
import { useRouter } from "next/navigation";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from "next/image";

export default function Page() {
    const router = useRouter();
    const ProfileUrl = "https://cdn.pic.in.th/file/picinth/tommy.png";
    const LogoUrl = "https://cdn.pic.in.th/file/picinth/logoa1979d25595efb53.png";
    const Back = "https://cdn.pic.in.th/file/picinth/Button.png";
    const [uploadImages, setUploadImages] = useState<File[]>([]);
    const handleUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target?.files != null) {
          setUploadImages([...uploadImages, event.target.files[0]]);
        }
      };
    const addImage = useRef<HTMLInputElement>(null);
    const handleUploadImageClick = () => {
        if (addImage.current !== null) {
          addImage.current.click();
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
            <div className="rounded-lg w-5/6 mx-auto mb-16 bg-gray-100 h-128">
                <div className="ms-6 me-6 my-5">
                    <div className="my-2">
                        <h1 className='text-2xl'>เพิ่มรูปรูปภาพ</h1>
                    </div>
                    <div className="border-b-2 border-[#D9D9D9] w-full my-2"></div>
                </div>
                <div className="w-full flex flex-col">
                    <div className='flex flex-col'>
                        <a className="ms-6 mb-2">เลือกรูปภาพ</a>
                        <div className="ms-6 mb-2">
                            <button className="items-center justify-center bg-gray-300 w-24 h-8 rounded-xl cursor-pointer" onClick={handleUploadImageClick} >Choose file</button>
                            <input
                            type="file"
                            onChange={handleUploadImage}
                            className="hidden"
                            ref={addImage}
                            />
                        </div>
                    </div>
                    <a className="ms-6">รูปภาพ</a>
                    <div className='flex flex-row mt-4 mb-4'>
                        {uploadImages.length
                            ? uploadImages.map((img, index) => {
                                return (
                                <div key={index} className="w-[50%] md:w-[25%] lg:w-[20%] h-36 md:h-48 lg:h-64 p-2">
                                    <div className="relative w-full h-full">
                                        <div className=" absolute top-3 right-3 w-8 h-8 rounded-[50%] bg-red-400 z-10 flex justify-center items-center text-white cursor-pointer">
                                            X
                                        </div>
                                        <Image
                                            src={URL.createObjectURL(img)}
                                            alt=""
                                            sizes="100vw"
                                            fill
                                            className="rounded-xl ms-6"
                                        ></Image>
                                    </div>
                                </div>
                                );
                            })
                            : ""}
                    </div>
                </div>
                <a className="ms-6">!!! ไฟล์ JPG PNG หรือ JPEG ขนาดไม่เกิน 1 Mb !!!</a>
                <div className='flex flex-row justify-center space-x-24 mb-4 mt-4'>
                    <button className='rounded w-64 h-10 bg-[#276968] text-white'>Save</button>
                    <button className='rounded w-64 h-10 bg-[#276968] text-white'>Cancle</button>
                </div>
            </div>
            <Footer/>
        </div>
    );   
}
