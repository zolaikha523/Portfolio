import { useTranslation } from "react-i18next";
import AbouContentTitle from "./AboutContentTitle";
import AboutLiftList from "./AboutLiftList";
import AboutRightList from "./AboutRightLIst";
const AboutContent = () =>{
    const [t] = useTranslation("global");
    return(
        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <AbouContentTitle/>
            <div className="row">
                <AboutRightList/>
                <AboutLiftList/>
            </div>
            <p>
            {t("about.information")}
            </p>
        </div>
    )
} 
export default AboutContent;