import React from 'react';
import Logo from '../assets/logo.png';

import { useDispatch, useSelector } from 'react-redux';

import { changeToShow } from '../store/CurrentViewSlice';

const Header = () => {
  const inFocus = useSelector((store) => store.focus);

  const dispatch = useDispatch();

  return (
    <div className="px-2 w-full h-10 sm:h-16 md:h-20 lg:h-24 bg-gradient-to-t from-white to-purple-100 flex justify-between items-center fixed ">
      <div className="mx-2 sm:mx-4  md:mx-10 ">
        <img src={Logo} alt="Logo" className="w-6 sm:w-10 md:w-12 lg:w-16" />
      </div>
      <div className="flex items-center">
        <h1
          className=" mx-2 sm:mx-4 md:mx-10 rounded-lg p-2 text-md sm:text-2xl cursor-pointer  font-bold text-gray-500 hover:text-violet-800 "
          onClick={() => {
            dispatch(changeToShow('about'));
          }}
        >
          About
          {inFocus.toShow === 'about' && (
            <div className="h-0 border-y-2 border-[#6e07f3] rounded-full"></div>
          )}
        </h1>

        <h1
          className=" mx-2 sm:mx-4 md:mx-10rounded-lg p-2 text-md sm:text-2xl cursor-pointer  font-bold text-gray-500 hover:text-violet-800 "
          onClick={() => {
            dispatch(changeToShow('project'));
          }}
        >
          Project
          {inFocus.toShow === 'project' && (
            <div className="h-0 border-y-2 border-[#6e07f3] rounded-full"></div>
          )}
        </h1>
        <h1
          className="mx-2 sm:mx-4 md:mx-10rounded-lg p-2 text-md sm:text-2xl cursor-pointer  font-bold text-gray-500 hover:text-violet-800 "
          onClick={() => {
            dispatch(changeToShow('contact'));
          }}
        >
          Contact
          {inFocus.toShow === 'contact' && (
            <div className="h-0 border-y-2 border-[#6e07f3] rounded-full"></div>
          )}
        </h1>
      </div>
    </div>
  );
};

export default Header;
