import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

import projectsData from '../../utils/projectsData';

import Project from './Project';

const Projects = () => {
  const projectRef = useRef(null);
  const focus = useSelector((store) => store.focus);

  if (focus.toShow === 'project') {
    projectRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div
      className=" snap-end h-screen bg-purple-100 overflow-y-scroll no-scrollbar flex flex-col items-center"
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
      <div className="w-[90%] h-[55%] mt-5 mb-5 overflow-x-scroll flex snap-x snap-mandatory no-scrollbar">
        <div className="mx-[5%]"></div>
        {projectsData.map((project) => (
          <Project
            img={project.img}
            name={project.name}
            discription={project.discription}
            url={project.url}
          />
        ))}
        <div className="mx-[5%]"></div>
      </div>
    </div>
  );
};

export default Projects;
