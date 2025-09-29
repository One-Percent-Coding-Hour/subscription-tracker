import { Github, IceCream } from "lucide-react";
import React from "react";

import AuthLayout from "../../components/auth/authLayout";
import google from "../../assets/google.svg";
import apple from "../../assets/apple.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";

const Login = () => {
  return (
    <AuthLayout>
      <div>
        <form action="" className="gap-5 flex flex-col">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              Email Address
            </label>
            <input
              type="email"
              placeholder="youremailaddress@email.com"
              className="border p-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              placeholder="**********"
              className="border p-2 rounded-lg"
            />
          </div>

          <button className="bg-[#6938EF] py-3 rounded-xl text-white font-bold">
            Login
          </button>

          <p className="text-center">
            Don't have an account?{" "}
            <span className="text-[#6938EF] font-bold underline cursor-pointer">
              Sign Up
            </span>
          </p>
        </form>
      </div>

      <div className="flex items-center gap-10">
        <hr className="w-full text-gray-400" />
        <p>Or</p>
        <hr className="w-full text-gray-400" />
      </div>

      <div className="flex justify-between w-1/2 m-auto">
        <img src={google} alt="" className="w-5" />
        <img src={apple} alt="" className="w-5" />
        <img src={facebook} alt="" className="w-5" />
        <img src={twitter} alt="" className="w-5" />
      </div>
    </AuthLayout>
  );
};

export default Login;
