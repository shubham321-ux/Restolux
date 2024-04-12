import React from "react";
import './Ourmenu.css'
import plate1 from '../images/plate1.png'
import plate2 from '../images/plate2.png'
import plate3 from '../images/plate3.png'
import  gsap  from "gsap";
 import { useRef } from "react";
 import { useGSAP } from "@gsap/react";
 import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP);


const Ourmenu = () => {
    const textRef=useRef(null)
    const food1Ref=useRef(null)
    const food2Ref=useRef(null)
    const food3Ref=useRef(null)
    useGSAP(()=>{
        const text=textRef.current
        const food1=food1Ref.current
        const food2=food2Ref.current
        const food3=food3Ref.current


        gsap.from(text, {
          y:200,
          opacity:0,
          duration: 1,
          scrollTrigger:{
              trigger:text,
              markers:false,
              start:"top 60%"
          }  
        });

        gsap.from(food1, {
            x:400,
            opacity:0,
            duration: 1,
            scrollTrigger:{
                trigger:food1,
                markers:false,
                start:"top 70%"
            }  
          });

          gsap.from(food2, {
            scale:0,
            opacity:0,
            duration: 1,
            scrollTrigger:{
                trigger:food2,
                markers:false,
                start:"top 100%"
            }  
          });

          gsap.from(food3, {
            x:-400,
            opacity:0,
            duration: 1,
            scrollTrigger:{
                trigger:food2,
                markers:false,
                start:"top 80%"
            }  
          });

    })
    
    return (
        <>
            <div className="main-menu-container">

                <h2 className="heading">OUR SPECIAL MENU</h2>
                <div className="flavors">

                    <div className="text-container" ref={textRef}><h1>A Symphony
                        of Flavors</h1></div>
                </div>

                <div className="tree-divs">
                    <div className="div1" ref={food1Ref}>
                        <div className="plate1" >
                            <div className="pricetag"><h2>$20</h2></div>
                            <img src={plate1} />
                        </div>

                        <div className="content-box">
                            <h2>FRIED RICE SPECIAL</h2>
                            <p>Lorem ipsum dolor sit amet
                                consectetur. Sed tincidunt
                                tellus aliquet at.</p>
                                <a href="#">Learn more</a>
                        </div>
                    </div>
                    <div className="div2" ref={food2Ref}>
                    <div className="plate2">
                    <div className="pricetag2"><h2>$20</h2></div>
                            <img src={plate2} />
                        </div>

                        <div className="content-box2">
                            <h2>FRIED RICE SPECIAL</h2>
                            <p>Lorem ipsum dolor sit amet
                                consectetur. Sed tincidunt
                                tellus aliquet at.</p>
                                <a href="#">Learn more</a>
                        </div>
                    </div>
                    <div className="div3" ref={food3Ref}>
                    <div className="plate1">
                    <div className="pricetag"><h2>$20</h2></div>
                            <img src={plate3} />
                        </div>

                        <div className="content-box">
                            <h2>FRIED RICE SPECIAL</h2>
                            <p>Lorem ipsum dolor sit amet
                                consectetur. Sed tincidunt
                                tellus aliquet at.</p>
                                <a href="#">Learn more</a>
                        </div>
                        
                    </div>
                </div>
            </div>

        </>
    )
}
export default Ourmenu;