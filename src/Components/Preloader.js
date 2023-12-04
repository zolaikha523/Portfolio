import "./preloader.css";
import React, { useState, useEffect } from 'react';
const Preloader = () =>{
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, []);    
    
    return(
        isLoading && <div id="preloader"></div>
    )
}
export default  Preloader;