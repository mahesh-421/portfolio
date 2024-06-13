import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Logo from '../assets/logo.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import github from '../assets/github.png';
import linkdin from '../assets/linkdin.png';

const Footer = () => {
  const contactRef = useRef(null);
  const inFocus = useSelector((store) => store.focus);
  const navigate = useNavigate();

  if (inFocus.toShow === 'contact') {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div
      className="snap-end bg-gray-800 flex flex-col items-center justify-center"
      id="contact"
      ref={contactRef}
    >
      <div className="mt-10 sm:mt-16">
        <img src={Logo} alt="Logo" className="w-8 sm:w-16" />
      </div>
      <h1 className="text-[#9e59fa] text-sm mt-6 sm:mt-12 text-center w-48">
        Living, learning, & leveling up one day at a time.
      </h1>
      <div className="flex mt-5 sm:mt-10">
        {/* <img
          className="h-6 sm:h-10 w-6 sm:w-10 mx-2 sm:mx-5 cursor-pointer"
          src={instagram}
          alt="Social"
        />
        <img
          className="h-6 sm:h-10 w-6 sm:w-10 mx-2 sm:mx-5 cursor-pointer"
          src={twitter}
          alt="Twitter"
        />
        <img
          className="h-6 sm:h-10 w-6 sm:w-10 mx-2 sm:mx-5 cursor-pointer"
          src={github}
          alt="GitHub"
        /> */}
        <img
          className="h-6 sm:h-10 w-6 sm:w-10 mx-2 sm:mx-5 cursor-pointer"
          src={linkdin}
          alt="Linkdin"
          onClick={() =>
            (window.location = 'https://www.linkedin.com/in/mahesh421')
          }
        />
      </div>
      <div className="w-11/12 border my-5 sm:my-10"></div>
      <h1 className="text-md text-gray-300 mb-3 sm:mb-10">
        © Copyright 2024. All Rights Reserved.
      </h1>
    </div>
  );
};

export default Footer;
