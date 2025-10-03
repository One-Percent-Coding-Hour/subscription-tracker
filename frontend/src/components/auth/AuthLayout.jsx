import React from "react";
import sky from "../../assets/03-Sky.png";
import logo from "../../assets/Logo.png";

const AuthLayout = ({children}) => {
  return (
    <div className="h-dvh w-dvw overflow-hidden">
      <div className="flex items-center justify-between h-full">
        <div className="flex-1 m-auto flex flex-column items-center justify-center h-full">
          <div className="flex flex-col gap-3 w-2/3">
            <div className="flex items-center gap-4 mb-5">
              <img src={logo} alt="" className="w-7" />
              <p className="font-bold">Tracker</p>
            </div>

            <div className="mb-5">
              <p className="text-3xl font-bold">Welcome to Tracker</p>
              <p className="text-gray-600">
                Manage your subscriptions with ease{" "}
              </p>
            </div>

            {children}
          </div>
        </div>
        <div className="flex-1 h-full">
          <img
            src={sky}
            alt=""
            className="w-full rounded-tl-[100px] rounded-bl-[100px] h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
