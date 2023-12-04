import ResumeItem1 from "./ResumeItem1";
import { useTranslation } from "react-i18next";
const resumeItem1 = [
    {
        h4:"Bachelor of Computer Sicence in Kabul Politachnic University",
        h5:"2019 - 2020",
        p1:"Engineering University in Kabul, Afghanistan",
        p2:"I was adle to successfully complete tow years of my studies in network engineering department of this university with many achievements and get good grades"
      },
      {
        h4:"Bachelor of Computer Sicence in Herat University",
        h5:"2020 - recent",
        p1:"university in Herat, Afghanistan",
        p2:"I was adle to successfully complete 1 years of my studies in network engineering department of this university with many achievements and get  an average grade of 87% , and also selected as intern at IT GEEKS of this university"
      }
  ];
const EducationInfo = () =>{
    const [t] = useTranslation("global");
    return(
        <>
            <h3 className="resume-title"> {t("resume.resumeTitle1")}</h3>
            {resumeItem1.map((item, index)=>{
            return(
                <ResumeItem1
                 key={index}
                 h4={t(`resumeData1.hfour${index+1}`)}
                 h5={t(`resumeData1.hfive${index+1}`)}
                 p1={t(`resumeData1.title${index+1}`)}
                 p2={t(`resumeData1.p${index+1}`)}>
                </ResumeItem1>
            )})
            }
        </>
    )
}
export default EducationInfo;