import { useState, useEffect } from 'react';
import './backToTopButton.css';
const BackToTopButton = () =>{
    const [isButtonVisible, setButtonVisible] = useState(false);
    useEffect(() => {
        const handleScroll =()=>{
          const scrollPosition = window.scrollY;
          if (scrollPosition>200){
            setButtonVisible(true);
          }
          else{
            setButtonVisible(false);
          }
        };
    
        window.addEventListener('scroll',  handleScroll);
        return () => window.removeEventListener('scroll',  handleScroll);
      }, []);
    return(
      <div>
          <a href="#hero" className={`back-to-top d-flex align-items-center justify-content-center ${isButtonVisible && 'active'} `}><i className='"bi bi-arrow-up-short'></i></a>
      </div>

    )
}
export default BackToTopButton;