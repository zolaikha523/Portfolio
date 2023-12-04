import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'aos/dist/aos.css';
import './fact.css';
import  FactScrollTrigger from "./ScrollTrigger";
import FactSectionTitle from "./FactSectionTitle";
const Fact = () =>{
    return( 
      <section id="facts" className="facts">
        <div className="container">
          <FactSectionTitle/>
          <FactScrollTrigger/>
        </div>
      </section>     
    )
}
export default Fact ;