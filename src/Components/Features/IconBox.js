const IconBox = (props) =>{
    return(
        <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay={props.dataAosDelay}>
            <div className="icon"><i className={props.iconClass}></i></div>
            <h4 className="title"><a href="#hero">{props.title}</a></h4>
            <p className="description">{props.description}</p>
        </div>
    )
}
export default IconBox;