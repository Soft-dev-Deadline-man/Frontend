"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { IBlog } from "@/types/Blog";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { setBlog } from "../store/slice/blogSlice";
import { useEffect } from "react";

export default function Home() {
  const { data: session ,status} = useSession();
  const router = useRouter();
  const allBlogs = useAppSelector(state=>state.blog.allBlogs)
  const dispatch = useAppDispatch()

  const rawTemp ={
    title: "oot",
    description: "oot handsome",
    authorID: "1234",
    rating: 4,
    image: ["oot.png","ice.png"]
  } as IBlog

  const temp:Array<IBlog> = [rawTemp] 

  console.log(session)
  console.log(status)
  const updateBlogs = ()=>{
    console.log("oot")
    dispatch(setBlog(temp))
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(allBlogs)}
      <button onClick={updateBlogs}>update blog</button>
    </main>
  );
}