"use client";
import React, { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession, signIn, signOut } from "next-auth/react";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";
import { useRouter } from "next/navigation";

export default function Bookmark({ blogID }: { blogID: string }) {
  const { data: session, status} = useSession();
  const { push } = useRouter();
  const [checkBookmark, setCheckBookMark] = useState(false);

  const temp = {
    user: {
      bookmark: ["1", "2"],
    },
  };

  const handleClick = () => {
    if (status === "authenticated") {
      //call API
      return setCheckBookMark(!checkBookmark);
    }
    push('/signin');
  };

  useEffect(() => {
    if (temp) {
      if (temp.user.bookmark.includes(blogID)) {
        return setCheckBookMark(true);
      }
      return setCheckBookMark(false);
    }
    return setCheckBookMark(false);
  }, []);

  const isBookmark = useMemo(() => {
    if (checkBookmark) {
      return (
        <div className="bg-[#276968] items-center text-white rounded-xl p-2 cursor-pointer">
          <FontAwesomeIcon icon={faBookmark} style={{color: "#ffffff"}}/> บันทึกแล้ว
        </div>
      );
    }
    return (
      <div className="bg-[#276968] items-center text-white rounded-xl p-2 cursor-pointer">
        <FontAwesomeIcon icon={farBookmark} style={{color: "#ffffff"}}/> บันทึก
      </div>
    );
  }, [checkBookmark]);

  console.log(checkBookmark)

  return <div onClick={handleClick}>{isBookmark}</div>;
}
