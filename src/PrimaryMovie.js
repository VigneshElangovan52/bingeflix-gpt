import React from "react";
import { useSelector } from "react-redux";
import useTrailer from "./hooks/useTrailer";


const PrimaryMovie = ({ id, title, vote_average, overview }) => {
  
  useTrailer(id);

  const trailerKeyId = useSelector((store) => store?.movies?.trailerKey);
  console.log(trailerKeyId, "trailerKey");

  return (
    <div className="p-5 h-1/3">
      <h1 className="flex p-1 w-2/5 items-start my-1 font-serif font-semibold text-xl">
        {title}
      </h1>
      <p className="flex p-1 w-2/4 items-start text-justify my-1 text-sm">
        {overview}
      </p>
      <p className=" flex p-1 w-1/12 items-start my-1 text-sm font-semibold">
        Rated {vote_average}
      </p>
      <div className="flex items-start">
        <button className="m-1 text-sm font-mono px-1 border rounded-lg hover:bg-stone-500 border-stone-500 bg-white">
          {" "}
          ▶ Play{" "}
        </button>
        <button className="m-1 text-sm font-mono px-1 border rounded-lg hover:bg-stone-500 border-stone-500 bg-white">
          {" "}
          ℹ More info{" "}
        </button>
      </div>
          <iframe
            width="560"
            height="315"
            src={
              "https://www.youtube.com/embed/" + trailerKeyId?.key +
              "?si=dYxmwRwQyeHPP4XI&amp;controls=0"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
    </div>
  );
};

export default PrimaryMovie;
