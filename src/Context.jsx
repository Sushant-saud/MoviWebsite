
import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
const AppContext = React.createContext();
const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
//we need to create a provider fun
 const AppProvider = ({ children }) => {
    const [movie, setmovie] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [Error, setError] = useState({ show: 'false', message: "" });
    const [query,setquery]=useState("titanic");
    const getMovies = async (API_URL) => {
        setisLoading(true);
        try {
            const data = await fetch(API_URL);
            const val = await data.json();
            console.log(val);
            if(val.Response === "True"){
                setisLoading(false);
                setmovie(val.Search);
                setError({
                    show:false,
                    message:""
                })
            }
            else {
                setError({
                    show:true,
                    message:val.Error
                })
            }
        } catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
      let timerOut= setTimeout(() => {
        getMovies(`${API_URL}&s=${query}`);
        },400);
        return ()=>{
            clearTimeout(timerOut);
        }
       
    },[query])

    return <AppContext.Provider value={{isLoading,movie,Error,query,setquery}}>
        {children}
    </AppContext.Provider>

}
//global custom hook
const useGlobalContext = () => {
    return useContext(AppContext);
}
export { useGlobalContext,AppContext,AppProvider};

