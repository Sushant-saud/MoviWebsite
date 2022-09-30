import React from 'react'
import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
function SingleMovie() {
  const { id } = useParams();
  const [movie, setmovie] = useState();
  const [isLoading, setisLoading] = useState(true);
  const getMovies = async (API_URL) => {
    setisLoading(true);
    try {
      const data = await fetch(API_URL);
      const val = await data.json();
      console.log(val);
      if (val.Response === "True") {
        setisLoading(false);
        setmovie(val);
      }
    }catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 400);
    return () => {
      clearTimeout(timerOut);
    }

  },[id])
  if(isLoading)
    return(
      <>
        <div className='movie-section'>
          <div className='loading'>loading...</div>
        </div>
      </>
    )
  return (
    <>
      <section className='movie-section'>
        <div className='movie-card'>
          <figure>
            <img src={movie.Poster} alt={movie.imdbID} />
          </figure>
          <div className='card-content'>
            <p className="title">{movie.Title}</p>
            <p className=""></p>
            <p className="card-text">{movie.Released}</p>
            <p className="card-text">{movie.Genre}</p>
            <p className="card-text">{movie.imdbRating} / 10</p>
            <p className="card-text">{movie.Country}</p>
             <NavLink to="/">Go Back</NavLink>
          </div>
        </div>
      </section>

    </>

  )
}
export default SingleMovie