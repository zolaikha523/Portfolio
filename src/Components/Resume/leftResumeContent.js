import EducationInfo from "./EducationInfo";
import PersonalInfo from "./PersonalInfo";

const LeftResumeContent = () => {
  return(
    <div className="col-lg-6" data-aos="fade-up">
        <PersonalInfo/>
        <EducationInfo/>
    </div>
  )
}
export default LeftResumeContent;