import React from "react";
import people from "../../assets/Image.png";
import logo from "../../assets/Logo.png";
import google from "../../assets/google.svg";
import apple from "../../assets/apple.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="h-dvh w-dvw overflow-hidden">
      <div
        className="flex items-center justify-between h-full flex-row-reverse bg-no-repeat "
        style={{ backgroundImage: `url(${people})` }}
      >
        <div className="flex-1 m-auto flex flex-column items-center justify-center bg-white h-full rounded-tl-[100px] rounded-bl-[100px]">
          <div className="flex flex-col gap-3 w-2/3">
            <div className="flex items-center justify-center gap-4 mb-5">
              <img src={logo} alt="" className="w-7" />
              <p className="font-bold">Tracker</p>
            </div>

            <div className="mb-5 align-self-center text-center">
              <p className="text-3xl font-bold">Create an Account</p>
              <p className="text-gray-600">
                Kindly fill in your details below to create an account{" "}
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 border border-gray-400 rounded-xl py-4 cursor-pointer">
              <p>Create an Account with Google</p>
              <img src={google} alt="" className="w-5" />
            </div>

            <div className="flex items-center gap-10">
              <hr className="w-full text-gray-400" />
              <p>Or</p>
              <hr className="w-full text-gray-400" />
            </div>

            <div>
              <form action="" className="gap-3 flex flex-col">
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="font-semibold text-gray-600">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Full Name"
                    className="border px-4 py-4 rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="font-semibold text-gray-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="border px-4 py-4 rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="font-semibold text-gray-600">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Create a Password"
                    className="border px-4 py-4 rounded-lg"
                  />
                </div>

                <button className="bg-[#6938EF] py-3 rounded-xl text-white font-bold mt-4">
                  Create an Account
                </button>

                <p className="text-center">
                  Already have an account?{" "}
                  <Link to="/">
                    <span className="text-[#6938EF] font-bold underline cursor-pointer">
                      Sign In
                    </span>
                  </Link>
                </p>
              </form>
            </div>

            <div className="flex justify-between w-1/2 m-auto cursor-pointer mt-4">
              <img src={google} alt="" className="w-7" />
              <img src={apple} alt="" className="w-7" />
              <img src={facebook} alt="" className="w-7" />
              <img src={twitter} alt="" className="w-7" />
            </div>
          </div>
        </div>
        <div className="flex-1 h-dvh">
          {/* <img src={people} alt="" className="w-full object-cover h-full" /> */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
