import React, { useState } from 'react';
import './Header.css';
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { Outlet, Link } from "react-router-dom";
import AboutPage from './AboutPage';
import { IoIosArrowDown } from "react-icons/io";


const Header = (props) => {
    // const page=document.getElementById("pageHover")
    // page.addEventListener('mouseover',()=>{
    //       document.getElementById("moveablediv").style.display="block"
    // })


    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const[reddiv,setreddiv]=useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setreddiv(!reddiv)
    };

   

    return (
        <>
            <div className='mainNav'>

                <div className='nav'>
                    <div className='title'><h1>Restolux</h1></div>
                    <div className='wrap'>
                        <div className='info'>
                            <div className='icon'><CiMail className='reactIcon' /></div>
                            <div className=''><h4>Email:</h4><p>Info@service.com</p></div>
                        </div>
                        <div className='info'>
                            <div className='icon'><FaPhoneAlt className='reactIcon' /></div>
                            <div className=''><h4>Emergency Call:</h4><p>(123) 456-7890</p></div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='nextNav'>

                <div className='hamburger' onClick={toggleMenu} >
                    <IoIosMenu className='menulogo' />
                </div>

                <div className={`links ${isMenuOpen ? 'open' : ''}`}>
                    <p className="hiden" onClick={toggleMenu}>X</p>
                   <div className={`inner-hidden-div ${isMenuOpen ? 'open2' : ''}`}>
                   <Link to="/" className='active'>Home</Link>
                    <Link to="/about" className='active'>About</Link>
                    <Link to="/service" className='active'>Service</Link>
                    <div className="hover-page"><p>Page</p><IoIosArrowDown className='rotate-arrow' />
                        <div className='absolute-move-div'>
                            <Link className='link-style' to="/">Home</Link>
                            <Link className='link-style' to="/about">About</Link>
                            <Link className='link-style' to="/service">Service</Link>
                            <Link className='link-style' to="" >Our Menu</Link>
                            <Link className='link-style' to="">Team</Link>
                        </div>
                    </div>
                   </div>
                    
                </div>
                
                <div className='contactButton'><button>Contact Us</button></div>
            </div>
        </>
    );
};

export default Header;
