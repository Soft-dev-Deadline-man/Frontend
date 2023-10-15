"use client";
import React, { ReactNode, useEffect } from 'react'
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
    const EditIcon ="https://cdn.pic.in.th/file/picinth/edit-icon.png";
    const [profileImage, setProfileImage] = useState(ProfileUrl);

    const handleUploadProfileImage = (image: File) => {
        try {
          // ตรวจสอบนามสกุลของไฟล์ภาพที่อัปโหลด
          const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
          if (!allowedExtensions.exec(image.name)) {
            throw new Error('ไฟล์ต้องเป็นรูปภาพเฉพาะ (jpg, jpeg, png)');
          }
      
          const reader = new FileReader();
      
          reader.onload = () => {
            // เมื่ออ่านไฟล์เสร็จสิ้น
            const dataURL = reader.result as string;
            setProfileImage(dataURL);
          };
      
          // อ่านไฟล์ภาพเพื่อแปลงเป็น URL
          reader.readAsDataURL(image);
        } catch (error) {
          console.error('An error occurred uploading:', error);
        }
      };

    return (
        <div className="h-screen overflow-y-auto">
           <Navbar LogoUrl={LogoUrl} ProfileUrl={ProfileUrl} /> 
            <div className="flex flex-col z-10">
                <div className="relative h-96 w-full">
                    <img src={BackgroundUrl} className="object-cover w-full h-full"></img>
                </div>
                <div className="profile-header mx-auto">
                    <div className="relative rounded-full h-48 w-48 -translate-y-1/2">
                        <img src={profileImage} alt="Profile" className='rounded-full h-48 w-48'></img>
                        <button onClick={() => setIsVisibles(true)} className="absolute -bottom-5 right-0">
                        <div className="flex justify-center items-center rounded-full h-12 w-12 bg-[#FF6F6B] -translate-y-1/2">
                            <img className="w-8 h-8" src={EditIcon} alt="Edit" />
                        </div>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center mb-16">
                    <a className="text-2xl">Tommy</a>
                    <a className="text-gray-500 text-xs">Email</a>
                </div>
            </div>
            <div className="flex w-full bg-gray-100 my-auto mb-4">
                <div className="flex justify-evenly w-full py-2">
                    <div className="flex flex-col justify-center">
                        <button className="text-[#276968]" onClick={()=>router.push('/account')}>Account</button>
                    </div>
                    <a className="my-auto text-gray-300"> {" | "} </a>
                    <div className="flex flex-col justify-center">
                        <button className="text-[#276968]" onClick={()=>router.push('/review')}>My Review</button>
                        <a className="flex rounded-lg w-24 mb-2 mx-auto border-2 border-[#276968]"></a>
                    </div>
                    <a className="my-auto text-gray-300"> {" | "} </a>
                    <div className="flex flex-col justify-center">
                        <button className="text-[#276968]" onClick={()=>router.push('')}>Bookmark</button>
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
            <ModalUploadProfile onClose={handleOnCloses} visibles={isVisibles} onUpload={handleUploadProfileImage} />
            <ModalEditReview onClose={handleOnClose} visible={isVisible}/>
            <Footer/>
        </div>
    );   
}