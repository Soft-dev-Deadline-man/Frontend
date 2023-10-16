import { useRouter } from "next/navigation";

export default function SigninButton() {
  const router = useRouter();
  return (
    <button
      className=" text-[#276968] px-3 py-1 text-xs bg-white rounded-md mr-5 hover:text-white hover:bg-[#276968] transition ease-in-out"
      onClick={() => router.push("/signin")}
    >
      Sign in
    </button>
  );
}
