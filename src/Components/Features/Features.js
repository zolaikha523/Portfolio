import './features.css';
import IconBoxes from "./IconBoxes";
import FeatureSectionTitle from "./FeatureSectionTitle";
const Features = () =>{
    return(
      <section id="features" className="features">
        <div className="container">
          <FeatureSectionTitle/>
          <IconBoxes/>
        </div>
    </section>
    )
}
export default Features ;
