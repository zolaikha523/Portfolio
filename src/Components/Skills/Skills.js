import './skills.css';
import React, { useEffect, useState } from 'react';
import SkillSectionTitle from "./SkillSectionTitle";
import LeftProgress from "./LeftProgress";
import RightProgress from './RightProgress';
const Skills = () =>{
    const [isVisible, setVisible] = useState(false);
    useEffect(() => {
      const handleScroll =()=>{
        const scrollPosition = window.scrollY;
        const factScrollElement = document.getElementById('skills');
        if (factScrollElement.offsetTop < scrollPosition + window.innerHeight ){
          setVisible(true);
        };
      };
  
      window.addEventListener('scroll',  handleScroll);
      return () => window.removeEventListener('scroll',  handleScroll);
    }, []);
   
    return(
      <section id="skills" className="skills section-bg">
        <div className="container">
            <SkillSectionTitle/>
            <div className="row skills-content" id="my-content">
              <LeftProgress isVisible={isVisible}/>
              <RightProgress isVisible={isVisible}/>
            </div>
        </div>
    </section>
    )
}
export default Skills;