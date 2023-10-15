"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import bg from "/src/app/assets/bg.png";
import Navbar from "@/components/Navbar";
import Checkcetagory from "@/components/Checkcetagory";
import Checktime from "@/components/Checktime";
import Checkanother from "@/components/Checkanother";

import LocationBoxnologin from "@/components/LocationBoxnologin";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession, signIn, signOut } from "next-auth/react";
import { faLocationPin, faStar } from "@fortawesome/free-solid-svg-icons";
import { FaBeer } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCalendarDay } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { IBlog } from "@/types/Blog";
import axios from "axios";
import ButtonGroup from "@/components/ButtonGroup";
import Searchbar from "@/components/Searchbar";


export default function NoLogin({ blogInfo }: { blogInfo: IBlog | null | any }) {
  const [firstImage, setFirstImage] = useState<any>(null)
  const { data: session, status } = useSession();
  const { push } = useRouter();
  const [blog, setBlog] = useState<IBlog | null | any>(null)

  const handleSubmit = (searchTerm: any) => {
    console.log(`Search term submitted: ${searchTerm}`);
  };
  const inputProps = {
    onFocus: () => {
      console.log('Input field focused');
    },
    onBlur: () => {
      console.log('Input field blurred');
    },
  };

  useEffect(() => {
    try {
      axios.get(`${process.env.NEXT_PUBLIC_BACKEND as string}blogs`).then((res) => {
        setBlog(res.data)
      })
    } catch (error) {
      console.error(error);

    }
  }, [])
  console.log(blog)
  return blog && (
    <>
      <Navbar />

      <div className="mt-[80px]">

        <div className="w-full">
          <div className="mx-auto flex-col flex  mb-14 overflow-hidden max-w-8xl space-y-5
        ">
            {blog.map((blog: any, key: any) => {
              console.log(blog)
              return (
                <LocationBoxnologin blogInfo={blog} key={key} />
              )
            })}
          </div>
        </div>

        <div>
          <Image
            alt="img"
            src={bg}
            width={1900}
            height={326}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>

        <div className="max-w-md p-10 divide-y-2 bg-[#FAFBFC] rounded-2xl shadow-md overflow-hidden md:max-w-2xl space-y-10">
          <Searchbar onSubmit={handleSubmit} inputProps={inputProps} />
          < Checkcetagory />
          < Checktime />
          < ButtonGroup buttons={["0+", "1+", "2+", "3+", "4+"]} />
          < Checkanother />
        </div>

      </div>
    </>
  );
}

