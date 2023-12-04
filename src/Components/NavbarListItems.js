import { useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import navbarItemsData from './NavbarItemsData'
const NavbarListItems = ({handleNavClicked}) =>{
    const [t] = useTranslation("global")
    const [currentPos, setCurrentPos] = useState(0);
    useEffect(() => {
      const handleScroll = () => {;
        const currentPosition = window.scrollY;
        setCurrentPos(currentPosition);
      };
    
      window.addEventListener("scroll", handleScroll);
    
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    return(
      navbarItemsData.map((item, index)=>{
        return(
            <li key={index}>
              <a onClick={(e)=> handleNavClicked(e, item.href)}
               href={item.href}
               className={`nav-link scrollto  ${currentPos >= item.currentPos1 && currentPos < item.currentPos2 ? "active" : ""}`}
               >
                  <i className={item.emojeClassName}></i> 
                  <span>{t(`navbar.text${index + 1}`)}</span>
               </a>
            </li>
        )})  

    )
}
export default NavbarListItems;