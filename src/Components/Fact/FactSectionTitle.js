import { useTranslation } from "react-i18next";
const FactSectionTitle = () =>{
    const [t] = useTranslation("global");
    return(
        <div className="section-title">
            <h2>{t("fact.title")}</h2>
            <p>{t("fact.para")}</p>
        </div>
    )
}
export default FactSectionTitle;