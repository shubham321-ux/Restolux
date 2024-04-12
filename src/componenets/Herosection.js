import React, { useEffect } from "react";
import './Herosection.css'
import { GoTriangleRight } from "react-icons/go";
import leaf from "../images/Hero.png"
import { FaArrowUp } from "react-icons/fa";
import chefimg from "../images/Hero-chf-hero.png"
 import { gsap } from "gsap";
 import { useRef } from "react";
 import { useGSAP } from "@gsap/react";
 

const Herosection = () => {
    gsap.registerPlugin(useGSAP);

const container = useRef();

 useGSAP(() => {
gsap.from(".title-div",{
    y:-200,
    duration:1,
    opacity:0,
})
gsap.from(".absolute-section",{
      x:200,
      duration:1,
      opacity:0
})
gsap.from(".section1",{
    scale:0,
    duration:1,
    opacity:0
})
gsap.from(".section2",{
    y:200,
    duration:1,
    opacity:0
})

})

    return (
        <>
            <div className="hero-main-div">
                <div className="title-div">
                    <h1>Authentic
                        Restaurant</h1>
                </div>
                <div className="image-content">
                    <div className="section1">
                        <div className="vedio-div">
                            <div className="resume-btn">
                                <GoTriangleRight className="play-btn" />
                            </div>
                        </div>
                    </div>
                    <div className="section2">
                        <div className="image-div">
                            <img src={leaf} />
                        </div>
                        <div className="text-div">
                            <h2>Exquisite Dining,
                                Unforgettable Moments</h2><br></br>
                            <p>Dive into a culinary adventure that tantalizes your taste buds and feeds your soul. Experience gastronomic magic</p>

                        </div>

                    </div>
                    <div className="section3">
                        
                        <div className="absolute-section">
                        <div className="chef"><img className="chef-img" src={chefimg}/></div>
                        <div className="explore-div">
                        <FaArrowUp className="arrow"/>
                        <p>EXPLORE</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Herosection;