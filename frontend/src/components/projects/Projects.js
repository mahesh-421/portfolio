import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';

import projectsData from '../../utils/projectsData';

import Project from './Project';

import prev from '../../assets/previous.svg';
import next from '../../assets/next.svg';

const Projects = () => {
  const [showNavigators, setShowNavigators] = useState(false);
  const [prevButton, setPrevButton] = useState(false);
  const [nextButton, setNextButton] = useState(true);

  const projectRef = useRef(null);
  const scroll = useRef(null);
  const focus = useSelector((store) => store.focus);

  if (focus.toShow === 'project') {
    projectRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div
      className="relative lg:pt-24 snap-end h-full bg-purple-100 overflow-y-scroll no-scrollbar flex flex-col items-center "
      id="project"
      ref={projectRef}
    >
      <div className="flex flex-col justify-start items-center ">
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pt-[15%] lg:pt-[10%]">
          Projects
        </h1>

        <div className="mt-3 w-8 sm:w-16 border-y-2 border-[#6e07f3] rounded-full"></div>

        <h2 className="text-center text-sm sm:text-xl mt-5 mx-3 ">
          Here you will find some of my personal projects that I created while
          exploring Web Development
        </h2>
      </div>

      <div
        className="relative w-[90%] h-[55%] mt-5 mb-5 flex"
        onMouseEnter={() => setShowNavigators(true)}
        onMouseLeave={() => setShowNavigators(false)}
      >
        <button
          className={`absolute left-0 h-full w-10 bg-purple-100  z-10 ${
            showNavigators && prevButton ? 'hidden md:block' : 'hidden'
          }`}
          onClick={() => {
            scroll.current.scrollLeft -= scroll.current.clientWidth;
            // scroll.current?.scrollIntoView({ behavior: 'smooth' });

            if (scroll.current?.scrollLeft <= 100) setPrevButton(false);
            else setPrevButton(true);
            if (
              scroll.current.scrollWidth * 0.9 -
                scroll.current.scrollWidth / projectsData.length <
              scroll.current.scrollLeft
            )
              setNextButton(false);
            else setNextButton(true);
          }}
        >
          <img className="" src={prev} />
        </button>

        <div
          className="relative px-20 h-full w-full overflow-x-scroll flex flex-row snap-x snap-mandatory no-scrollbar"
          ref={scroll}
        >
          <div className="mx-[5%] "></div>
          {projectsData.map((project) => (
            <Project
              key={project.id}
              img={project.img}
              name={project.name}
              discription={project.discription}
              url={project.url}
            />
          ))}
          <div className="mx-[5%] "></div>
        </div>

        <button
          className={`absolute right-0 h-full w-10 bg-purple-100 z-10 ${
            showNavigators && nextButton ? 'hidden md:block' : 'hidden'
          }`}
          onClick={() => {
            scroll.current.scrollLeft += scroll.current.clientWidth;

            if (scroll.current.scrollLeft <= 100) setPrevButton(false);
            else setPrevButton(true);
            if (
              scroll.current.scrollWidth * 0.9 -
                scroll.current.scrollWidth / projectsData.length <
              scroll.current.scrollLeft
            )
              setNextButton(false);
            else setNextButton(true);
          }}
        >
          <img className="" src={next} />
        </button>
      </div>
    </div>
  );
};

export default Projects;
