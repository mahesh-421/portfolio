import React from "react";
import ubuntu from "../../assets/ubuntu.png";

const Skills = () => {
  const stacks = [
    "Java Script",
    "HTML",
    "CSS",
    "REACT",
    "Terminal",
    "Node",
    "Express",
    "MongoDB",
  ];

  return (
    <div className="mt-6 sm:mt-20 sm:flex justify-center">
      <div className="sm:w-[40%] lg:w-1/3">
        <h1 className="mx-4 sm:mx-2 text-lg sm:text-2xl font-bold ">
          <span className="text-[#6e07f3]">Skills</span> and tools
        </h1>
        <h2 className="mx-4 text-left text-sm sm:text-md mt-2 sm:mt-5 ">
          For a more detailed overview. please feel free to check the tools that
          were used on a<span className="text-[#6e07f3]"> projects</span>.
        </h2>
        <div className="mx-3 mt-5 flex items-center">
          <img className="w-5 sm:w-7 lg:w-10" src={ubuntu} alt="Ubuntu" />
          <h2 className="text-md sm:text-lg text-[#6e07f3] mx-2">
            {" "}
            I use Ubuntu btw
          </h2>
        </div>
      </div>
      <div className="mt-5 mx-3 sm:mt-10 lg:ml-16 sm:w-[40%] md:w-1/3 flex flex-wrap items-start">
        {stacks.map((e, index) => (
          <h1
            className="m-2 px-4 py-2 text-sm bg-purple-300 rounded-lg cursor-default"
            key={index}
          >
            {e}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Skills;
