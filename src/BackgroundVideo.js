import React from "react";
import { useSelector } from "react-redux";
import useTrailer from "./hooks/useTrailer";

const BackgroundVideo = ({id}) => {
  const trailerKeyId = useSelector((store) => store?.movies?.trailerKey);

  useTrailer(id);

  return (
    <div>
      <iframe
      className="w-screen aspect-video" 
        src={
          "https://www.youtube.com/embed/" +
          trailerKeyId?.key +
          "?si=dYxmwRwQyeHPP4XI&amp;controls=0&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
