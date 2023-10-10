"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { use, useEffect, useState, useRef } from "react";
import LocationBox from "../../components/LocationBox";
import Rating from "../../components/Rating";
import { IBlog } from "../../types/Blog";
import Image from "next/image";

interface IUserComment {
  rating: number;
  title: string;
  description: string;
  recommendActivity: string;
  spendTime: string;
}

export default function CommentPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const addImage = useRef<HTMLInputElement>(null);
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [uploadImages, setUploadImages] = useState<File[]>([]);
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

  const blogTemp: IBlog = {
    title: "เกาะขาม",
    catagory: "ชายหาด และทะเล",
    entrancePrice: {
      child: 50,
      adult: 100,
    },
    address: "เกาะขาม  235 ม.7 ต.บางพระ อ.ศรีราชา จ.ชลบุรี 20110",
    rating: "4.5",
    separateRating: {
      rate5: 5,
      rate4: 3,
      rate3: 0,
      rate2: 1,
      rate1: 1,
    },
    reviews: [
      { id: "id001" },
      { id: "id002" },
      { id: "id003" },
      { id: "id004" },
      { id: "id005" },
      { id: "id006" },
      { id: "id007" },
      { id: "id008" },
      { id: "id009" },
      { id: "id010" },
    ],
    latitude: "12.573091",
    longtitude: "100.9304664",
    forbidden: {
      animal: "ห้ามนำสัตว์เลี้ยงทุกชนิดเข้า",
    },
    contact: {
      tel: "038-318444 หรือ 0-3831-8444",
      facebook: "เกาะขาม - Koh Kham",
      ig: null,
    },
    image: ["https://api.slingacademy.com/public/sample-photos/1.jpeg"],
  };

  useEffect(() => {
    setBlog(blogTemp);
  }, []);

  const inputValue =
    (name: string) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (event?.target != null) {
        setComment({ ...comment, [name]: event.target.value });
        setCount({ ...count, [name]: event.target.value.length });
      }
    };

  const setVote = (vote: number) => {
    setComment({ ...comment, rating: vote });
  };

  const handleUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target?.files != null) {
      setUploadImages([...uploadImages, event.target.files[0]]);
    }
  };

  const handleUploadImageClick = () => {
    if (addImage.current !== null) {
      addImage.current.click();
    }
  };

  //   const handleDeleteImage = (index : number)=>{
  //     setUploadImages((prevState: File[]) => ({
  //         data : prevState.filter((_, i) => i !== index)
  //       }))
  //   }

  return (
    <div className="pt-16 max-w-screen-xl w-full mx-auto font-karnit">
      <div className="w-full mx">
        <LocationBox blogInfo={blog} />
      </div>
      <div className="flex flex-col items-center justify-center my-6">
        <h1>ให้คะแนนสถานที่</h1>
        <Rating
          rating={comment.rating}
          vote={true}
          setVote={setVote}
          size="text-2xl"
          mx="mx-4"
        />
      </div>
      <div className="my-2 bg-[#F8F8F8] px-6 py-2 rounded-xl">
        <div className="my-5">
          <div className="my-2">
            <h1>เขียนรีวิว</h1>
          </div>
          <div className="border-b-2 border-[#D9D9D9] w-full my-2"></div>
        </div>
        <div className="my-5">
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
        <div className="my-5">
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
        <div className="my-5">
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
        <div className="my-5">
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
      </div>
      <div className="my-5 bg-[#F8F8F8] px-6 py-2 rounded-xl">
        <div className="mb-5">
          <div className="my-2">
            <h1>เพิ่มรูปรูปภาพ</h1>
          </div>
          <div className="border-b-2 border-[#D9D9D9] w-full my-2"></div>
        </div>
        <div className="w-full flex flex-wrap">
          {uploadImages.length
            ? uploadImages.map((img, index) => {
                return (
                  <div
                    key={index}
                    className="w-[50%] md:w-[25%] lg:w-[20%] h-36 md:h-48 lg:h-64 p-2"
                  >
                    <div className="relative w-full h-full">
                      <div className=" absolute top-3 right-3 w-8 h-8 rounded-[50%] bg-red-400 z-50 flex justify-center items-center text-white cursor-pointer">
                        X
                      </div>
                      <Image
                        src={URL.createObjectURL(img)}
                        alt=""
                        sizes="100vw"
                        fill
                        className="rounded-xl"
                      ></Image>
                    </div>
                  </div>
                );
              })
            : ""}
          <div className="w-[50%] md:w-[25%] lg:w-[20%] h-36 md:h-48 lg:h-64 p-2">
            <div
              className="flex items-center flex-col justify-center w-full h-full bg-[#E1DFDF] rounded-xl cursor-pointer"
              onClick={handleUploadImageClick}
            >
              <h1>+</h1>
              <h1>เพิ่มรูปรูปภาพ</h1>
            </div>
            <input
              type="file"
              onChange={handleUploadImage}
              className="hidden"
              ref={addImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
