"use client";
import React from 'react'
import { useState } from 'react';
import { useRouter } from "next/navigation";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ModalEdit from '../modal/ModalEdit';
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
          console.error('เกิดข้อผิดพลาดในการอัปโหลด:', error);
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
            <div className="flex h-14 w-full bg-gray-100 my-auto mb-4">
                <div className="flex justify-center space-x-52 w-full">
                    <div className="flex flex-col justify-center">
                        <button className="text-[#276968]" onClick={()=>router.push('/account')}>Account</button>
                        <a className="flex rounded-lg w-16 mb-2 mx-auto border-2 border-[#276968]"></a>
                    </div>
                    <a className="my-auto text-gray-300"> {" | "} </a>
                    <div className="flex flex-col justify-center">
                        <button className="text-[#276968]" onClick={()=>router.push('/review')}>My Review</button>
                    </div>
                    <a className="my-auto text-gray-300"> {" | "} </a>
                    <div className="flex flex-col justify-center">
                        <button className="text-[#276968]" onClick={()=>router.push('/bookmark')}>Bookmark</button>
                    </div>
                </div>
            </div>
            <div className="rounded-lg w-5/6 mx-auto mb-16 border-2 border-[#276968] bg-gray-100 h-128">
                <div className="flex flex-col mr-auto p-8">
                    <a className="text-gray-500 mb-1">Name</a>
                    <a className="text-lg mb-4">Tommy</a>
                    <a className="text-gray-500 mb-1">Email</a>
                    <a className="text-lg mb-4">tommychalon@gmail.com</a>
                    <a className="text-gray-500 mb-1">Password</a>
                    <a className="text-lg mb-4">********</a>
                    <a className="text-gray-500 mb-8">Bio</a>
                    <a className="flex rounded-lg w-496 h-40 py-3 gap-2 border-2 border-[#276968]">
                        <a className="text-gray-500 p-7">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</a>
                    </a>
                    <div className="flex justify-center items-end p-6">
                        <button onClick={()=>setIsVisible(true)} className="flex flex-row justify-center rounded-lg w-28 h-12 py-3 gap-2 text-[#276968] border-2 border-[#276968]">
                            <img src={Edit}></img>
                            Edit
                        </button>
                    </div>
                </div>
            </div>
            <ModalEdit onClose={handleOnClose} visible={isVisible}/>
            <ModalUploadProfile onCloses={handleOnCloses} visibles={isVisibles} onUpload={handleUploadProfileImage} />
            <Footer/>
        </div>
    );   
}