import { useTranslation } from "react-i18next";
const aboutList1Data = [
    {
      p:"Birthday:",
      info:"4, May, 2000"
    },
    {  p:"Website:",
       info:"www.portfolio.com"
    },
    {  p:"Phone:",
       info:"0792882715"
    },
    {  p:"City:",
       info:"Herat, Afghanistan"
    }
  ];
const AboutRightList = () => {
    const [t] = useTranslation("global") ;
    return(
        <div className="col-lg-6">
            <ul>
                { aboutList1Data.map((list, index)=>{
                    return(<li key={index}><i className="bi bi-chevron-right"></i> <strong>{t(`RightList.p${index+1}`)}</strong> <span>{t(`RightList.info${index+1}`)}</span></li>)}
                )}
            </ul> 
       </div>
    )
}
export default AboutRightList;