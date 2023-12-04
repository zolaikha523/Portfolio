import { useTranslation } from "react-i18next";
import InfoItem from "./InfoItem";
const info = [
    {
     className:"address",
     iconClassName:"bi bi-geo-alt",
    },
    {
     className:"email",
     iconClassName:"bi bi-envelope",
    },
    {
     className:"phone",
     iconClassName:"bi bi-phone",
     
    }
]
const Info=()=>{
    const [t] = useTranslation("global");
    return(
    <div className="info">
        {
            info.map((item, index)=>{
                return(
                    <InfoItem key={index} className={item.className} iconClassName={item.iconClassName} h4={t(`contact.heading${index+1}`)} p={t(`contact.p${index+1}`)}></InfoItem>
                )
            })
        }
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3294.629934486562!2d62.219528823612585!3d34.3344427027757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f3ce7a7ea4d51a9%3A0x41a1131246037b0e!2sPosta%20e%20Number%20Yak!5e0!3m2!1sfa!2sus!4v1699681781590!5m2!1sfa!2sus" width="600" height="450"  allowFullScreen="allowfullscreen" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="my location"></iframe>
      </div>
    )
}
export default Info;