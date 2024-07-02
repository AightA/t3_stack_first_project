import { getServerAuthSession } from "~/server/auth";

export default async function HomePage() {
  const result = await getServerAuthSession();

  return result ? (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
        </h1>
        <div>New page of NextJS</div>
      </div>
    </main>
  ) : (
    <>
      <div>You need sign in to create a new</div>
      <button type="button">Sign up</button>
    </>
  );
}
