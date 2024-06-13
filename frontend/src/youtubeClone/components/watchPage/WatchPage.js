import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../../../store/youtubeClone/appSlice';

import VideoPlayer from './VideoPlayer';
import Comments from './comments/Comments';
import LiveChatContainer from './liveChat/LiveChatContainer';
import SideBar from '../SideBar';

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex w-full ">
      <div className="flex flex-col">
        <VideoPlayer />
        <Comments />
      </div>
      <LiveChatContainer />
    </div>
  );
};

export default WatchPage;
