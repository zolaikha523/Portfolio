import PortfolioFilter from './PortfolioFilter';
import './portfolio.css';
import PortfolioItem from './portfolioItem';
import React, {useState} from 'react';
import PortfolioSectionTitle from "./PortfolioSectionTitle";
const Portfolio = ({portfolioData, openModal}) =>{
  const [items, setItems] = useState(portfolioData);
  const filterItem = (catItem) =>{
    const updatedItem = portfolioData.filter((elem)=>{
      return elem.cat === catItem;
    })
    setItems(updatedItem);
  }
  return(
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
          <PortfolioSectionTitle/>
          <PortfolioFilter filterItem={filterItem} setItems={setItems} portfolioData={portfolioData}/>
          <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
              {items.map((item)=> {
               return <PortfolioItem 
                      key={item.id} 
                      img={item.img} 
                      id={item.id} 
                      openModal={openModal} 
                      img1={item.img1} 
                      category={item.cat}
                     />
              })}
          </div>
      </div>
    </section>
  );
}
export default Portfolio;
