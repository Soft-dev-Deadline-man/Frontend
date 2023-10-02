"use client";
import React, { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession, signIn, signOut } from "next-auth/react";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";
import { useRouter } from "next/navigation";
import { ICommentInfo } from "@/types/Comment";
import Image from "next/image";
import Rating from "./Rating";
import AllImageModal from "./AllImageModal";

export default function CommentBox({
  commentInfo,
}: {
  commentInfo: ICommentInfo;
}) {
  const { data: session, status } = useSession();
  const { push } = useRouter();
  const [showImage, setShowImage] = useState(false);

  const handleShowImage = () => {
    setShowImage(true);
  };

  useEffect(() => {
    if (showImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showImage]);
  //get location by ID

  const showImg = useMemo(() => {
    if (commentInfo.images.length > 4) {
      const temp = commentInfo.images.slice(0, 4);
      return temp.map((img, key) => {
        return (
          <div className="col-span-1 relative min-w-[16rem]" key={key}>
            {key == 3 ? (
              <div
                className="absolute z-30 bg-black/[0.25] w-full h-full flex justify-center items-center text-white"
                onClick={() => handleShowImage()}
              >
                {commentInfo.images.length - 4}+
              </div>
            ) : (
              ""
            )}
            <Image alt="" src={img} fill sizes="100vw"></Image>
          </div>
        );
      });
    } else {
      return commentInfo.images.map((img, key) => {
        return (
          <div className="col-span-1 relative min-w-[16rem]" key={key}>
            <Image alt="" src={img} fill sizes="100vw"></Image>
          </div>
        );
      });
    }
  }, []);

  return (
  <>
  <div className="w-full my-2 bg-[#F8F8F8] p-4 font-karnit rounded-xl">
      <div className="flex items-center mb-2">
        <Image
          alt=""
          src={`${commentInfo.author.img}`}
          width={50}
          height={50}
          className="rounded-[50%] mr-2"
        ></Image>
        <h1>{commentInfo.author.name}</h1>
      </div>
      <div className="flex items-center my-2">
        <Rating
          setVote={null}
          rating={commentInfo.rating}
          vote={false}
          size="text-xl"
          mx="mx-1"
        />
      </div>
      <div className="my-2">
        <h1>{commentInfo.title}</h1>
      </div>
      <div className="my-2">
        <p>{commentInfo.description}</p>
      </div>
      <div className="my-2">
        <h5>กิจกรรมแนะนำ : {commentInfo.recommendActivity}</h5>
      </div>
      <div className="my-2">
        <h5>ระยะเวลาที่ใช้กับสถาานที่นี้ : {commentInfo.spendTime}</h5>
      </div>
      <div className="w-full h-48 grid grid-cols-4 gap-1 min-w-min overflow-x-scroll">{showImg}</div>
    </div>
    {showImage ? <AllImageModal photos={commentInfo.images} setShow={setShowImage}/> : ""}
  </>
    
  );
}
