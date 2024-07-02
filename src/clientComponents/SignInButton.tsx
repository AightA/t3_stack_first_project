"use client";
import { signIn } from "next-auth/react";

// type SignInButtonProps = {
//   btnName: string;
// };
// ({ btnName }: SignInButtonProps)

export const SignInButton = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="my-2 rounded border-b-4 border-blue-700 bg-blue-500 px-4 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
    >
      Sign In
    </button>
  );
};
