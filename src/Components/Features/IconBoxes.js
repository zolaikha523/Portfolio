import  iconBoxData from './IconBoxData';
import IconBox from './IconBox';
import { useTranslation } from "react-i18next";
const IconBoxes = () =>{
    const [t] = useTranslation("global");
    return(
        <div className="row">
            {
                iconBoxData.map((item, index)=>{
                    return(
                        <IconBox key={index} dataAosDelay={item.dataAosDelay} iconClass={item.iconClass} title={t(`feature.iconboxTitle${index+1}`)} description={t(`feature.iconboxDescrition${index+1}`)}></IconBox>
                    )
                })
            }
          </div>
    )
}
export default IconBoxes;