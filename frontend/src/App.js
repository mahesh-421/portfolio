import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';
import Error from './components/Error';

import Netflixclone from './netflixClone/components/Netflixclone';
import NetflixBrowse from './netflixClone/components/Browse';

import YoutubeClone from './youtubeClone/components/YoutubeClone';
import MainContainer from './youtubeClone/components/mainContainer/MainContainer';
import Watch from './youtubeClone/components/watchPage/WatchPage';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="h-screen">
            <Header />
            <Body />
          </div>
        }
      />
      <Route path="/netflixclone" element={<Netflixclone />}>
        <Route path="browse" element={<NetflixBrowse />} />
      </Route>

      <Route path="/youtubeclone" element={<YoutubeClone />}>
        <Route path="watch/:id" element={<Watch />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
