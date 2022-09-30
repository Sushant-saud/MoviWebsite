import React from 'react';
import Movies from './Movies';
import Search from './Search';

 //import { useContext } from 'react'
// import { AppContext } from './Context'
function Home() {
    //const data=useContext(AppContext);
  
  return (
    <div className='container'>
        <Search/>
        <Movies/>
     
     </div>
  )
}

export default Home