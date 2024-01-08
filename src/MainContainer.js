import React from 'react'
import PrimaryMovie from './PrimaryMovie'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux';

const MainContainer = () => {

    const movieresponse = useSelector((store) => store?.movies?.popularmovies);
    if(!movieresponse) return;
    const movieData = movieresponse[0];
    console.log(movieData, 'datares');

    const {id, title, vote_average, overview} = movieData

  return (
    <div>
        <PrimaryMovie id={id} title={title} vote_average={vote_average} overview={overview}/>
        <VideoBackground />
    </div>
  )
}

export default MainContainer