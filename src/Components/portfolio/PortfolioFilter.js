const PortfolioFilter = ({filterItem, setItems, portfolioData}) =>{
 return(
    <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li  onClick={()=>setItems(portfolioData)}>All</li>
              <li  onClick={()=>filterItem('app')}>App</li>
              <li  onClick={()=>filterItem('card')}>Card</li>
              <li  onClick={()=>filterItem('web')}>Web</li>
            </ul>
          </div>
    </div>
 )
}
export default PortfolioFilter;