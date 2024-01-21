"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignupPage = () => {
  const Router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });
  const onSignup = async () => {
    try {
      const request = await axios.post("/api/users/signup", user);
      console.log("SIGNUP SUCCESSFUL", request.data);
      Router.push("/login");
    } catch (error: any) {
      console.log("ERROR WHILE SIGNING UP", error.message);
    }
  };
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
      <label htmlFor="confirmpassword" className="text-2xl">
        Confirm Password
      </label>
      <input
        type="password"
        name="confirmpassword"
        id="confirmpassword"
        placeholder="confirm password"
        className="p-2 my-2 md:w-[40%] outline-none border-2 border-gray-300 rounded-md focus:border-none focus:ring-1 focus:ring-gray-500"
        value={user.confirmPassword}
        onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
      />
      <label htmlFor="username" className="text-2xl">
        Username
      </label>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="username"
        className="p-2 my-2 md:w-[40%] outline-none border-2 border-gray-300 rounded-md focus:border-none focus:ring-1 focus:ring-gray-500"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <button
        onClick={onSignup}
        className="p-2 my-2 md:w-[40%] bg-gray-500 hover:bg-gray-600 text-white rounded-md"
      >
        Signup
      </button>
    </div>
  );
};

export default SignupPage;
