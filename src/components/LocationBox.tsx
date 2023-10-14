"use client";
import React, { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession, signIn, signOut } from "next-auth/react";
import { faLocationPin, faStar } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { IBlog } from "../types/Blog";
import Image from "next/image";

export default function LocationBox({ blogInfo }: { blogInfo: IBlog | null }) {
  const [firstImage,setFirstImage] =useState<any>(null)
  const { data: session, status } = useSession();
  const { push } = useRouter();

  useEffect(()=>{
    if(blogInfo!=null){
      setFirstImage(blogInfo?.image?.[0]);
    }
  },[blogInfo])

  return blogInfo != null ? (
    <div className="flex bg-[#F8F8F8] rounded-xl overflow-hidden w-full h-[32] relative font-karnit">
      <div className="md:w-[30%] sm:w-[40%] w-[50%] sm:h-64 h-60 relative">
        <Image src={firstImage} fill sizes="100vw" alt=""></Image>
      </div>
      <div className="w-[70%] p-5">
        <h1 className="sm:text-2xl text-xl">{blogInfo.title}</h1>
        <div className=" border-b-2 border-[#D9D9D9] w-full my-2"></div>
        <div className="flex items-center my-2">
          <FontAwesomeIcon icon={faLocationPin} style={{ color: "#37454D" }} />{" "}
          <p className="text-[#8A8A8A] ml-1">{blogInfo.address}</p>
        </div>
        <div className="flex items-center my-2">
          <div className="p-1 px-2 flex items-center mr-2 bg-[#FF6F6B] rounded-xl text-white">
            <h4 className="mr-1">{blogInfo.rating}</h4>
            <FontAwesomeIcon icon={faStar} style={{ color: "#ffffff" }} />
          </div>
          {blogInfo.reviews.length} รีวิว
        </div>
        <h3 className="text-[#8A8A8A] my-2">{blogInfo.catagory}</h3>
      </div>
    </div>
  ) : (
    <div>ASDFGHJKL</div>
  );
}
