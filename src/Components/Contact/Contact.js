import { useTranslation } from "react-i18next";
import React, { useRef, useState } from 'react'
import Info from './Info';
import './contact.css';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import ParticlesBackground from "../ParticlesBackground";
const formGroupData = [
  {
    className:"form-group col-md-6",
    label:"Your Name",
    type:"text",
    name:"name",
    id:"name",
    htmlFor:"name",
    value:"name"
  },
  {
    className:"form-group col-md-6",
    label:"Your Email",
    type:"email",
    name:"email",
    id:"email",
    htmlFor:"email",
    value:"email"
  } 
]
const Cantact = ({isDarkMode}) =>{
  const [t] = useTranslation("global");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [massage, setMassage] = useState("");

  const handleChangeData = (inentifire, value)=>{
      if(inentifire==="name") {
        setName(value);
       
      }
      else if(inentifire==="email") {
        setEmail(value);
      }
      else if(inentifire==="subject") {
        setSubject(value);
        console.log(subject);
      }
      else if(inentifire==="massage") {
        setMassage(value);
      }
  }
  const form = useRef();
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_gtgmp6r', 'template_wsga8eg', e.target, 'gfb3KGnNlysU3u_on')
      .then((result) => {
          setName("");
          setEmail("");
          setSubject("");
          setMassage("")
          Swal.fire({
            title: t("Swal.title"),
            text:  t("Swal.text"),
            icon: "success",
           
          }) 
          
      }, (error) => {
          Swal.fire({
            icon: "error",
            title: t("warningSwal.title"),
            text:  t("warningSwal.text"),
            showConfirmButton: true,
            confirmButtonColor:"#2eafec"
          });
      });

  }
  
    return(
      <section id="contact" className="contact">
         {isDarkMode && <ParticlesBackground/>  }
        <div className="container contact-container">

        <div className="section-title">
          <h2>{t("contact.title")}</h2>
          <p>{t("contact.para")}</p>
        </div>

        <div className="row" data-aos="fade-in">

          <div className="col-lg-5 d-flex align-items-stretch">
           <Info></Info>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">

            <form method="post" className="php-email-form contact-form" ref={form} onSubmit={sendEmail}>
              <div className="row">
                {formGroupData.map((item, index)=>{
                    return (
                        <div className={item.className} key={index}>
                        <label htmlFor={item.htmlFor}>{t(`contact.label${index+1}`)}</label>
                        <input type={item.type} name={item.name}  value={item.value === 'name' ? name : (item.value === 'email' ? email : '')} className="form-control" id={item.id} required 
                        onChange={(e)=> handleChangeData(item.name, e.target.value)}></input>
                        </div>
                    )
                })} 
              </div>
              <div className="form-group">
                <label htmlFor="name">{t("contact.subject")}</label>
                <input type="text" className="form-control" name="subject" id="subject" value={subject} required onChange={(e)=> handleChangeData("subject", e.target.value)}></input>
              </div>
              <div className="form-group">
                <label htmlFor="name">{t("contact.massage")}</label>
                <textarea className="form-control" name="message" rows="10" required value={massage}  onChange={(e)=> handleChangeData("massage", e.target.value)}></textarea>
              </div>
              <div className="text-center"><button type="submit">{t("contact.button")}</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    )
}
export default Cantact;