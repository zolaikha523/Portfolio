const ResumeItem1 = (props) =>{
    return(
        
        <div className="resume-item">
            <h4>{props.h4}</h4>
            <h5>{props.h5}</h5>
            <p><em>{props.p1}</em></p>
            <p>{props.p2}</p>
        </div>
    )     
}
export default ResumeItem1;