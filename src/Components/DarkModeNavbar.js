import './darkModeHeader.css';
import NavbarList from './NavbarList';
const DrakModeNavbar = ({handleNavClicked, isMobileNavActive}) =>{
  return(
    <nav id="dark-mode-navbar" className="nav-menu dark-mode-navbar">
      <NavbarList  handleNavClicked={handleNavClicked} isMobileNavActive={isMobileNavActive}></NavbarList>
    </nav> 
 )
}
export default DrakModeNavbar ;
