import React from "react";

const PrimaryMovie = ({title, vote_average, overview }) => {
  return (
    <div className="absolute w-[60%] py-40 px-10 bg-gradient-to-r text-white bg-opacity-90 ">
      <div  className= 'bg-stone-700 bg-opacity-10 rounded-xl'>
        <h1 className="flex p-1 items-start my-1 font-serif font-extrabold text-2xl text-white">
          {title}
        </h1>
        <p className="flex p-1 items-start text-justify my-1 font-sans text-white">
          {overview}
        </p>
        <p className=" flex p-1 items-start my-1 text-white font-bold">
          Rated {vote_average}
        </p>
      </div>
      <div className="flex items-start">
        <button className="m-1 text-sm font-mono p-1 px-2 bg-slate-900 border rounded-lg hover:bg-opacity-10">
          {" "}
          ▶ Play{" "}
        </button>
        <button className="m-1 text-sm font-mono p-1 px-2 bg-gray-700 border rounded-lg hover:bg-stone-500 border-stone-500 bg-stone-600">
          {" "}
          ℹ More info{" "}
        </button>
      </div>
    </div>
  );
};

export default PrimaryMovie;
