import Link from "next/link";

const Home = () => {
  return (
    <main className="flex flex-col justify-center items-center gap-5 w-full max-w-2xl md:max-w-6xl mx-auto p-24">
      <h1>Home</h1>
      <div className="flex flex-col gap-4 items-center">
        <Link href={"/signup"}>go to signup</Link>
        <Link href={"/login"}>go to login</Link>
      </div>
    </main>
  );
};

export default Home;
