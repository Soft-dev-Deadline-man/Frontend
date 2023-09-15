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
    <div className="w-full min-h-screen flex justify-center items-center">
      <section className="w-2/4 mx-auto flex flex-col border-2 border-red-300 px-16">
        <div className="mx-auto">
          <h1 className="text-gray-800 text-4xl font-bold">Roadtrip in CHON</h1>
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
              <div className="my-5">
                <Field
                  name="email"
                  type="email"
                  className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none"
                  id="email"
                  placeholder="Email Address"
                />
                <ErrorMessage
                  component="div"
                  name="email"
                  className="text-red-600"
                />
              </div>

              <div className="my-5">
                <Field
                  name="password"
                  type="password"
                  className="w-full py-4 px-6 border rounded-xl bg-slate-50"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                className="w-full p-4"
                style={{ width: "100%" }}
              >
                Sign in
              </button>
            </Form>
          )}
        </Formik>
        <div className="">
          <button
            type="button"
            onClick={handleGoogleSignin}
            className="w-full border py-3 flex justify-center gap-2"
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
        <p className="text-center text-gray-400">
          don't have an account yet? <Link href={"/register"}>Sign Up</Link>
        </p>
      </section>
    </div>
  );
}