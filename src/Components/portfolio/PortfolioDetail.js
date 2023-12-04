import DeatailDiscrption from './DetailDiscription';
import DetailImage from './DetailImage';
import DetailInfo from './DetailInfo';
import portfolioDetails from './PortfolioDetailData';
const PortfolioDetail = ({selectedItem}) => {
    const detail = portfolioDetails.find(item => item.id === selectedItem);
    return(
        detail &&
        <section id="portfolio-details" className="portfolio-details" data-aos="zoom-in" data-aos-duration="500">
            <div className="container">
                <div className="row gy-4">
                    <DetailImage detail={detail}/>
                    <div className="col-lg-4">
                    <DetailInfo detail={detail}/>
                    <DeatailDiscrption detail={detail}/>
                    </div>
                </div>
            </div>
        </section>             
    )
}
export default PortfolioDetail;
