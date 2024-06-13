import React from 'react';

const Landing = () => {
  return (
    <div
      className="snap-end bg-purple-100 h-screen px-16 sm:px-32 lg:px-56 pt-28 sm:pt-44 lg:pt-32 flex flex-col lg:justify-center overflow-y-scroll no-scrollbar"
      id="landing"
    >
      <div className="text-xl sm:text-3xl md:text-5xl font-bold">
        <h1 className="my-2 sm:my-5">Hello,</h1>
        <h1 className="my-2 sm:my-5">
          I am <span className="text-[#6e07f3]">Mahesh</span>,
        </h1>
        <h1 className="mt-2 sm:mt-5">Front End Developer</h1>
      </div>
      <div className="text-md sm:text-xl text-left mt-10 md:mt-5 ">
        <h2>
          Currently located in India, I love building{' '}
          <span className="text-[#6e07f3]">interactive</span>. Digital
          experience on web
        </h2>
      </div>
    </div>
  );
};

export default Landing;
