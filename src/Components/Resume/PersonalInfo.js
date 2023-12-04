import { useTranslation } from "react-i18next";
const PersonalInfo = () =>{
    const [t] = useTranslation("global");
    return(
        <>
            <h3 className="resume-title">{t("resume.h3")}</h3>
            <div className="resume-item pb-0">
                <h4>{t("resume.h4")}</h4>
                <p><em>{t("resume.paraEm")}</em></p>
                <ul>
                    <li>{t("resume.adress")}</li>
                    <li>{t("resume.phone")}</li>
                    <li>zolaikhanoorzai11@gmail.com</li>
                </ul>
            </div>
        </>
       
    )
}
export default PersonalInfo ;