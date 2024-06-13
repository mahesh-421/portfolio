import React from "react";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Error = () => {
  // const err = useRouteError();
  const navigate = useNavigate();
  return (
    <div>
      <div className="px-5 bg-gradient-to-t from-white to-purple-100 w-full h-24 flex justify-between items-center fixed ">
        <div className="mx-10 ">
          <img src={Logo} alt="Logo" className="w-16" />
        </div>
      </div>
      <div className="h-[100vh] w-full flex items-center justify-center bg-purple-100">
        <div className="">
          <div className="text-5xl font-bold">
            <h1 className="mt-5">
              <span className="text-[#6e07f3]">Lost</span> Yout Way ?
            </h1>
          </div>

          <div className="text-xl">
            <h1 className="my-10">
              Sorry, we can't find that page, You can find Mahesh Dubey on
              <span
                className="text-[#6e07f3] opacity-50 cursor-pointer hover:opacity-100"
                onClick={() => navigate("/")}
              >
                {" "}
                Visit
              </span>
            </h1>
            <h1 className="border-l-2 border-[#6e07f3] py-2 px-2">
              Error Code <span className="font-bold">404</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
