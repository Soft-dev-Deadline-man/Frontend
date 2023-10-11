import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NavbarProps {
  LogoUrl: string;
  ProfileUrl: string;
}

const Navbar: React.FC<NavbarProps> = ({ LogoUrl, ProfileUrl }) => {
  const router = useRouter();

  return (
    <>
        <nav className="fixed flex w-full h-24 items-center bg-white z-20 justify-between">
            <img className='h-12 w-auto ms-[4%]' src={LogoUrl} alt="Logo"/>
            <div className='flex items-center space-x-6 me-[4%]'>
                <div className="flex flex-row items-center justify-center h-14 w-28 rounded-full bg-white hover:bg-[#276968] text-[#276968] hover:text-white">
                    <Link href="/">Home</Link>
                </div>
                <div className="flex flex-row items-center justify-center h-14 w-28 rounded-full bg-white hover:bg-[#276968] text-[#276968] hover:text-white">
                    <Link href="/location">Locations</Link>
                </div>
                <button className="flex flex-row items-center justify-center h-14 w-28 rounded-full bg-white hover:bg-[#276968] text-[#276968] hover:text-white">Bookmark</button>
                <div className="flex flex-row">
                    <a className="my-auto text-gray-300 me-2">{" | "}</a>
                    <div className="flex flex-row rounded-full h-14 w-32 bg-white hover:bg-[#276968] text-[#276968] hover:text-white">
                        <button className="flex flex-row items-center" onClick={() => router.push('/account')}>
                            <div className="rounded-full h-10 w-10 me-2 ms-2">
                                <img src={ProfileUrl} alt="Profile" />
                            </div>
                            <a className="my-auto me-8">Tommy</a>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </>
  );
};

export default Navbar;
//className="fixed flex w-full h-24 bg-white p-3 z-40"