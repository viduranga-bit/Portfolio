import React from "react";
import "../../App.css";
import "./Footer.css";
import * as ReactBootStrap from "react-bootstrap";

function Footer(props) {
	
  return (
    <footer class="footer text-center">
       <div className="container">
		
		        <div className="row">
        <div className="col-md-4 mb-lg-0 align-self-center contact" >
							<div className="d-flex justify-content-center" style={{ marginBottom: '-50px', fontSize: '15px' }}>
								<i className="fa fa-phone" style={{ fontSize: '15px', marginRight: '15px' }}></i>
								{<p >{props.footerdata[1]?.footer}</p>}
							</div>
							<div className="d-flex justify-content-center" style={{ fontSize: '15px' }}>
								<i className="fa fa-envelope" style={{ fontSize: '15px', marginRight: '15px' }}></i>
								{ <p >{props.footerdata[0]?.facebook}</p> }
							</div>
						</div>

            <div className="col-md-4">
          </div>
          <div className="col-md-4 mb-lg-0">
            
            <ul className="list-inline">
								<li  className="list-inline-item">
									<a
										role="button"
										target="_blank"
										rel="noopener noreferrer"
							      href={props.footerdata[0]?.facebook}
									>
										<i className="fa fa-github"></i>
                     
									</a>
								</li>
                <li className="list-inline-item">
									<a
						
										role="button"
										target="_blank"
										rel="noopener noreferrer"
										href={props.footerdata[0]?.twitter}
									>
										<i className="fa fa-twitter" />
									</a>
								</li>
								<li className="list-inline-item">
									<a
									  
										role="button"
										target="_blank"
										rel="noopener noreferrer"
								    href={props.footerdata[0]?.linkedin}
									>
										<i className="fa fa-linkedin"></i>
									</a>
								</li>
								
								<li className="list-inline-item">
									<a
									
										role="button"
										target="_blank"
										rel="noopener noreferrer"
										href={props.footerdata[0]?.facebook}
									>
										<i className="fa fa-facebook" />
									</a>
								</li>
								<li className="list-inline-item">
									<a
							
										role="button"
										target="_blank"
										rel="noopener noreferrer"
									  href={props.footerdata[0]?.Instagram}
									>
										<i className="fa fa-instagram" />
									</a>
								</li>
							</ul>      
              
            </div>
          </div>
        </div>
        <div className="container">
        <div className="row justify-content-center">
           <div className="col-9 linee">

           </div>
       </div>
        <div className="row justify-content-center">
        <div className="col-auto">
          <p className="copy">© Copyright {props.footerdata[2]?.year}  Amith Viduranga,All Rights Reserved</p>
        </div>
        </div>
        </div>
    </footer>
  );
}
export default Footer;
