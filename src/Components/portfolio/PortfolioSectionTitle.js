import { useTranslation } from "react-i18next";
const PortfolioSectionTitle = ({detail}) =>{
    const [t] = useTranslation("global");
    return(
        <div className="section-title">
          <h2>{t("portfolio.title")}</h2>
          <p>{t("portfolio.para")}</p>
        </div>
    )
}
export default PortfolioSectionTitle;