import ScrollTrigger from 'react-scroll-trigger';
import CountBoxItem from './CountBoxItem';
import countBoxData from "./CountBoxData";
import { useTranslation } from "react-i18next";
import React, { useState} from 'react';
const FactScrollTrigger = () =>{
    const [t] = useTranslation("global");
    const [onCounter, setCounterOn] = useState(false);
    return(
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
        <div className="row no-gutters">
          { countBoxData.map((contBoxItem, index)=>{
              return(<CountBoxItem 
                 key={index} 
                 dataAosDelay={contBoxItem.dataAosDelay}   
                 imojeClass={contBoxItem.imojeClass} 
                 end={contBoxItem.end} 
                 p1={t(`fact.heading${index+1}`)} 
                 p2={t(`fact.p${index+1}`)} 
                 onCounter={onCounter}
                 />)
              }
            )}
        </div>
      </ScrollTrigger>
    )
}
export default FactScrollTrigger;