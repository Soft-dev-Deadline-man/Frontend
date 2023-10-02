"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { IBlog } from "@/types/Blog";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { setBlog } from "../store/slice/blogSlice";
import Cetagories from "@/components/Cetagories";
import Search from "@/components/Search";
import Popular from "@/components/Popular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faB, faSquare, faStar } from "@fortawesome/free-solid-svg-icons";
import Carousel from "@/components/Carousel";
import CarouselTest from "@/components/CarouselTest";
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const allBlogs = useAppSelector((state) => state.blog.allBlogs);
  const dispatch = useAppDispatch();

  // const rawTemp = {
  //   title: "oot",
  //   description: "oot handsome",
  //   authorID: "1234",
  //   rating: 4,
  //   image: ["oot.png","ice.png"]
  // } as IBlog

  // const temp:Array<IBlog> = [rawTemp]

  console.log(session);
  console.log(status);
  const updateBlogs = () => {
    console.log("oot");
    // dispatch(setBlog(temp))
  };

  const cetagories = [
    {
      name: "ชายหาดและทะเล",
      place: 15,
      pic: "/sea.png",
    },
    {
      name: "ช๊อปปิ้ง",
      place: 15,
      pic: "/shop.png",
    },
    {
      name: "ประวัติศาสตร์ วัฒนธรรมและศาสนา",
      place: 15,
      pic: "/history.png",
    },
    {
      name: "สวนสัตว์ สวนน้ำ และสวนสนุก",
      place: 15,
      pic: "/zoo.png",
    },
    {
      name: "พิพิธภัณฑ์และ การเรียนรู้ ธรรมชาติ",
      place: 15,
      pic: "/museum.png",
    },
  ];

  const popular = [
    {
      rating: 5,
      num: 5,
      type: "ooooo",
    },
  ];

  return (
    <main>
      {/* Header */}
      <div className="bg-base bg-cover rounded-3xl m-6 bg-no-repeat bg-center h-full">
        <div className=" text-white flex pt-40 justify-center items-center flex-col w-full ">
          <h1 className=" text-[48px]">Chonburi Thailand</h1>
          <p className=" text-center text-[18px] pt-6 font-thin text-sm">
            เมืองที่มีทั้งความสดใสของทะเลและภูเขา
            <br />
            พบกับทัศนียภาพที่งดงามของชายหาดที่สวยงามอย่างไม่ธรรมดา
            <br />
            รวมทั้งชมโบราณสถานที่ประวัติศาสตร์และวัฒนธรรมที่น่าสนใจ
          </p>
          <Search />
        </div>
      </div>
      {/* Preview */}
      <section className="flex mx-4 items-center h-[444px]">
        <div className=" flex-1">
          <img></img>
        </div>

        <div className="flex-1">
          <p className="text-xs text-[#276968]">Preview</p>
          <h1 className="text-3xl">Review your perfect trip</h1>
          <p className=" m-2 mx-12 text-xs opacity-70">
            ไม่ว่าคุณจะเลือกที่จะพักผ่อนบนชายหาดหรือสำรวจสถานที่ท่องเที่ยวที่น่าสนใจ
            ที่ชลบุรีจะทำให้คุณมีความทรงจำที่ยิ่งใหญ่และประทับใจที่สุด
            มาเยือนในช่วงเวลาใดก็ได้และร่วมสนุกกับความสนุกสุดพิเศษในชลบุรีร่วมกัน
            !
          </p>
          <div className="flex">
            <div className="flex-1">
              <div>
                <h1 className=" text-2xl font-semibold text-[#276968]">50+</h1>
                <p className="text-xs text-[#37454D]">สถานที่ท่องเที่ยว</p>
              </div>
              <div className=" pt-4">
                <h1 className=" text-2xl font-semibold text-[#276968]">90+</h1>
                <p className="text-xs text-[#37454D]">ผู้ใช้งาน</p>
              </div>
            </div>
            <div className=" flex-1">
              <div>
                <h1 className=" text-2xl font-semibold text-[#276968]">120+</h1>
                <p className="text-xs text-[#37454D]">รีวิว</p>
              </div>
              <div className="pt-4">
                <h1 className=" text-2xl font-semibold text-[#276968]">40+</h1>
                <p className="text-xs text-[#37454D]">ผู้เข้าชมเว็บไซต์</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cetagories */}
      <section className=" mx-4">
        <h1 className=" text-4xl mb-4">Cetagories</h1>
        <div className=" flex flex-row gap-y-5 flex-wrap border-2 justify-center">
          {cetagories.map((e) => (
            <Cetagories name={e.name} pic={e.pic} place={e.place} />
          ))}
        </div>
      </section>

      {/* Popular */}
      <section className=" my-10 mx-4">
        <p className="text-[#276968]">Top destination</p>
        <h1 className=" text-4xl mb-4">Popular</h1>
        <div className=" flex flex-row flex-wrap gap-3 justify-center bg-[#F3F3F3] rounded-3xl p-8">
          <Popular />
          <Popular />
          <Popular />
          <Popular />
        </div>
      </section>

      {/* Map */}
      <section>
        <img src="/map.png" className="w-screen h-full mt-7" />
      </section>

      {/* Testtimonial */}
      <section className=" bg-person w-screen text-white">
        <div className="ml-4 w-screen flex flex-col items-center">
          <p className=" text-sm mt-8">Testimonials</p>
          <h1 className=" text-3xl">About us</h1>
          <div className=" my-5 flex flex-row gap-4 text-[#FE940A]">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <p className=" w-2/3 text-center text-sm font-light">
            We are web application developers. For people with passion for
            travelling Chonburi, Thailand offers places of breathtaking natural
            beauty waiting for you to discover, from the span of towering
            mountains of the north to the tropical powdery-white sandy beaches
            of the south.
          </p>
        </div>
          <CarouselTest />
      </section>

      <footer className="text-white pd-4 bg-[#276968] w-screen m-0 flex flex-row justify-between flex-wrap p-4">
        <div>
          <img src="./Header.png" />
          <div className="flex flex-row justify-between">
            <div>Y</div>
            <div>X</div>
            <div>F</div>
            <div>I</div>
          </div>
        </div>
        <div className=" flex flex-col">
          <p className=" font-bold">Links</p>
          <Link href="#" className=" text-sm opacity-60 font-semibold">
            Stays
          </Link>
          <Link href="#" className=" text-sm opacity-60 font-semibold">
            Discover
          </Link>
          <Link href="#" className=" text-sm opacity-60 font-semibold">
            About us
          </Link>
          <Link href="#" className=" text-sm opacity-60 font-semibold">
            Contact
          </Link>
        </div>
        <div className=" flex flex-col">
          <p className=" font-bold">Our Activities</p>
          <Link href="#" className=" text-sm opacity-60 font-semibold">
            Ocean Trip
          </Link>
          <Link href="#" className=" text-sm opacity-60 font-semibold">
            Shopping
          </Link>
          <Link href="#" className=" text-sm opacity-60 font-semibold">
            Historical and Cultural
          </Link>
          <Link href="#" className=" text-sm opacity-60 font-semibold">
            Zoo, Water park and Amusement park
          </Link>
        </div>
        <div className="flex flex-col">
          <p className=" font-bold">About us</p>
          <Link href="#" className=" text-sm opacity-60 font-semibold">
            Our Story
          </Link>
          <Link href="#" className=" text-sm opacity-60 font-semibold">
            Work with us
          </Link>
        </div>
        <div className="flex flex-col">
          <p className=" font-bold">Contact</p>
          <Link href="#" className=" text-sm opacity-60 font-semibold">
            Address : Chonburi 1010101
          </Link>
          <Link href="#" className=" text-sm opacity-60 font-semibold">
            Phone : 099 999 9999
          </Link>
          <Link href="#" className=" text-sm opacity-60 font-semibold">
            Email : roadtripinchom@mail.com
          </Link>
          <Link href="#" className=" text-sm opacity-60 font-semibold">
            Phone : 099 999 9999
          </Link>
        </div>
      </footer>
    </main>
  );
}
