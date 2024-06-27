import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({ img, name, discription, url }) => {
  const navigate = useNavigate();

  return (
    <div
      className=" mx-2 sm:mx-5 bg-[#dad0e5] flex-shrink-0 w-auto h-auto xs:h-[90%] md:w-[80%] md:h-full snap-center flex md:flex-row flex-col items-center md:justify-center rounded-lg cursor-pointer overflow-y-scroll no-scrollbar "
      onClick={() => {
        if (url[0] === '/') navigate(`${url}`);
        else window.location = `${url}`;
      }}
    >
      <div className="md:h-[80%] w-56 md:w-[60%]  m-2 md:m-10">
        <img className="w-full h-full rounded-lg" src={img} alt="netflxClone" />
      </div>
      <div className="md:w-[35%] h-[80%] md:flex flex-col md:justify-center md:items-center md:mt-5 ">
        <h1 className=" font-bold text-md sm:text-2xl md:text-2xl lg:text-4xl  text-center">
          {name}
        </h1>
        <h1 className=" my-2 sm:my-4 w-44 md:w-full md:my-7 px-5 text-center text-sm lg:text-xl ">
          {discription}
        </h1>
      </div>
    </div>
  );
};

export default Project;
