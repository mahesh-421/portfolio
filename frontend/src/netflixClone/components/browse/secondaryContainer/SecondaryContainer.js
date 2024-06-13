import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="text-white md:-mt-[7%] lg:-mt-[15%] xl:-mt-[25%]">
      <div className="relative">
        <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
        <MovieList title={'Trending'} movies={movies.nowPlayingMovies} />
        <MovieList title={'Popular'} movies={movies.nowPlayingMovies} />
        <MovieList title={'Top Movies'} movies={movies.nowPlayingMovies} />
        <MovieList title={'Top Series'} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
