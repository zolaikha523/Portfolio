import ResumeItem2 from "./ResumeItem2";
import { useTranslation } from "react-i18next";
const resumeItem2 = [
    {
        h4:"Intern at CTI ",
        h5:"2021 - Present",
        p1:"Code To Inspire",
        list1:"Teame work on a Car Store project and work with other student on their problems",
        list2:"work on portfolio project as midterm exam",
        list3:"Working hard to learn complex React issues and successfully complete exercise and projects",
        list4:"pass quizzes and exams successfully"
      },
      {
        h4:"student at ICDL Online Issentials ",
        h5:"2021 - Present",
        p1:"Social Development and Research for all U.S.A",
        list1:"successfully obtained a certificate with an average of 93% from the Browser & Outlook program",
        list2:"successfully obtained a certificate with an average of 98% from the Word program",
        list3:"successfully obtained a certificate with an average of 90% from the Excel program",
        list4:"successfully obtained a certificate with an average of 100% from the Powerpoint program"
  
      }
  ];
const RightResumeContent = () =>{
    const [t] = useTranslation("global");
    return(
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
        <h3 className="resume-title">{t("resume.resumeTitle2")}</h3>
        {resumeItem2.map((item, index)=>{
          return(
            <ResumeItem2
            key={index}
            h4={t(`resumeData2.hfour${index+1}`)}
            h5={t(`resumeData2.hfive${index+1}`)} 
            p1={t(`resumeData2.p${index+1}`)} 
            list1={t(`resumeData2.listOne${index+1}`)} 
            list2={t(`resumeData2.listTow${index+1}`)} 
            list3={t(`resumeData2.listTree${index+1}`)} 
            list4={t(`resumeData2.listFour${index+1}`)}>
            </ResumeItem2>
          )})
         }
      </div>
    )
}
export default RightResumeContent ;