import { useTranslation } from "react-i18next";
const DetailInfo = ({detail}) =>{
    const [t] = useTranslation("global");
    return(
        <div className="portfolio-info">
            <h3>{t("portfolioDetail.projectInfo")}</h3>
            <ul>
                <li><strong>{t("portfolioDetail.Category")}</strong>: {detail.Category}</li>
                <li><strong>{t("portfolioDetail.ProjectName")}</strong>: {detail.projectName}</li>
                <li><strong>{t("portfolioDetail.ProjectDate")}</strong>: {detail.projectDate}</li>
                <li><strong>{t("portfolioDetail.projectUrl")}</strong>: <a href={detail.projectUrl}>{detail.projectUrl}</a></li>
            </ul>
        </div>
    )
}
export default DetailInfo ;