import React , {useRef} from 'react'
import { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import emailjs from 'emailjs-com';
import './Contact.css'


const Result = () =>{
  return (
    <p>Your Message has been successfully sent.I will contact you soon</p>
  )
};

const Contact = () => {
  const form = useRef();
  const [result,showresult]=useState(false);
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7eb5qkp','template_j42rews', form.current ,'57Ol8OjHMzlnAz1Cr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showresult(true);
  };

  setTimeout (() => {

      showresult(false);
  },5000);
   
    
  return (
    <section className="contact" id="connect">
     
        <Row className="align-items-center all">
          <Col  size={12} md={6}>
             <div className='animate__animated'>
                <img  src="https://raw.githubusercontent.com/judygab/web-dev-projects/e17c7bbf4d4d4de447ca1211b06aec66912e695d/personal-portfolio/src/assets/img/contact-img.svg" width={500} alt="Contact Us"/>
              
                </div>
          </Col>
          <Col  size={12} md={6}>
            
               
                <h2 className='title'>Get In Touch</h2>
                <form ref={form} action='' onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name='firstname' placeholder="First Name" required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name = 'lastname' placeholder="Last Name" required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name='email' placeholder="Email Address" required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name='phone' placeholder="Phone No." required/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="12" name='message' placeholder="Message" required></textarea>
                      <button  className='button' type="submit"><span>Submit</span></button>
                    </Col>
                    {
                       <div className='row'>{result ? <Result /> :null}</div>
                    }
                  </Row>
                </form>
            
          </Col>
        </Row>
      
    </section>
  )
}

export default Contact