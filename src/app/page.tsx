"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { IBlog } from "@/types/Blog";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { setBlog } from "../store/slice/blogSlice";
import { useEffect, useState } from "react";
import LocationBox from "@/components/LocationBox";
import axios from "axios";
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();
  const [fetchBlogs,setFetchBlogs] = useState<any>(null);
  const router = useRouter();
  const allBlogs = useAppSelector((state) => state.blog.allBlogs);
  const dispatch = useAppDispatch();

  console.log(session);
  console.log(status);
  const updateBlogs = () => {
    console.log("oot");
    // dispatch(setBlog(temp));
  };

  const fetchData = async()=>{
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND}/blogs`)
    setFetchBlogs(res.data)
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <div className="sm:w-[80%] w-full">
      {fetchBlogs ? fetchBlogs.map((blog : any,key : any,)=>{
        return(
          <div key={key} className="my-2">
              <Link href={`/location/${blog._id}`}><LocationBox blogInfo={blog} key={key}/></Link>
          </div>
        )
      }):""}
      </div>
      <button onClick={updateBlogs}>update blog</button>
      <button onClick={() => router.push("/signin")}>go to sign in</button>
    </main>
  );
}
