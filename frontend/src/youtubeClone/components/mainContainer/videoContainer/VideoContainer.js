import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../../../utils/constant';

import Card from './Card';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap justify-center ">
      {videos.map((video) => (
        <Card key={video.id} info={video} id={video.id} />
      ))}
    </div>
  );
};

export default VideoContainer;
