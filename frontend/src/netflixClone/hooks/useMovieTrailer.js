import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { addTrailerVideo } from '../../store/netflixClone/movieSlice';

const useMoveTrailer = (movieID) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  // "homepage": "http://localhost:5000",

  const getMovieVideos = async () => {
    try {
      const res = await fetch(
        // `http://localhost:5000/api/netflix/movievideos/${movieID}`
        `/api/netflix/movievideos/${movieID}`
      );

      const data = await res.json();

      if (data.error) throw new Error(data.error);

      const json = data.json;

      const filterData = json.results?.filter(
        (video) => video.type === 'Trailer'
      );
      if (!filterData) return;
      // console.log(filterData);

      const trailer = filterData ? filterData[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMoveTrailer;
