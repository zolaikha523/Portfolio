import { useTranslation } from "react-i18next";
const FeatureSectionTitle = () =>{
    const [t] = useTranslation("global");
    return(
        <div className="section-title">
            <h2>{t("feature.title")}</h2>
            <p>{t("feature.para")} </p>
        </div> 
    )
}
export default FeatureSectionTitle;