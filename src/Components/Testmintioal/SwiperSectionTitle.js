import { useTranslation } from "react-i18next";
const SwiperSectionTitle = () => {
    const [t] = useTranslation("global");
    return(
      <div className="section-title">
        <h2>{t("testimonials.title")}</h2>
        <p>{t("testimonials.para")}</p>
      </div>

    )
}
export default SwiperSectionTitle