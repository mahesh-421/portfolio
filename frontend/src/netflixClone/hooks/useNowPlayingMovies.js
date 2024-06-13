import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addNOwPlayingMovies } from '../../store/netflixClone/movieSlice';

const useNowPlayingMovies = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  //Fetch Data from TMWB API and update store
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    try {
      const res = await fetch(
        // `http://localhost:5000/api/netflix/nowplayingmovies`
        `/api/netflix/nowplayingmovies`
      );

      const data = await res.json();

      // if (data.error) throw new Error(data.error);

      const json = data.json;

      dispatch(addNOwPlayingMovies(json?.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
