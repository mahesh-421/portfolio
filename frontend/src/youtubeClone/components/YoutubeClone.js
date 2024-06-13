import React from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';

import Header from './Header';
import SideBar from './SideBar';
import MainContainer from './mainContainer/MainContainer';

const YoutubeClone = () => {
  return (
    <div className="">
      <Header />
      <div className="flex">
        <SideBar />
        <Routes>
          <Route path="/" element={<MainContainer />} />
        </Routes>
        <Outlet />
      </div>
    </div>
  );
};

export default YoutubeClone;
