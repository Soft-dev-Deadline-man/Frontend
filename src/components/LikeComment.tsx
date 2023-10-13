"use client";
import React, { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "next-auth/react";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as farThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { useRouter } from "next/navigation";

export default function LikeComment({ reviewId,score }: { reviewId: string,score : number }) {
  const { data: session, status} = useSession();
  const { push } = useRouter();
  const [checkUseful, setCheckUseful] = useState(false);
  const [isLike,setIsLike] = useState(false)
  const [countScore,setCountScore] =useState<number>(0)

  const temp = {
    user: {
      likeRevgiew: ["1", "2"],
    },
  };

  const handleClick = () => {
    if (status === "authenticated") {
      //call API
      if(isLike === checkUseful && checkUseful === true){
        setCountScore(countScore-1)
      }else if(isLike !== checkUseful && checkUseful === false){
        setCountScore(countScore+1)
      }
      return setCheckUseful(!checkUseful);
    }
    push('/signin');
  };

  useEffect(() => {
    setCountScore(score)
    if (temp) {
      if (temp.user.likeRevgiew.includes(reviewId)) {
        setIsLike(true)
        return setCheckUseful(true);
      }
      setIsLike(false)
      return setCheckUseful(false);
    }
    setIsLike(false)
    return setCheckUseful(false);
  }, []);

  const isBookmark = useMemo(() => {
    if (checkUseful) {
      return (
        <div className="items-center p-2 cursor-pointer flex">
          <FontAwesomeIcon icon={faThumbsUp} style={{color: "#e81a54"}}/>
          <p className="text-[#e81a54] mx-2">มีประโยชน์ {`(${countScore})`}</p>
        </div>
      );
    }
    return (
      <div className="items-center rounded-xl p-2 cursor-pointer flex">
        <FontAwesomeIcon icon={farThumbsUp} style={{color: "#000000"}}/>
        <p className="mx-2">มีประโยชน์ {`(${countScore})`}</p>
      </div>
    );
  }, [checkUseful]);

  console.log(checkUseful)

  return <div onClick={handleClick}>{isBookmark}</div>;
}
