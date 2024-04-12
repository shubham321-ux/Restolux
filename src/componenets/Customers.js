import React from "react";
import './Customers.css'
import people1 from '../images/people1.png'
import people2 from '../images/people2.png'
import people3 from '../images/people3.png'
import { FaStar } from "react-icons/fa";
 import  gsap  from "gsap";
 import { useRef } from "react";
 import { useGSAP } from "@gsap/react";
 import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP);


const Customers = () => {

    const textheadRef=useRef(null)
    const cus1Ref=useRef(null)
    const cus2Ref=useRef(null)
    const cus3Ref=useRef(null)



    useGSAP(()=>{
        const texthead=textheadRef.current
        const cus1=cus1Ref.current
        const cus2=cus2Ref.current
        const cus3=cus3Ref.current


        gsap.from(texthead, {
          x:-200,
          opacity:0,
          duration: 1,
          scrollTrigger:{
              trigger:texthead,
              markers:false,
              start:"top 100%"
          }  
        });

        gsap.from(cus1, {
            x:400,
            opacity:0,
            duration: 1,
            scrollTrigger:{
                trigger:cus1,
                markers:false,
                start:"top 90%"
            }  
          });

          gsap.from(cus2, {
            scale:0,
            opacity:0,
            duration: 1,
            scrollTrigger:{
                trigger:cus2,
                markers:false,
                start:"top 100%"
            }  
          });

          gsap.from(cus3, {
            x:-400,
            opacity:0,
            duration: 1,
            scrollTrigger:{
                trigger:cus3,
                markers:false,
                start:"top 90%"
            }  
          });

    })
    return (
        <>
            <div className="main-customers-div">
                <div className="customers-title">
                    <div className="customers-heading" ref={textheadRef}>
                        <h1>What our<br />
                            customers say</h1>
                    </div>
                    <div className="customers-details">
                        <p>Lorem ipsum dolor sit amet consectetur. Sed tincidunt tellus aliquet at. Faucibus non et nunc ultricies sollicitudin.</p>
                        <a href="#">Learn more</a>
                    </div>
                </div>
                <div className="customers-all-details">
                    <div className="customer" ref={cus1Ref}>
                        <div className="customer-pic">
                            <img src={people1}></img>
                        </div>
                        <div className="rating">
                            <div className="texting-section">
                                <h2>Awesome!</h2>
                                <p>Lorem ipsum dolor sit amet consectetur. Sed tincidunt tellus aliquet at. Faucibus non et nunc ultricies sollicitudin.</p>
                            </div>
                            <div className="texting-logo">
                                <div className="customer-logo1">
                                    <h4>John Simin</h4>
                                    <p>manager</p>
                                </div>
                                <div className="customer-logo2">
                                    <FaStar className="star"/>
                                    <h2>4.1</h2>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="customer" ref={cus2Ref}>
                    <div className="customer">
                        <div className="customer-pic">
                            <img src={people2}></img>
                        </div>
                        <div className="rating">
                            <div className="texting-section">
                                <h2>Awesome!</h2>
                                <p>Lorem ipsum dolor sit amet consectetur. Sed tincidunt tellus aliquet at. Faucibus non et nunc ultricies sollicitudin.</p>
                            </div>
                            <div className="texting-logo">
                                <div className="customer-logo1">
                                    <h4>Silly Sywini</h4>
                                    <p>manager</p>
                                </div>
                                <div className="customer-logo2">
                                    <FaStar className="star"/>
                                    <h2>4.1</h2>
                                </div>

                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="customer" ref={cus3Ref}>
                    <div className="customer">
                        <div className="customer-pic">
                            <img src={people3}></img>
                        </div>
                        <div className="rating">
                            <div className="texting-section">
                                <h2>Awesome!</h2>
                                <p>Lorem ipsum dolor sit amet consectetur. Sed tincidunt tellus aliquet at. Faucibus non et nunc ultricies sollicitudin.</p>
                            </div>
                            <div className="texting-logo">
                                <div className="customer-logo1">
                                    <h4>Stephanie lolly</h4>
                                    <p>manager</p>
                                </div>
                                <div className="customer-logo2">
                                    <FaStar className="star"/>
                                    <h2>4.1</h2>
                                </div>

                            </div>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Customers;