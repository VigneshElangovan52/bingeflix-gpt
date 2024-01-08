import React from 'react'
import Header from './Header';
import usePopularMovies from './hooks/usePopularMovies';
import MovieCarousel from './MovieCarousel';
import MainContainer from './MainContainer';

const Browse = () => {
 
  usePopularMovies(); 

  return (
    <div>
      <Header />
      <MainContainer />
      <MovieCarousel />
    </div>
  )
}

export default Browse;