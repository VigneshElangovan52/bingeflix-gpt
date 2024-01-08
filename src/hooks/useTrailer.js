import { useEffect } from "react";
import { storeTrailerVideoKey } from "../utils/moviesSlice";
import { options } from "../constants";
import { useDispatch } from "react-redux";

const useTrailer = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTrailer(id);
  }, []);

  const getTrailer = async (id) => {
    const movie_data = await fetch(
      "https://api.themoviedb.org/3/movie/{movie_id}".replace(
        "{movie_id}",
        id
      ) + "/videos?language=en-US",
      options
    );
    const results = await movie_data?.json();
    const res = results?.results?.filter((item) => item.type === "Trailer");
    const final = res ? res?.[0] : results?.results?.[0];
    dispatch(storeTrailerVideoKey(final));
  };
};

export default useTrailer;
