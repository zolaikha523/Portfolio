import { useTranslation } from "react-i18next";
import './testmintioal.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import swiperSlideData from "./SwiperSlideData";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
// import required modules
import { Autoplay, Pagination} from 'swiper/modules';
import SwiperSectionTitle from "./SwiperSectionTitle";;

const Testmintioal =() =>{
 const [t] = useTranslation("global");
 return(
    <section id="testimonials" className="testimonials section-bg">
      <div className="container">
        <SwiperSectionTitle/>
        <Swiper
        modules={[Pagination, Autoplay]}
        
          speed={600}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          slidesPerView='1'
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 'auto',
              spaceBetween: 20
            },
            1200: {
              slidesPerView: '1',
              spaceBetween: 30
            }
          }}
          className="testimonials-slider"
          data-aos="fade-up"
          data-aos-delay="100">

            { swiperSlideData.map((item, index)=>{
                return( <SwiperSlide key={index}>
                    <div className="testimonial-item" data-aos={item.dataAos} data-aos-delay={item.dataAosDelay}>
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            {t(`testimonials.feedback${index+1}`)}
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <img src={item.img} className="testimonial-img" alt=""></img>
                        <h3>{t(`testimonials.name${index+1}`)}</h3>
                        <h4>{t(`testimonials.posation${index+1}`)}</h4>
                    </div>
                </SwiperSlide>
              )})
            }
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
   </section>
 )
}
export default Testmintioal;