const Progress = (props) =>{
 return( 
    <div className="progress">
      <span className="skill">{props.text}<i className="val">{props.value}</i></span>
      <div className="progress-bar-wrap">
        <div className={`progress-bar ${props.isVisible? props.className:''}`}></div>
      </div>
    </div>
 )
}
export default Progress;