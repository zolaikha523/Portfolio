import { useTranslation } from "react-i18next";
const AbouContentTitle = () =>{
    const [t] = useTranslation("global") ;
    return(
        <>
            <h3>{t("about.heading3")} &amp; {t("about.headingEm")}</h3>
            <p className="fst-italic">
            {t("about.paraItalic")}
            </p>
        </>  
    )
}
export default AbouContentTitle;