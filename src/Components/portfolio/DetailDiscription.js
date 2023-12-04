import { useTranslation } from "react-i18next";
const DeatailDiscrption = ({detail}) => {
    const [t] = useTranslation("global");
    return(
        <div className="portfolio-description">
            <h2>{t("portfolioDetail.ProjectTitle")}</h2>
            <p>
            {t(`portfolioDetail.description${detail.id}`)}
            </p>
        </div>
    )
}
export default DeatailDiscrption;