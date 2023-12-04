import './socialLinks.css';
const headerList1Data = [
    {
        className:"github",
        emojeClassName:"bi bi-github",
        href:"https://github.com/zolaikha523"
      
    },
    {   className:"twitter",
        emojeClassName:"bx bxl-twitter",
        href:"https://twitter.com/Z_Noorzai11"
    },
    {  className:"telegram",
       emojeClassName:"bx bxl-telegram",
       href:"https://telegram.org/dl"
    },
    {  className:"whatsapp",
       emojeClassName:"bx bxl-whatsapp",
       href:"https://wa.me/0792882715"
    },
    {  className:"linkedin",
       emojeClassName:"bx bxl-linkedin",
       href:"https://www.linkedin.com/in/zolaikha-noorzai-6103862a0"
    }
  ];
const SocialLinks = () =>{
    return(
        <div className="social-links mt-3 text-center">
            {headerList1Data.map((link, index)=>{
                return(
                    <a href={link.href}
                    key={index} 
                    className={link.className}>
                    <i className={link.emojeClassName}></i>
                    </a>
                )
            })}

        </div>
            
    )
}
export default SocialLinks;