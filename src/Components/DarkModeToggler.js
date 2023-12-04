import './darkModeToggler.css'
const DarkModeToggler  = ({setDarkMode,isDarkMode}) =>{
    const handleDarkMode = () =>{
        document.querySelector("body").setAttribute('data-theme', "dark");    
    }

    const handleLightMode = () =>{
        document.querySelector("body").setAttribute('data-theme', "ligt");
    }
    const toggleTheme = (e) =>{
        if(e.target.checked) handleDarkMode();
        else handleLightMode();
        setDarkMode(!isDarkMode);
    }
    return(
        <div>
            <input type="checkbox" id="darkmode-toggle" onChange={ toggleTheme}></input>
            <label htmlFor="darkmode-toggle" className="input-label">
                <i id="moon" className="bi bi-moon"></i>
                <i id="sun" className="bi bi-brightness-high"></i>
            </label>
        </div>
    )
}
export default DarkModeToggler ;