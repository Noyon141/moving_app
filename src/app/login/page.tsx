"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const Router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const onLogin = async () => {};
  return (
    <div className="flex flex-col text-nowrap items-center justify-center font-semibold w-full max-w-2xl md:max-w-6xl mx-auto gap-2 p-24">
      <label htmlFor="email" className="text-2xl">
        Email
      </label>
      <input
        type="text"
        name="email"
        id="email"
        placeholder="email"
        className="p-2 my-2 md:w-[40%] outline-none border-2 border-gray-300 rounded-md focus:border-none focus:ring-1 focus:ring-gray-500"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <label htmlFor="password" className="text-2xl">
        Password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        className="p-2 my-2 md:w-[40%] outline-none border-2 border-gray-300 rounded-md focus:border-none focus:ring-1 focus:ring-gray-500"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button
        onClick={onLogin}
        className="p-2 my-2 md:w-[40%] bg-gray-500 hover:bg-gray-600 text-white rounded-md"
      >
        Login
      </button>
      <Link
        href={"/signup"}
        className="p-2 my-2 md:w-[40%] bg-zinc-900 hover:bg-zinc-800 text-center text-white rounded-md"
      >
        Go to signup page
      </Link>
    </div>
  );
};

export default LoginPage;
