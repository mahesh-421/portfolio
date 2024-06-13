import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-12 md:pt-[10%] px-12 absolute aspect-video w-full text-white bg-gradient-to-r from-black to-transparent flex flex-col justify-between md:justify-normal">
      <h1 className=" mb-2 text-xl sm:text-3xl md:text-4xl font-bold ">
        {title}
      </h1>
      <p className="hidden xxs:block sm:py-6 text-lg w-3/5">
        <p className="md:line-clamp-4 sm:line-clamp-3 xs:line-clamp-2 xxs:line-clamp-1">
          {overview}
        </p>
      </p>
      <div className="mb-10 flex gap-2">
        <button className="px-6 xs:py-3 xxs:py-1.5 text-lg sm:text-2xl bg-white text-black bg-opacity-80 rounded-lg hover:opacity-60">
          Play
        </button>
        <button className=" px-10 xs:py-3 xxs:py-1.5 text-xl bg-opacity-80 rounded-lg  bg-gray-800 hover:bg-gray-700">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
