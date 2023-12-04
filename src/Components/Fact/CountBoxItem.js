import CountUp from 'react-countup';
const CountBoxItem = ({dataAosDelay,imojeClass,end,p1,p2, onCounter}) =>{
  return(
    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay={dataAosDelay}>
        <div className="count-box">
            <i className={imojeClass}></i>
            { onCounter && <CountUp className="CountUp-number" strat={0} end={end} duration={1.5}  delay={0}/>}
            <p><strong>{p1}</strong>{p2}</p>
        </div>
    </div>
  )
}
export default CountBoxItem;