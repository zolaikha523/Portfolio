import './navbar.css';
import NavbarList from "./NavbarList";
const Navbar = ({handleNavClicked}) =>{
  return(
    <nav id="navbar" className="nav-menu navbar">
     <NavbarList  handleNavClicked={handleNavClicked}></NavbarList>
    
  </nav> 
 )
}
export default Navbar ;