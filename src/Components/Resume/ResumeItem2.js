const ResumeItem2 = (props) =>{
    return(
        <div className="resume-item">
            <h4>{props.h4} </h4>
            <h5>{props.h5}</h5>
            <p><em>{props.p1} </em></p>
            <ul>
                <li>{props.list1}</li>
                <li>{props.list2} </li>
                <li>{props.list3}</li>
                <li>{props.list4}</li>
            </ul>
        </div>
    )     
}
export default ResumeItem2;