import React, { useEffect, useState } from "react";
import requests from "../Requests";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)]

//   wrap axios in useeffect so that whenever this page loads we add dependency- elseapi will make nonstop calls
useEffect(()=>{
axios.get(requests.requestPopular)
.then((response)=>{
setMovies(response.data.results)
})
},[])
// if empty array not passed to useeffect- there will be infinite calls of api 
console.log(movie)
  return (
<div className="w-full h-[550px] text-white">
    <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
    <img className="w-full h-full object-fit" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}></img>
    </div>
</div>
  );
};

export default Main;
