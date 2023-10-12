"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import bg from "/src/app/assets/bg.png";
import pic1 from "/src/app/assets/pic1.png";
import pic2 from "/src/app/assets/pic2.png";
import pic3 from "/src/app/assets/pic3.png";
import pic4 from "/src/app/assets/pic4.png";
import pic5 from "/src/app/assets/pic5.png";
import pic6 from "/src/app/assets/pic6.png";
import Navbar from "@/components/Navbar";
import LocationBox from "@/components/LocationBox";
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

export default function NoLogin({ blogInfo }: { blogInfo: IBlog | null | any }) {

  const [firstImage, setFirstImage] = useState<any>(null)
  const { data: session, status } = useSession();
  const { push } = useRouter();
  const [blog, setBlog] = useState<IBlog | null | any>(null)

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND as string}blogs`).then((res) => {
      setBlog(res.data)
    })
  }, [])
  console.log(blog)
  return blog && (
    <>
      <Navbar />
      {blog.map((blog : any,key : any)=>{
        console.log(blog)
        return(
          <LocationBox blogInfo={blog} key={key}/>
        )
      })}
      
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

      <div className="">
        {/* nologin place 1 */}
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <div className="h-48 w-full object-cover md:h-full md:w-48">
                <Image
                  alt="img pic 1"
                  src={pic1}
                  width={448}
                  height={1400}
                  style={{
                    maxWidth: "120%",
                    height: "110%",
                  }}
                />
              </div>
            </div>
            <div className="p-5 mx-11">
              <div className="block mt-1 text-lg font-medium text-black">
                จุดชมวิวพัทยา
              </div>
              <div>
                <a href="#" className="uppercase tracking-wide text-black">
                  อำเภอบางละมุง ชลบุรี
                </a>
              </div>

              <div className="flex items-center mt-1 gap-2">
                <FaCalendarDay />
                <p className="mt-1 text-slate-500">เปิดบริการทุกวัน</p>
              </div>

              <div className="flex items-center mt-1 gap-2">
                <FaClock />
                <p className="mt-1 text-slate-500">เปิดบริการ 24 ชั่วโมง</p>
              </div>

              <div></div>

              <p className="mt-2 text-slate-500">ชายหาด และทะเล</p>


            </div>
          </div>
        </div>

        {/* nologin place 2 */}
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <div className="h-48 w-full object-cover md:h-full md:w-48">
                <Image
                  alt="img pic 2"
                  src={pic2}
                  width={448}
                  height={1400}
                  style={{
                    maxWidth: "120%",
                    height: "110%",
                  }}
                />
              </div>
            </div>
            <div className="p-5  mx-11">
              <div className="block mt-1 text-lg leading-tight font-medium text-black">
                วัดเขาชีจรรย์
              </div>
              <a href="#" className="uppercase tracking-wide text-black">
                นาจอมเทียน อำเภอสัตหีบ ชลบุรี
              </a>
              <div className="flex items-center mt-1 gap-2">
                <FaCalendarDay />
                <p className="mt-1 text-slate-500">เปิดบริการทุกวัน</p>
              </div>
              <p className="mt-2 text-slate-500">08.00 - 18.00 น.</p>
              <div></div>
              <p className="mt-2 text-slate-500">
                ประวัติศาสตร์ วัฒนธรรมและศาสนา
              </p>
            </div>
          </div>
        </div>

        {/* nologin place 3 */}
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <div className="h-48 w-full object-cover md:h-full md:w-48">
                <Image
                  alt="img pic 3"
                  src={pic3}
                  width={448}
                  height={1400}
                  style={{
                    maxWidth: "120%",
                    height: "110%",
                  }}
                />
              </div>
            </div>
            <div className="p-5 mx-11">
              <div className="block mt-1 text-lg leading-tight font-medium text-black">
                สวนนงนุชพัทยา
              </div>
              <a href="#" className="uppercase tracking-wide text-black">
                ตำบล นาจอมเทียน อำเภอสัตหีบ ชลบุรี
              </a>
              <div className="flex items-center mt-1 gap-2">
                <FaCalendarDay />
                <p className="mt-1 text-slate-500">เปิดบริการทุกวัน</p>
              </div>
              <p className="mt-2 text-slate-500">08.00 - 18.00 น.</p>
              <div></div>
              <p className="mt-2 text-slate-500">
                สวนสัตว์ สวนน้ำ และสวนสนุก
              </p>
            </div>
          </div>
        </div>

        {/* nologin place 4 */}
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <div className="h-48 w-full object-cover md:h-full md:w-48">
                <Image
                  alt="img pic 4"
                  src={pic4}
                  width={448}
                  height={1400}
                  style={{
                    maxWidth: "120%",
                    height: "110%",
                  }}
                />
              </div>
            </div>
            <div className="p-5 mx-11">
              <div className="block mt-1 text-lg leading-tight font-medium text-black">
                พิพิธภัณฑ์สัตว์น้ำ
              </div>
              <a href="#" className="uppercase tracking-wide text-black">
                ตำบล บางละมุง อำเภอศรีราชา ชลบุรี
              </a>
              <div className="flex items-center mt-1 gap-2">
                <FaCalendarDay />
                <p className="mt-1 text-slate-500">เปิดบริการทุกวัน</p>
              </div>
              <p className="mt-2 text-slate-500">10.30 - 18.00 น.</p>

              <p className="mt-2 text-slate-500">
                สวนสัตว์ สวนน้ำ และสวนสนุก
              </p>
            </div>
          </div>
        </div>

        {/* nologin place 5 */}
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <div className="h-48 w-full object-cover md:h-full md:w-48">
                <Image
                  alt="img pic 5"
                  src={pic5}
                  width={448}
                  height={1400}
                  style={{
                    maxWidth: "120%",
                    height: "110%",
                  }}
                />
              </div>
            </div>
            <div className="p-5 mx-11">
              <div className="block mt-1 text-lg leading-tight font-medium text-black">
                หาดเทียน เกาะล้าน{" "}
              </div>
              <a href="#" className="uppercase tracking-wide text-black">
                ตำบล บางพระ อำเภอศรีราชา ชลบุรี
              </a>
              <div className="flex items-center mt-1 gap-2">
                <FaCalendarDay />
                <p className="mt-1 text-slate-500">เปิดบริการทุกวัน</p>
              </div>
              <p className="mt-2 text-slate-500">เปิดบริการ 24 ชั่วโมง</p>

              <p className="mt-2 text-slate-500">ชายหาด และทะเล</p>
            </div>
          </div>
        </div>


        {/* nologin place 6 */}
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <div className="h-48 w-full object-cover md:h-full md:w-48">
                <Image
                  alt="img pic 6"
                  src={pic6}
                  width={448}
                  height={1400}
                  style={{
                    maxWidth: "120%",
                    height: "110%",
                  }}
                />
              </div>
            </div>
            <div className="p-5 mx-11">
              <div className="block mt-1 text-lg leading-tight font-medium text-black">
                หาดทรายขาว
              </div>
              <a href="#" className="uppercase tracking-wide text-black">
                ตำบล บางละมุง อำเภอเมือง ชลบุรี
              </a>
              <div className="flex items-center mt-1 gap-2">
                <FaCalendarDay />
                <p className="mt-1 text-slate-500">เปิดบริการทุกวัน</p>
              </div>
              <p className="mt-2 text-slate-500">09.30 - 17.00 น.</p>

              <p className="mt-2 text-slate-500">ชายหาด และทะเล</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
