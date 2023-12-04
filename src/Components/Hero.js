import { useTranslation } from "react-i18next";
import './hero.css';
import Typed from 'typed.js';
import React, {useRef, useEffect} from 'react';
const Hero = ({isDarkMode}) =>{
    const [t,i18n] = useTranslation("global") ;
    const typedRef = useRef(null);
    useEffect(()=> {
        const options = {
            strings:[
                    t("hero.string1"),
                    t("hero.string2"),
                    t("hero.string3"),
                    t("hero.string4")
             ],
            typeSpeed: 40,
            backSpeed: 40,
            loop: true            
        };
      
     const typed = new Typed(typedRef.current,options);

     return()=>{typed.destroy();}
    },[]);
       
    return(  
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container">
            <h1>{t("hero.title")}</h1>
            <p>{t("hero.p")} <span ref={typedRef}></span></p>
            </div>   
        </section>
    );
}
export default Hero;