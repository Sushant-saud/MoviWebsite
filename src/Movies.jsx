import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './Context'

function Movies() {
    const {movie,isLoading}= useGlobalContext();
    if(isLoading)
    {
        return(
            <div>
            <div className='loading'>
                loading...
            </div>
            </div>
        )
    }
    return (
        <>
            <section className='movie-page'>
                <div className='grid grid-4-col'>
                       {
                        movie.map((curMovie,index)=>{
                            const {imdbID,Title,Poster}=curMovie;
                            const moviename=Title.substring(0,19);
                            return(
                                <NavLink to={`movie/${imdbID}`} >
                                    <div className='card'>
                                        <div className='card-info'>
                                            <h2>{moviename.length > 15 ? `${moviename}...`: moviename }</h2>
                                            <img src={Poster} alt={imdbID} srcSet=" "/>

                                        </div>
                                        </div>    
                                </NavLink>
                            )
                        })
                       }
                </div>

            </section>
        </>
    )
}

export default Movies;