import { useTranslation } from "react-i18next";
const ResumeSectionTitle = () =>{
    const [t] = useTranslation("global");
    return(
        <div className="section-title">
          <h2>{t("resume.title")}</h2>
          <p>{t("resume.para")}</p>
        </div>
    )
}
export default ResumeSectionTitle ;