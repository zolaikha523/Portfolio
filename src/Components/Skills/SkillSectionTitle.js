import { useTranslation } from "react-i18next";
const SkillSectionTitle = () => {
    const [t] = useTranslation("global");
    return(
        <div className="section-title">
          <h2>{t("skills.title")}</h2>
          <p>{t("skills.para")}</p>
        </div>
    )
}
export default SkillSectionTitle;