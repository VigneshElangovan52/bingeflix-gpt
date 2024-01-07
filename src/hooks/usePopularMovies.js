import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { storePopularMovies } from "../utils/moviesSlice";
import { options } from "../constants";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    //const movieresponse = useSelector(state => state.movie)
  
    useEffect(() => {
      getPopularMovies();
    }, []);
    
  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', options);
    const json = await data?.json();
   dispatch(storePopularMovies(json.results));
  }
  
 // console.log(movieresponse, '1234');
}

export default usePopularMovies;