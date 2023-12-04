import Progress from "./Progress";
const progressData1 = [
    {
      text:"HTML",
      value:"100%",
      className:"animate1"
    },
    {
      text:"CSS",
      value:"90%",
      className:"animate2"
    },
    {
      text:"JavaScript",
      value:"75%",
      className:"animate3"
    }
];
const LeftProgress = ({isVisible}) =>{
    return(
        <div className="col-lg-6" data-aos="fade-up">
            {progressData1.map((item, index)=>{
                return(
                     <Progress
                     key={index} 
                     text={item.text} 
                     value={item.value} 
                     className={item.className} 
                     isVisible={isVisible}
                     />)
            })}

        </div>
    )
}
export default LeftProgress;