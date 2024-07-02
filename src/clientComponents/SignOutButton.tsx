"use client";
import { signOut } from "next-auth/react";

export const SignOutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className="my-2 rounded border-b-4 border-blue-700 bg-blue-500 px-4 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
    >
      Sign out
    </button>
  );
};
