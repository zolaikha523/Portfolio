import Progress from "./Progress";
const progressData2 =[
    {
      text:"PHP",
      value:"60%",
      className:"animate4"
    },
    {
      text:"react",
      value:"80%",
      className:"animate5"
    },
    {
      text:"bootstrap",
      value:"90%",
      className:"animate6"
    }
];
const RightProgress = ({isVisible}) =>{
    return(
        <div className="col-lg-6" data-aos="fade-up">
            {progressData2.map((item, index)=>{
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
export default RightProgress;