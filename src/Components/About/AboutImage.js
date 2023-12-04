import profileImg from '../../assets/images/profile-image.png';
import AnimatedSvg from '../AnimatedSVG';
const AboutImage = ({isDarkMode}) =>{
    return(
        <div className="col-lg-4" data-aos="fade-right">
           {isDarkMode ?<AnimatedSvg></AnimatedSvg> :<img src={profileImg} className="img-fluid" alt=""></img>}
        </div>
    )
}
export default AboutImage;