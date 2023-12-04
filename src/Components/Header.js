import { useTranslation } from "react-i18next";
import './header.css';
import profileImg from '../assets/images/profile-image.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'boxicons/css/boxicons.min.css';
import  Navbar  from './Navbar';
import SocialLinks from './SocialLinks';
const Header = ({isMobileNavActive, isDarkMode}) =>{
  const [t] = useTranslation("global") ;
      const handleNavClicked = (e, href) => {
        e.preventDefault();
        let header = document.querySelector('#header');
        if(isMobileNavActive){
          header.style.left = " -300px";
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

  
    return !isDarkMode ?(
    <div>
      <header id="header"  className="header" style={{left:isMobileNavActive && "0"}}>
        <div>
          <div className="profile">
            <img src={profileImg} alt="profile" className="img-fluid rounded-circle"></img>
            <h1 className="text-light"><a href="index.html">{t("header.title")}</a></h1>
            <SocialLinks></SocialLinks>
            <Navbar handleNavClicked={handleNavClicked}></Navbar>
          </div>
        </div> 
      </header>
    </div>
    ) :null;
}
export default Header;
