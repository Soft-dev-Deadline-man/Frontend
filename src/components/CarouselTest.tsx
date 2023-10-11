"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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

  const [curr, setCurr] = useState<number>(5);

  const prevCurr = (curr: number) => {
    setCurr((curr += 1));
    console.log(curr);
  };

  const nextCurr = (curr: number) => {
    setCurr((curr -= 1));
    console.log(curr);
  };
  return (
    // <div className=" text-black">
    //   <Swiper
    //     slidesPerView={4}
    //     spaceBetween={50}
    //     centeredSlides={true}
    //     modules={[Pagination, Navigation]}
    //     navigation={true}
    //   >
    //     {person.map((e) => (
    //       <SwiperSlide className=" w-80 py-7 rounded-2xl flex flex-row">
    //         <div>
    //           <div>{e.studentId}</div>
    //           <div>{e.name}</div>
    //           <div>{e.role}</div>
    //         </div>
    //         <div className=" w-16 bg-white">
    //           <img></img>
    //         </div>
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>
    <div className=" relative">
      <ul className=" flex overflow-x-auto text-center text-black w-screen gap-14 m-0 mt-10 snap-x translate-x-800">
        <div className=" absolute">
          <div className=" bg-white w-60"></div>
        </div>
        {person.map((e) => (
          <li
            id={e.id}
            className=" flex flex-col justify-center rounded-xl items-center snap-center"
          >
            <div className="bg-white text-xl w-72 p-3 snap-center rounded-xl after:w-100 before:w-100">
              <div>{e.studentId}</div>
              <div>{e.name}</div>
              <div>{e.role}</div>
              <div>{e.id}</div>
            </div>
            <div className=" my-7 w-16 bg-black h-16 rounded-full ">
              <img></img>
            </div>
          </li>
        ))}
      </ul>
      <div className=" flex justify-center items-center w-screen border-2">
        <div></div>
        <div className=" flex justify-between items-center">
          <FontAwesomeIcon
            onClick={(curr) => prevCurr}
            icon={faChevronCircleLeft}
            className="cursor-pointer"
          />
          {person[curr].nickname}
          <FontAwesomeIcon
            onClick={(curr) => nextCurr}
            icon={faChevronCircleRight}
            className="cursor-pointer"
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}
