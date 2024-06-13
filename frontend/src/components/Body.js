import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import About from './about/About';
import Projects from './projects/Projects';
import Footer from '../components/Footer';
import Landing from './landing/Landing';

import { changeToShow } from '../store/CurrentViewSlice';

const Body = () => {
  const dispatch = useDispatch();
  const focus = useSelector((store) => store.focus);

  useEffect(() => {
    const landing = document.getElementById('landing');
    const about = document.getElementById('about');
    const project = document.getElementById('project');
    const contact = document.getElementById('contact');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.target.id === 'landing' &&
            Math.floor(entry.intersectionRatio) === 1
          )
            dispatch(changeToShow('landing'));
          else if (
            entry.target.id === 'about' &&
            Math.floor(entry.intersectionRatio) === 1
          )
            dispatch(changeToShow('about'));
          else if (
            entry.target.id === 'project' &&
            Math.floor(entry.intersectionRatio) === 1
          )
            dispatch(changeToShow('project'));
          else if (
            entry.target.id === 'contact' &&
            Math.floor(entry.intersectionRatio) === 1
          )
            dispatch(changeToShow('contact'));
        });
      },
      {
        threshold: 1,
      }
    );
    observer.observe(contact);
    observer.observe(project);
    observer.observe(about);
    observer.observe(landing);
  }, []);

  return (
    <div className=" h-screen snap-y snap-mandatory overflow-y-scroll">
      <Landing />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default Body;
