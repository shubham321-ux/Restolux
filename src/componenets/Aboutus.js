import React, { useEffect } from "react";
import './Aboutus.css'
import glass from '../images/about-glass.png'
import Frice from '../images/Frice.png'
import Plate from '../images/Foreground.png'
import Arrow from '../images/Arrow.png'
import  gsap  from "gsap";
 import { useRef } from "react";
 import { useGSAP } from "@gsap/react";
 import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP);

const Aboutus = () => {
    const imgRef=useRef(null)
    const titleRef=useRef(null)
    const FriceRef=useRef(null)
    const plateRef=useRef(null)
    useGSAP(()=>{
        const el=imgRef.current
        
  gsap.from(el, {
    x:-200,
    opacity:0,
    duration: 1,
    scrollTrigger:{
        trigger:el,
        markers:false,
        start:"top 30%"
    }
    
  });
    });

    useGSAP(()=>{
        const title=titleRef.current
        gsap.from(title, {
            y:-200,
            opacity:0,
            duration: 1,
            scrollTrigger:{
                trigger:title,
                markers:false,
                start:"top 30%"
            }
            
          });
    })


    useGSAP(()=>{
        const plate=plateRef.current
        gsap.from(plate, {
            x:200,
            opacity:0,
            duration: 1,
            scrollTrigger:{
                trigger:plate,
                markers:false,
                start:"top 60%"
            }
            
          });
    })

    useGSAP(()=>{
        const Frice=FriceRef.current
        gsap.from(Frice, {
            y:200,
            opacity:0,
            duration: 1,
            scrollTrigger:{
                trigger:Frice,
                markers:false,
                start:"top 110%"
            }
            
          });
    })

    return (<>
        <div className="aboutus-div">
            <div className="under-div">
                <img className="glasss" src={glass} ref={imgRef}/>
                <div className="aboutus-text" ref={titleRef}>
                    <h2>About us</h2>
                    <h1>A Legacy of
                        Flavors</h1>
                    <button>Click here</button>
                </div>
                <div className="extra-contenet">
                    <div className="container1">
                        <div className="arrow"><img src={Arrow}/></div>
                        <div className="text-container">
                            <p>FOUNDED IN [YEAR], [YOUR RESTAURANT’S NAME] STANDS AS A BEACON OF CULINARY EXCELLENCE. OUR JOURNEY BEGAN IN [CITY/PLACE], DRAWING INSPIRATION FROM THE CITY’S RICH CULTURE AND HERITAGE. TODAY, WE BLEND TRADITIONAL TECHNIQUES WITH MODERN FLAIR, CRAFTING DISHES THAT TELL A STORY — A STORY OF PASSION, LOVE, AND DEDICATION TO THE ART OF COOKING.</p>
                        </div>
                    </div>
                    <div className="container2" ref={FriceRef}>
                        <img src={Frice} />
                    </div>
                    <div className="container3" ref={plateRef}>
                       <div className="plate-div"><img className="plate" src={Plate} /></div> 
                    </div>

                </div>
            </div>
        </div>

    </>)

}
export default Aboutus