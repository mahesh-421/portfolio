import React, { useRef } from 'react';
import Skills from './Skills';

import { useSelector } from 'react-redux';

const About = () => {
  const aboutRef = useRef(null);
  const focus = useSelector((store) => store.focus);
  if (focus.toShow === 'about') {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div
      className="snap-end h-screen bg-purple-100 overflow-y-scroll no-scrollbar"
      id="about"
      ref={aboutRef}
    >
      <div className="flex flex-col justify-start items-center">
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pt-[15%] lg:pt-[10%]">
          About Me
        </h1>

        <div className="mt-2 w-8 sm:w-16 border-y-2 border-[#6e07f3] rounded-full"></div>

        <h2 className="text-center px-2 sm:px-5 text-sm sm:text-xl mt-5 ">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </h2>
        <Skills />
      </div>
    </div>
  );
};

export default About;
