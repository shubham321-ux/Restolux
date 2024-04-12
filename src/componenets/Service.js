import React from "react";
import './Service.css'
import Header from "./Header";
import Food from "./Food";
import Footer from "./Footer";
import servicelogo1 from '../images/service-logo1.png'
import servicelogo2 from '../images/service-logo2.png'
import servicelogo3 from '../images/service-logo3.png'
import servicelogo4 from '../images/service-logo4.png'
import servicelogo5 from '../images/service-logo5.png'
import cheff from '../images/cheff2.png'
import  gsap  from "gsap";
 import { useRef } from "react";
 import { useGSAP } from "@gsap/react";
 import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP);




const Service = () => {
   const maintextRef=useRef(null)
   const maintext2Ref=useRef(null)
   const text1Ref=useRef(null)
   const button1Ref=useRef(null)
   const green1Ref=useRef(null)
   const green2Ref=useRef(null)
   const chefff1Ref=useRef(null)
   const chefff2Ref=useRef(null)
   const green3Ref=useRef(null)
   const green4Ref=useRef(null)
   useGSAP(()=>{
      const maintext=maintextRef.current
      const maintext2=maintext2Ref.current
       const text1=text1Ref.current
       const button1=button1Ref.current
       const green1=green1Ref.current
       const green2=green2Ref.current
       const chefff1=chefff1Ref.current
       const chefff2=chefff2Ref.current
       const green3=green3Ref.current
       const green4=green4Ref.current


       gsap.from(maintext, {
         y:-80,
         opacity:0,
         duration: 1,
         scrollTrigger:{
             trigger:maintext,
             markers:false,
             start:"top 80%"
         }  
       });
       
       gsap.from(maintext2, {
         y:-50,
         opacity:0,
         duration:1,
         scrollTrigger:{
             trigger:maintext2,
             markers:false,
             start:"top 80%"
         }  
       });

       gsap.from(button1, {
         y:70,
         opacity:0,
         duration: 1,
         scrollTrigger:{
             trigger:button1,
             markers:false,
             start:"top 80%"
         }  
       });
       
       gsap.from(text1, {
         y:70,
         opacity:0,
         duration: 1,
         scrollTrigger:{
             trigger:text1,
             markers:false,
             start:"top 70%"
         }  
       });

       gsap.from(green1, {
         x:-300,
         opacity:0,
         duration: 1,
         scrollTrigger:{
             trigger:green1,
             markers:false,
             start:"top 70%"
         }  
       });

       gsap.from(green2, {
           x:300,
           opacity:0,
           duration: 1,
           scrollTrigger:{
               trigger:green2,
               markers:false,
               start:"top 70%"
           }  
         });

         gsap.from(green3, {
           x:-300,
           opacity:0,
           duration: 1,
           smooth:1,
           scrollTrigger:{
               trigger:green3,
               markers:false,
               start:"top 50%"
           }  
         });

         gsap.from(green4, {
           x:300,
           opacity:0,
           duration: 1,
           scrollTrigger:{
               trigger:green4,
               markers:false,
               start:"top 50%"
           }  
         });
         gsap.from(chefff1, {
            y:-300,
            opacity:0,
            duration: 1,
            scrollTrigger:{
                trigger:chefff1,
                markers:false,
                start:"top 10%"
            }  
          });
          gsap.from(chefff2, {
            y:300,
            opacity:0,
            duration: 1,
            scrollTrigger:{
                trigger:chefff2,
                markers:false,
                start:"top 100%"
            }  
          });
 

   })



   return (
      <>
         <Header />
         <div className="about-page-first-div">
                <div className="content-box1">
                    <h1 ref={maintextRef}>Services</h1>
                    <p ref={maintext2Ref}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
            </div>
         <div className="service-title-div">
            <p>OUR SERVICE</p>
            <h1 ref={text1Ref}>A Symphony of Flavors</h1>
            <button ref={button1Ref}>Custom Service</button>
         </div>

         <div className="main-service-div">
            <div className="service-inner-div">
               <div className="service1" ref={green1Ref}>

                  <div className="service-img-div">
                     <img src={servicelogo1} />
                  </div>
                  <h2>Catering Service</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
               </div>

               
                  <div className="service1" ref={green3Ref}>

                     <div className="service-img-div">
                        <img src={servicelogo2} />
                     </div>
                     <h2>Catering Service</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                  </div>
            
            </div>


            <div className="service-inner-div2">
               <div className="service1" ref={chefff1Ref} >

                  <div className="service-img-div">
                     <img src={servicelogo5} />
                  </div>
                  <h2>Catering Service</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
               </div>

               <div className="inner-div2-chefimg" ref={chefff2Ref}>
                  <img src={cheff}/>
               </div>
            </div>



            <div className="service-inner-div">
               <div className="service1" ref={green2Ref}>

                  <div className="service-img-div">
                     <img src={servicelogo3} />
                  </div>
                  <h2>Catering Service</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
               </div>

               
                  <div className="service1" ref={green4Ref}>

                     <div className="service-img-div">
                        <img src={servicelogo4} />
                     </div>
                     <h2>Catering Service</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                  </div>
              
            </div>
         </div>
         <Food/>
         <Footer/>

      </>
   )
}
export default Service;