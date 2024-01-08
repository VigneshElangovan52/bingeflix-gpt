import React from 'react'
import PrimaryMovie from './PrimaryMovie'
import { useSelector } from 'react-redux';
import BackgroundVideo from './BackgroundVideo';

const MainContainer = () => {

    const movieresponse = useSelector((store) => store?.movies?.popularmovies);
    if(!movieresponse) return;
    const movieData = movieresponse[0];

    const {id, title, vote_average, overview} = movieData

  return (
    <div>
        
        <PrimaryMovie id={id} title={title} vote_average={vote_average} overview={overview}/>
        <BackgroundVideo id={id} />
    </div>
  )
}

export default MainContainer