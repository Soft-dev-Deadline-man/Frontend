"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default function CarouselTest() {
  const person = [
    {
      id: 0,
      studentId: "64010516",
      name: "ปัณณวิชญ์ วชิรเศรษฐหิรัญ",
      role: '"Devops"',
      pic: "",
      nickname: "Boat",
    },
    {
      id: 1,
      studentId: "64010597",
      name: "พิภูษณะ พิงคะสัน",
      role: '"Frontend"',
      pic: "",
      nickname: "Nay",
    },
    {
      id: 2,
      studentId: "64010659",
      name: "ภัทราภรณ์ จันเดชา",
      role: '"UX/UI & Frontend"',
      pic: "",
      nickname: "Jan",
    },
    {
      id: 3,
      studentId: "64010681",
      name: "ภูมิ ไพรศรี",
      role: '"Frontend"',
      pic: "",
      nickname: "Non",
    },
    {
      id: 4,
      studentId: "64010720",
      name: "รสริน นิยมสันติสุข",
      role: '"Backend"',
      pic: "",
      nickname: "Yaya",
    },
    {
      id: 5,
      studentId: "64010755",
      name: "วรชนนน์ ชัยประเสริฐสุด",
      role: '"Backend"',
      pic: "",
      nickname: "Pune",
    },
    {
      id: 6,
      studentId: "64010761",
      name: "วรพล รังษี",
      role: '"Backend"',
      pic: "",
      nickname: "Nine",
    },
    {
      id: 7,
      studentId: "64010845",
      name: "ศิรสิทธิ์ เทียนเจริญชัย",
      role: '"Frontend"',
      pic: "",
      nickname: "Oot",
    },
    {
      id: 8,
      studentId: "64011204",
      name: "พัฒพนพล ชัยวงษา",
      role: '"Frontend"',
      pic: "",
      nickname: "Aof",
    },
  ];

  return (
    <>
        
    </>
    // <div className=" relative">
    //   <ul className=" flex overflow-x-auto text-center text-black w-screen gap-14 m-0 mt-10 snap-x translate-x-800">
    //     <div className=" absolute">
    //       <div className=" bg-white w-60"></div>
    //     </div>
    //     {person.map((e) => (
    //       <li
    //         id={e.id}
    //         className=" flex flex-col justify-center rounded-2xl items-center snap-center"
    //       >
    //         <div className="bg-white text-2xl w-80 p-7 snap-center rounded-3xl after:w-100 before:w-100">
    //           <div>{e.studentId}</div>
    //           <div>{e.name}</div>
    //           <div>{e.role}</div>
    //           <div>{e.id}</div>
    //         </div>
    //         <div className=" my-7 w-16 bg-black h-16 rounded-full ">
    //           <img></img>
    //         </div>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
}
