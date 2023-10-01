"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { signIn, signOut,getSession } from "next-auth/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

const signupSchema = Yup.object().shape({
    name: Yup.string()
        .required("This field is required."),
    email: Yup.string()
        .email("Invalid email")
        .required("This field is required."),
    password: Yup.string()
        .min(6, 'รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษร')
        .required('กรุณากรอกรหัสผ่าน'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'),""], 'รหัสผ่านไม่ตรงกัน')
        .required('กรุณายืนยันรหัสผ่าน'),
});

export default function Register() {
  const [show, setShow] = useState(false);
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const status = await signIn("credentials", {
        redirect: false,
        name: data.get("name"),
        email: data.get("email"),
        password: data.get("password"),
        callbackUrl: "/",
      });
  }

  return (
    <div className="flex w-full min-h-screen bg-[url('https://cdn.pic.in.th/file/picinth/image-77.png')] bg-cover bg-center bg-no-repeat">
      <div className="static ml-auto flex items-center">
        <img src="https://cdn.pic.in.th/file/picinth/Group-2608839.png" alt="logo" className = "ml-20 items-left" />
      </div>
      <div className="w-full flex justify-end items-center">
        <section className="me-20 bg-white  w-1/2 h-5/6 flex rounded-[32px] flex-col px-16">
          <div className="mt-14">
            <h1 className=" text-gray-800 text-4xl font-bold">Sign up</h1>
            <p className="mt-3 text-gray-400">
              Sign up new account
            </p>
          </div>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={signupSchema}
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
                    &nbsp;&nbsp;Name&nbsp;&nbsp;
                  </label>
                  <Field
                    name="name"
                    type="string"
                    className="w-full py-4 px-6 border rounded-xl"//focus:outline-none
                    id="name"
                    placeholder="Lnwza007"
                  />
                  <ErrorMessage
                    component="div"
                    name="name"
                    className="font-bold text-[#FF6F6B] text-xs pl-5"
                  />
                </div>

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
                  <ErrorMessage
                    component="div"
                    name="password"
                    className="font-bold text-[#FF6F6B] text-xs pl-5"
                  />
                </div>

                <div className="my-5 relative">
                  <label
                    className="absolute left-3 text-black duration-300 -translate-y-2 bg-white text-xs font-bold"
                  >
                    &nbsp;&nbsp;Confirm Password&nbsp;&nbsp;
                  </label>
                  <Field
                    name="confirmPassword"
                    type="password"
                    className="w-full py-4 px-6 border rounded-xl focus:outline-none"//
                    id="confirmPassword"
                    placeholder="confirm password"
                  />
                  <ErrorMessage
                    component="div"
                    name="confirmPassword"
                    className="font-bold text-[#FF6F6B] text-xs pl-5"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full p-4 bg-[#276968] text-slate-50 rounded-lg"
                  style={{ width: "100%" }}
                >
                  Sign up
                </button>
              </Form>
            )}
          </Formik>
          <p className="font-bold text-xs text-center text-gray-400 ">
            Do have an account yet? <Link href={"/signin"} className="font-bold text-xs text-[#FF6F6B]" >signin</Link>
          </p>
        </section>
      </div>
    </div>
  );
}