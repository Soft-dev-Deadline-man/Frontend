import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import CommentUser from "./CommentUser";
import Link from "next/link";

interface PopularProps {
  rating: number;
  numOfReview: number;
  type: string;
}

export default function Popular() {
  return (
    <Link href="#" className="hover:scale-105 transition ease-in-out">
      <div className=" w-60 h-64 rounded-3xl shadow-lg">
        <img src="/museum.png" className=" object-cover object-center w-full" />
        <div className=" bg-slate-400 relative">
          <div className=" absolute -top-6 w-full px-5 bg-white rounded-b-3xl">
            <h1 className=" font-semibold pt-2">ชายหาดบางเสร่</h1>
            <div className="flex flex-row justify-between">
              <div className=" flex flex-row items-center gap-x-2">
                <div className="flex flex-row items-center bg-[#FF6F6B] p-0.5 text-xs gap-x-1 rounded-md text-white px-2">
                  <h1 className=" font-semibold pr-0.5">10</h1>
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <p className=" opacity-30 text-xs">10+ รีวิว</p>
              </div>
              <CommentUser pic="kuy" />
            </div>
            <div>
              <p className=" text-xs opacity-30 pb-3">ชายหาด และทะเล</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
