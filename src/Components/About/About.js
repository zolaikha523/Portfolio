import './about.css';
import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutContent from "./AboutContent";
import AboutTitleSection from "./AboutTitleSection";
import AboutImage from "./AboutImage";
const About = ({isDarkMode}) => {
    useEffect(()=> {
        AOS.init(
         { duration: 1000,
          easing: 'ease-in-out',
          once: true,
          mirror: false}
        );
    
    },[]);

  return (
      <section id="about" className="about">
        <div className="container">
            <AboutTitleSection/>
            <div className="row">
                <AboutImage isDarkMode={isDarkMode}/>
                <AboutContent/>
            </div>
        </div>
      </section>
  )
}
export default About;
