import DrakModeNavbar from './DarkModeNavbar';
import MobileNavToggle from './MobileNavToggle';
import './darkModeHeader.css';
import logo from "../assets/images/36408395-designstyle-candy-orange-m.png"
import { useState, useEffect } from 'react';
const DarkModeHeader = ({isMobileNavActive, isDarkMode}) =>{

  const [isHeaderScrolled, setHeaderScrolled] = useState(false);
    useEffect(() => {
        const handleHeaderScroll =()=>{
          const scrollPosition = window.scrollY;
          if (scrollPosition>200){
            setHeaderScrolled(true);
          }
          else{
            setHeaderScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleHeaderScroll);
        return () => window.removeEventListener('scroll', handleHeaderScroll);
      }, []);

    const handleNavClicked = (e, href) => {
    e.preventDefault();
    let header = document.querySelector('#header');
    let navbar = document.querySelector('.dark-mode-navbar ul');
    let logo = document.querySelector('.logo');
    if(isMobileNavActive && isDarkMode){
      header.style.height = "70px";
      navbar.style.display = "none";
      logo.style.display= "block"
      let navbarToggle = document.querySelector('.mobile-nav-toggle');
      navbarToggle.classList.toggle('bi-list')
      navbarToggle.classList.toggle('bi-x')

    }
    // Scroll to the target section
    const targetId = href.substring(1); // Remove the '#' from the href
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
   }
    return isDarkMode ? (
     <div> 
     <header id="header" className={`dark-mode-header fixed-top d-flex align-items-center ${isHeaderScrolled && 'scrolled'} `}  style={{height:isMobileNavActive ? "300px" : "70px"}}>
    
       <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
   
        <h1 className="logo me-auto me-lg-0" style={{display:isMobileNavActive && "none"}}><a href="index.html"><img src={logo} alt='logo'></img></a></h1>
         
        <DrakModeNavbar handleNavClicked={handleNavClicked} isMobileNavActive={isMobileNavActive} ></DrakModeNavbar>
       
        <MobileNavToggle isHeaderScrolled={isHeaderScrolled}/>

       </div>
     </header>
    </div> 
 
    ):null;
}

export default  DarkModeHeader;