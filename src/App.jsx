import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import SingleMovie from './SingleMovie';
import Error from './Error';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/MoviWebsite" element={<Home/>}/>
    <Route path="MoviWebsit/movie/:id" element={<SingleMovie/>}/>
    <Route path="*" element={<Error/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App;
