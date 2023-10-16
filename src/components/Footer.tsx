import Link from "next/link";
import { BsFacebook } from "react-icons/Bs";
import { AiOutlineTwitter } from "react-icons/Ai";
import { AiFillYoutube } from "react-icons/Ai";
import { AiFillInstagram } from "react-icons/Ai";

export default function Footer() {
  return (
    <footer className="text-white pd-4 bg-[#276968] w-screen m-0 flex flex-row justify-between flex-wrap p-4">
      <div>
        <img src="./Header.png" />
        <div className="flex flex-row justify-between">
          <BsFacebook />         
          <AiOutlineTwitter />
          <AiFillYoutube />
          <AiFillInstagram />
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
  );
}