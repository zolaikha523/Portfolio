import { useTranslation } from "react-i18next";
import SelectOption from "./Select";
import NavbarListItems from "./NavbarListItems";
import "./navbarList.css"
const NavbarList = ({handleNavClicked, isMobileNavActive}) =>{
    const [t,i18n] = useTranslation("global") ;
    const handleChangeLanguage = (lang: string) =>{
    i18n.changeLanguage(lang);
   }
    return(
      <div>
        <ul style={{
            display: isMobileNavActive && 'flex',
            flexDirection: isMobileNavActive && 'column',
            padding: isMobileNavActive ? '0 auto':'0',
          }} >
          <NavbarListItems  handleNavClicked={handleNavClicked}/>
          <li>
            <SelectOption  handleChangeLanguage={handleChangeLanguage}></SelectOption>
          </li>
        </ul>
      </div>
    )
}

export default NavbarList;