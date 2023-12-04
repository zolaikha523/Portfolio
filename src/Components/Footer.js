import { useTranslation } from "react-i18next";
import DarkModeToggler   from './DarkModeToggler';
import SocialLinks from './SocialLinks';
import './footer.css';
const Footer =({setDarkMode,isDarkMode}) =>{
    const [t] = useTranslation("global");
    return(
        <footer id="footer">
            <div className="container">
                <div className="copyright">
                    &copy; {t("footer.copyright")} <strong><span>{t("footer.website")}</span></strong>
                </div>
                <div className="credits">
                {t("footer.p1")}<a href="https://github.com/zolaikha523">  {t("footer.p2")}</a>
                </div>
            </div>
            {isDarkMode ? <SocialLinks/> :null}
            <DarkModeToggler  setDarkMode={setDarkMode} isDarkMode={isDarkMode}/>
        </footer>
    )
}
export default Footer;