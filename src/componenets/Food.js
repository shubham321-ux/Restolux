import React from "react";
import './Food.css'
import foodimage1 from'../images/food-img1.png'
import foodimage2 from'../images/food-img2.png'
import foodimage3 from'../images/food-img3.png'
 import  gsap  from "gsap";
 import { useRef } from "react";
 import { useGSAP } from "@gsap/react";
 import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP);


const Food=()=>{

    const headRef=useRef(null)
    const slide1Ref=useRef(null)
    const slide2Ref=useRef(null)
    const slide3Ref=useRef(null)



    useGSAP(()=>{
        const head=headRef.current
        const slide1=slide1Ref.current
        const slide2=slide2Ref.current
        const slide3=slide3Ref.current


        gsap.from(head, {
          x:-200,
          opacity:0,
          duration: 1,
          scrollTrigger:{
              trigger:head,
              markers:false,
              start:"top 100%"
          }  
        });

        gsap.from(slide1, {
            y:300,
            opacity:0,
            duration: 1,
            scrollTrigger:{
                trigger:slide1,
                markers:false,
                start:"top 90%"
            }  
          });

          gsap.from(slide2, {
            
            opacity:0,
            duration: 2,
            backgroundColor:"white",
            scrollTrigger:{
                trigger:slide2,
                markers:false,
                start:"top 100%"
            }  
          });

          gsap.from(slide3, {
            y:-300,
            opacity:0,
            duration: 1,
            scrollTrigger:{
                trigger:slide3,
                markers:false,
                start:"top 90%"
            }  
          });

    })
 return (
    <>
    <div className="main-food-div">
        <div className="food-div1">
            <div className="food-div1-inner-div" ref={headRef}>
                <p>WHY CHOOSE US</p>
                <h1>Unrivaled Culinary Excellence</h1>
                <p>Where Tradition Meets Innovation for an Unforgettable Dining Experience</p>
                <div className="food-btn">
                    <p>Learn More</p>
                </div>
            </div>
        </div>


        <div className="food-div2">
            <div className="food-div2-inner-div" ref={slide1Ref}>
                <div className="food-detail-image"><img src={foodimage1}/></div>
                <div className="food-detail-text">
                    <h2>Time-Honored Recipes</h2>
                    <p>Our menu is a testament to age-old recipes 
                        passed down through generations. Each dish carries a rich history,
                         a tale of love, and a sprinkle of culture.</p>
                </div>
            </div>


            <div className="food-div2-inner-div2" ref={slide2Ref}>
            <div className="food-detail-image"><img src={foodimage2}/></div>
                <div className="food-detail-text">
                    <h2>Time-Honored Recipes</h2>
                    <p>Our menu is a testament to age-old recipes 
                        passed down through generations. Each dish carries a rich history,
                         a tale of love, and a sprinkle of culture.</p>
                </div>
            </div>


            <div className="food-div2-inner-div" ref={slide3Ref}>
            <div className="food-detail-image3"><img src={foodimage3}/></div>
                <div className="food-detail-text">
                    <h2>Time-Honored Recipes</h2>
                    <p>Our menu is a testament to age-old recipes 
                        passed down through generations. Each dish carries a rich history,
                         a tale of love, and a sprinkle of culture.</p>
                </div>
            </div>
            

        </div>
    </div>
    </>
 )
}
export default Food;