import { useTranslation } from "react-i18next";
const AboutTitleSection = () =>{
    const [t] = useTranslation("global");
    return(
        <div className="section-title">
            <h2>{t("about.title")}</h2>
            <p>{t("about.para")}</p>
        </div>  
    )
}
export default AboutTitleSection;