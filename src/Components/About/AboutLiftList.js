import { useTranslation } from "react-i18next";
const aboutList2Data = [
    {
     p:"Age:",
     info:23
    },
    {
      p:"Degree:",
      info:"bachlore",
    },
    {
      p:"PhEmailone:",
      info:"Available"
    },
    {
      p:"Freelance:",
      info:"zolaikhanoorzai11@gmail.com"
    }
  ];
const AboutLiftList = () =>{
    const [t] = useTranslation("global") ;
    return(
        <div className="col-lg-6">
            <ul>
              {  aboutList2Data.map((list, index)=>{
                    return(<li key={index}><i className="bi bi-chevron-right"></i> <strong>{t(`about.p${index+1}`)}</strong> <span>{t(`about.info${index+1}`)}</span></li>)}
              )}
            </ul>
          </div>
    )
}
export default AboutLiftList ;