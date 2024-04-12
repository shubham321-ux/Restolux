import React from "react";
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Footer=()=>{
    
   
return(
    <>
    <div className="footer-div">
        <div className="footer-title">
            <h1>Restolux</h1>
        </div>
        <div className="other-details">
            <div className="footer-section1">
                <h2>Company</h2>
               <a href="#">Home</a>
               <a href="#">About us</a>
               <a href="#">Pricing</a>
               <a href="#">Contact us</a>
               <a href="#">Blog</a>
            </div>
            <div className="footer-section2">
            <h2>Product</h2>
               <a href="#">Template get Started</a>
               <a href="#">Style Guide</a>
               <a href="#">Changelog</a>
               <a href="#">Licence</a>
               <a href="#">More</a>
            
            </div>
            <div className="footer-section3">
                <h2>Contact us</h2>
                <p>info@support.com</p>
                <p>+(0361) 234 567</p>
                <p>Sunset Road Denpasar, Bali</p>
                <div className="logo-div">
                    <a href="#" ><div className="logo-container"><FaFacebook className="footer-icon"/></div></a> 
                    <a href="#" ><div className="logo-container"><FaInstagram className="footer-icon"/></div></a> 
                    <a href="#" ><div className="logo-container"><FaTwitter className="footer-icon"/></div></a> 
                    <a href="#" ><div className="logo-container"><FaLinkedin className="foote-icon"/></div></a> 
                </div>
            </div>
        </div>
    </div>
    </>
)
}

export default Footer;