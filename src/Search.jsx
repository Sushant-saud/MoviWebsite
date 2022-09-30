import React from 'react'
import { useGlobalContext } from './Context'

function Search() {
    const {query,setquery,Error}=useGlobalContext();
  return (
    <>
    <section className='search-section'>
        <h2>Search Your Favourite Movie</h2>
        <form action="#" onSubmit={(e)=>e.preventDefault()}>
           <div>
            <input type="text" placeholder='Search Here' value={query} onChange={(e)=>setquery(e.target.value)}/>
           </div>
        </form >
        <div className='card-error'>
          <p>{Error.show && Error.message}</p>
        </div>
    </section>
    </>
  )
}

export default Search