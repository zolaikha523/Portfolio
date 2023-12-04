import './resume.css';
import LeftResumeContent from "./leftResumeContent";
import RightResumeContent from "./RightResumeContent";
import ResumeSectionTitle from "./ResumeSectionTitle";
const Resume = () =>{
 return(
    <section id="resume" className="resume">
      <div className="container">
        <div className="row">
          <ResumeSectionTitle/>
          <LeftResumeContent/>
          <RightResumeContent/>
        </div>

      </div>
    </section>
 )
}
export default Resume;