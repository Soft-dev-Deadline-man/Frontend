"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { signIn, signOut,getSession } from "next-auth/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("This field is required."),
  password: Yup.string(),
});

export default function Login() {
  const [show, setShow] = useState(false);
  const router = useRouter();

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

  // Google Handler function
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }

  return (
    <div className="flex w-full min-h-screen bg-[url('https://cdn.pic.in.th/file/picinth/image-77.png')] bg-cover bg-center bg-no-repeat">
      <div className="static ml-auto flex items-center">
        <img src="https://cdn.pic.in.th/file/picinth/Group-2608839.png" alt="logo" className = "ml-20 items-left" />
      </div>
      <div className="w-full flex justify-end items-center">
        <section className="me-20 bg-white  w-1/2 h-5/6 flex rounded-[32px] flex-col px-16">
          <div className="mt-14">
            <h1 className=" text-gray-800 text-4xl font-bold">Login</h1>
            <p className="mt-3 text-gray-400">
              Login to access your account
            </p>
          </div>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="py-5" onSubmit={handleSubmit}>
                <div className="my-5 flex flex-col relative">
                  <label
                    className="absolute left-3 text-black duration-300 -translate-y-2 bg-white text-xs font-bold"
                  >
                    &nbsp;&nbsp;Email&nbsp;&nbsp;
                  </label>
                  <Field
                    name="email"
                    type="email"
                    className="w-full py-4 px-6 border rounded-xl"//focus:outline-none
                    id="email"
                    placeholder="hello_world@gmail.com"
                  />
                  <ErrorMessage
                    component="div"
                    name="email"
                    className="font-bold text-[#FF6F6B] text-xs pl-5"
                  />
                </div>

                <div className="my-5 relative">
                  <label
                    className="absolute left-3 text-black duration-300 -translate-y-2 bg-white text-xs font-bold"
                  >
                    &nbsp;&nbsp;Password&nbsp;&nbsp;
                  </label>
                  <Field
                    name="password"
                    type="password"
                    className="w-full py-4 px-6 border rounded-xl focus:outline-none"//
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full p-4 bg-[#276968] text-slate-50 rounded-lg"
                  style={{ width: "100%" }}
                >
                  Sign in
                </button>
              </Form>
            )}
          </Formik>
          <p className="font-bold text-xs text-center text-gray-400 ">
            Don't have an account yet? <Link href={"/register"} className="font-bold text-xs text-[#FF6F6B]" >Sign Up</Link>
          </p>
          <div className="relative text-center mb-5">
            <div className="relative text-center z-50">
              <p className="inline-block text-sm text-gray-400 translate-y-3 bg-white">&nbsp;&nbsp;&nbsp;Or login with&nbsp;&nbsp;&nbsp;</p>
            </div>  
            <div className="absolute inset-x-0 border-b border-gray-300 z-10"></div>
          </div>
          <div className="">
            <button
              type="button"
              onClick={handleGoogleSignin}
              className="w-full border py-3 flex justify-center gap-2 rounded-lg"
            >
              Sign In with Google{" "}
              <Image
                alt=""
                src={
                  "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                }
                width="20"
                height={20}
              ></Image>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}