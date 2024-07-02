import { getServerAuthSession } from "~/server/auth";
import { SignInButton } from "../clientComponents/SignInButton";
import { SignOutButton } from "../clientComponents/SignOutButton";

export default async function HomePage() {
  const session = await getServerAuthSession();

  return session ? (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
        </h1>
        <div>New page of NextJS</div>
        <SignOutButton />
      </div>
    </main>
  ) : (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="font-serif">You know what to do</div>
        <SignInButton />
      </main>
    </>
  );
}
