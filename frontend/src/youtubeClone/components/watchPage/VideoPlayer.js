import React from 'react';
import { useParams } from 'react-router-dom';

const VideoPlayer = () => {
  const id = useParams();

  return (
    <div>
      <iframe
        className="pl-10"
        width="1024"
        height="512"
        src={'https://www.youtube.com/embed/' + id}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
