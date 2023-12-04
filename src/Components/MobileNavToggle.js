import './mobileNavigation.css';
const MobileNavToggle =(props) =>{

    return(
        <div>
            <i className={`bi ${props.iconClass} ${'mobile-nav-toggle'} ${'d-xl-none'}`} onClick={props.mobileNav} ></i>
        </div>
    )
}
export default  MobileNavToggle;