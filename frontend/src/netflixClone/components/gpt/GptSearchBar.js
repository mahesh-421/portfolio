import React, { useRef } from 'react';

import { BG_URL } from '../../utils/constants';
import lang from '../../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.config.language);
  const searchText = useRef(null);

  return (
    <div>
      <div className="absolute w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={BG_URL}
          alt="background"
        />
      </div>

      <div className="">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-[85%] md:w-[50%] p-6  absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transform bg-black bg-opacity-85 text-white rounded-md flex"
        >
          <input
            className="w-9/12 p-2 my-4 mx-2 bg-gray-500 bg-opacity-15 border border-gray-800 "
            ref={searchText}
            type="text"
            placeholder={lang[langkey].placeHolder}
          />
          <button className="w-3/12 bg-[#e50914]  p-3 px-0.5 my-4 rounded-md  hover:bg-[#cb0e17] overflow-clip">
            {lang[langkey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
