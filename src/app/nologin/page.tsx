"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import bg from "/src/app/assets/bg.png";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { signIn, signOut, getSession } from "next-auth/react";

export default function NoLogin() {


  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const status = await signIn("credentials", {
      redirect: false,
      email: data.get("email"),
      password: data.get("password"),
      callbackUrl: "/",
    });
  }
  return (

    <>
      <Navbar />
      <div>
        <Image
          alt="img"
          src={bg}
          width={1812}
          height={426}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
        {/* <img
          src="https://s3-alpha-sig.figma.com/img/7f08/dd87/d50c3f4b536f8d68cede11522fe6e352?Expires=1697414400&Signature=SkAQ9A~~LcfPzcLinf0OorPW2Eed0YJqAOYvVtzZ8s9q~xF~Bq2zNPCxbjSog~FvoIXXaxP-OaNfoCH~gXYNR7UxJXwWBVhBrTc0Nv-kRUNgE5LKNuZVK0ZRqQhbL~5bqtclOVb0s4I8MW0fjfw4vHKszGAanX3oniAXN-c~0q41mxZQaDGfKyavsb-3dZl87LBxW9JwkbSK7c2E3tF7ai4yw0~VVAmLE0iEmUm7FqGw9GeFUw-1WO84GthnSPgQ1YRzqUb344fozz77ONd9jdvjP2dqJhh14EF1lcpLRioNPwCsaGqdABy5WFYfEF5e85H7OnTStkDkqY0XYepgKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          sizes="100vw"
          width={1600}
          height={200}
        /> */}
      </div>
      <div>

      </div>

    </>




  );
}