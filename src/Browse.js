import React from 'react'
import Header from './Header';
import usePopularMovies from './hooks/usePopularMovies';

const Browse = () => {
 
  usePopularMovies(); 

  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse;