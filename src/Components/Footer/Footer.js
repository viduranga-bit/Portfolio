import React from "react";
import "../../App.css";
import "./Footer.css";
import * as ReactBootStrap from "react-bootstrap";
import logo from "../../assests/logod.png";
function Footer(props) {
  
	
  return (
    

<footer class="footer">
<div class="container bottom_border">
<div class="row">
<div class=" col-sm-4 col-md col-sm-4  col-12 col">
<h5 class="headin5_amrc col_white_amrc pt2">Find Me</h5>

<p class="mb10"></p>
<p><i class="fa fa-location-arrow"></i> {props.footerdata[1]?.address} </p>
<p><i class="fa fa-phone"></i> {props.footerdata[1]?.mobileNo} </p>
<p><i class="fa fa fa-envelope"></i> {props.footerdata[1]?.email}  </p>


</div>


<div class=" col-sm-4 col-md  col-12 col brandname">
<a href='#' className='logo'>
                    <img src={logo} alt='logo' className='LOGO' width={230} />
                </a>
  <h1>Amith Viduranga Rathnayaka</h1>

</div>





<div class=" col-sm-4 col-md  col-12 col">
<h5 class="headin5_amrc col_white_amrc pt2">Follow Me</h5>


<ul class="footer_ul2_amrc">
<li><a href={props.footerdata[2]?.instagram}><i class="fab fa-instagram fleft padding-right"></i> </a><p>Follow me on Instagram :<a href={props.footerdata[2]?.instagram}>Instagram.com</a></p></li>
<li><a href={props.footerdata[2]?.instagram}><i class="fab fa-twitter fleft padding-right"></i> </a><p>Follow me on Twitter :<a href={props.footerdata[2]?.instagram}>twitter.com</a></p></li>
<li><a href={props.footerdata[2]?.instagram}><i class="fab fa-linkedin fleft padding-right"></i> </a><p>Connect with me on LinkedIn :<a href={props.footerdata[2]?.instagram}>LinkedIn.com</a></p></li>
</ul>

</div>
</div>
</div>


<div class="container">


<p class="text-center">Copyright {props.footerdata[0]?.year} | Designed With by <a href="#">Amith Viduranga</a></p>

<ul class="social_footer_ul">
<li><a href={props.footerdata[2]?.facebook}><i class="fab fa-facebook-f"></i></a></li>

<li><a href={props.footerdata[2]?.linkedin}><i class="fab fa-linkedin"></i></a></li>
<li><a href={props.footerdata[2]?.instagram}><i class="fab fa-instagram"></i></a></li>
<li><a href={props.footerdata[2]?.github}><i class="fab fa-github"></i></a></li>
<li><a href={props.footerdata[2]?.stackoverflow}><i class="fab fa-stack-overflow"></i></a></li>
</ul>

</div>

</footer>



  );
}
export default Footer;
