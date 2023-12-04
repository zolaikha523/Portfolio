const InfoItem = (props) =>{
    return(
     <div className={props.className}>
        <i className={props.iconClassName}></i>
        <h4>{props.h4}</h4>
        <p>{props.p}</p>
      </div> 
    )
}
export default  InfoItem;