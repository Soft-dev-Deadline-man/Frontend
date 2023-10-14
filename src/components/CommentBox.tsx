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
import LikeComment from "./LikeComment";

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

  const showImg = useMemo(() => {
    if (commentInfo.images.length > 4) {
      const temp = commentInfo.images.slice(0, 5);
      return temp.map((img, key) => {
        return (
          <div className="relative min-w-fit" key={key}>
            {key == 4 ? (
              <div
                className="absolute z-30 bg-black/[0.25] w-full h-full flex justify-center items-center text-white rounded-lg"
                onClick={() => handleShowImage()}
              >
                {commentInfo.images.length - 4}+
              </div>
            ) : (
              ""
            )}
            <Image alt="" src={img} width={0} height={0} sizes="100vw" className="rounded-lg lg:w-56 lg:h-56 md:w-44 md:h-44 w-36 h-36"></Image>
          </div>
        );
      });
    } else if (
      commentInfo.images.length > 0 &&
      commentInfo.images.length <= 5
    ) {
      return commentInfo.images.map((img, key) => {
        return (
          <div
            className="relative min-w-fit"
            key={key}
          >
            <Image alt="" src={img} width={0} height={0} sizes="100vw" className="rounded-lg lg:w-56 lg:h-56 md:w-44 md:h-44 w-36 h-36"></Image>
          </div>
        );
      });
    } else {
      return null;
    }
  }, []);

  return (
    <>
      <div className="w-full my-2 mb-5 bg-[#F8F8F8] p-4 font-karnit rounded-xl">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center mb-2">
            <Image
              alt=""
              src={`${commentInfo.author.profile}`}
              width={0}
              height={0}
              sizes="100vw"
              className="rounded-[50%] mr-2 sm:w-[50px] sm:h-[50px] w-[30px] h-[30px]"
            ></Image>
            <h1 className="sm:text-base text-xs">{commentInfo.author.name}</h1>
          </div>
          <LikeComment reviewId={commentInfo.id} score={commentInfo.score}/>
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
        <div className="my-2 sm:text-xl text-base">
          <h1>{commentInfo.title}</h1>
        </div>
        <div className="my-2 text-[#8A8A8A] sm:text-base text-xs">
          <p>{commentInfo.description}</p>
        </div>
        <div className="my-2 text-[#8A8A8A] sm:text-base text-xs">
          <h5>กิจกรรมแนะนำ : {commentInfo.recommendActivity}</h5>
        </div>
        <div className="my-2 text-[#8A8A8A] sm:text-base text-xs">
          <h5>ระยะเวลาที่ใช้กับสถาานที่นี้ : {commentInfo.spendTime}</h5>
        </div>
        <div className="w-full md:gap-5 gap-1 flex overflow-x-scroll">
          {showImg}
        </div>
      </div>
      {showImage ? (
        <AllImageModal photos={commentInfo.images} setShow={setShowImage} />
      ) : (
        ""
      )}
    </>
  );
}
