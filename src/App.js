
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About/About";
import Fact from "./Components/Fact/Facts";
import Skills from "./Components/Skills/Skills";
import Resume from "./Components/Resume/Resume";
import Testmintioal from "./Components/Testmintioal/Testimonials";
import MobileNavToggle from "./Components/MobileNavToggle";
import React,{ useState } from "react";
import Portfolio from "./Components/portfolio/portfolio";
import portfolio2 from './assets/images/portfolio/iPortfolio2.jpg';
import eterna2 from './assets/images/portfolio/Eterna2.jpg';
import medilib2 from './assets/images/portfolio/Medilab2.jpg';
import parmis2 from './assets/images/portfolio/Parmis2.jpg';
import creative2 from './assets/images/portfolio/creative2.jpg';
import Maxim2 from './assets/images/portfolio/Maxim1.jpg';
import portfolio1 from './assets/images/portfolio/iPortfolio1.jpg';
import eterna1 from './assets/images/portfolio/Eterna1.jpg';
import medilib1 from './assets/images/portfolio/Medilab1.jpg';
import parmis1 from './assets/images/portfolio/Parmis1.jpg';
import creative1 from './assets/images/portfolio/creative1.png';
import Maxim1 from './assets/images/portfolio/Maxim1.jpg';
import DetailModal from "./Components/portfolio/DetailModal";
import Features  from "./Components/Features/Features";
import Cantact from './Components/Contact/Contact'
import Footer from "./Components/Footer";
import Preloader from "./Components/Preloader";
import BackToTopButton from "./Components/BackToTopButton";
import DarkModeHeader from "./Components/darkModeHeader";
const portfolioData = [
  {
    id:1,
    img:portfolio2,
    img1:portfolio1,
    cat:'app'
 },
 {
  id:2,
  img:eterna2,
  img1:eterna1,
  cat:'web'
 },
 {
  id:3,
  img:medilib2,
  img1:medilib1,
  cat:'web'
 },
 {
  id:4,
  img:parmis2,
  img1:parmis1,
  cat:'card'
 },
 {
  id:5,
  img:creative2,
  img1:creative1,
  cat:'app'
 },
 {
  id:6,
  img:Maxim2,
  img1:Maxim1,
  cat:'card'
 }
];


const App = () => {
  const [isMobileNavActive,setMobileNavActive]=useState(false);
  const [iconClass, setIconClass]= useState('bi-list');
  const [activeClass, setActiveClass] =useState("");
  const toggleMobileNav = () => {
    setMobileNavActive(!isMobileNavActive);
    setIconClass(isMobileNavActive?'bi-list':'bi-x');
    setActiveClass(isMobileNavActive?'mobile-nav-active':'');
  }
  const [selectedItem, setSlectedItem] =useState(null);
  const openModal = (portfolioId) =>{
    setSlectedItem(portfolioId);
  }
  const closeModal = (closeState) =>{
    setSlectedItem(closeState);
  }

  const [isDarkMode, setDarkMode] = useState(false);
 
  return (
  
 <>
   
    <MobileNavToggle iconClass={iconClass} mobileNav={toggleMobileNav}
     isMobileNavActive={isMobileNavActive} activeClass={activeClass}>
    </MobileNavToggle>
    <Header isMobileNavActive={isMobileNavActive} isDarkMode={isDarkMode}></Header>
    <DarkModeHeader isDarkMode={isDarkMode} isMobileNavActive={isMobileNavActive}></DarkModeHeader>
    <Hero isDarkMode={isDarkMode}/>
    <About isDarkMode={isDarkMode}/>
    <Fact/>
    <Skills/>
    <Resume/>
    <Portfolio portfolioData={portfolioData} openModal={openModal} /> 
    <Features ></Features >
    <Testmintioal/>
    <Cantact isDarkMode={isDarkMode}/>
    <Preloader></Preloader>
    {selectedItem && <DetailModal closeModal={closeModal} selectedItem={selectedItem}/>}
    <Footer setDarkMode={setDarkMode} isDarkMode={isDarkMode}/>
    <BackToTopButton/> 
  </>    
    
  );
};
export default  App;
