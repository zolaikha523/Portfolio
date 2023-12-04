import { useTranslation } from "react-i18next";
import "./select.css"
const SelectOption = (props) =>{
    const [t] = useTranslation("global") ;
    return(
     <div className="optionbox">
     <div className="btn-down"><i className='bx bxs-down-arrow bx-tada'></i></div>
        <select className="selectBox" onChange={(e) => props.handleChangeLanguage(e.target.value)}>
            <option defaultValue="en" value={"en"}>{t("select.option1")}</option>
            <option value={"fr"}>{t("select.option2")}</option>
        </select>
     </div>    
   )
}
export default SelectOption;