import './portfolio.css'
import  { useEffect } from 'react';
import GLightbox from 'glightbox/dist/js/glightbox';
import 'glightbox/dist/css/glightbox.css';
const PortfolioItem = (props) =>{
  useEffect(() => {
     GLightbox({
      selector: '.glightbox',
    
    }); 
  }, []);
return(
      <div className="col-lg-4 col-md-6 portfolio-item" category={props.category}>
        <div className="portfolio-wrap">
          <img src={props.img} className="img-fluid" alt=""></img>
          <div className="portfolio-links">
          <a href={props.img} className="glightbox"><i className="bx bx-plus"></i></a>
            <button className="portfolio-button" title="More Details" onClick={()=>props.openModal(props.id)}>
              <i className="bx bx-link"></i>
            </button>
          </div>
        </div>
      </div>
  )
}
export default PortfolioItem;