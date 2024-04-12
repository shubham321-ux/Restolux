import React from "react";
import './AboutPage.css'
import Header from "./Header";
import { TiTick } from "react-icons/ti";
import counterimg1 from '../images/counter-img1.png'
import counterimg2 from '../images/counter-image2.png'
import { useEffect } from "react";
import Aboutus from "./Aboutus";
import Food from "./Food";
import Footer from "./Footer";
import  gsap  from "gsap";
 import { useRef } from "react";
 import { useGSAP } from "@gsap/react";
 import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP);

const AboutPage = () => {
    const maintexttRef=useRef(null)
   const maintextt2Ref=useRef(null)
    useGSAP(()=>{
   const maintextt=maintexttRef.current
   const maintextt2=maintextt2Ref.current
   gsap.from(maintextt, {
    y:-80,
    opacity:0,
    duration: 1,
    scrollTrigger:{
        trigger:maintextt,
        markers:false,
        start:"top 80%"
    }  
  });
  gsap.from(maintextt2, {
    y:-50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:maintextt2,
        markers:false,
        start:"top 80%"
    }  
  });
    })


    useEffect(() => {
        let counterActivated = false;
        const handleScroll = () => {
            const counterElements = document.querySelectorAll('.number');
            const windowHeight = window.innerHeight;
            const scrollTop = window.scrollY;
            if (!counterActivated) {
                counterElements.forEach((element) => {
                    const elementTop = element.getBoundingClientRect().top + scrollTop;
                    const dataCount = parseInt(element.getAttribute('data-count'), 10);
                    const elementInView = elementTop - windowHeight < scrollTop;
                    if (elementInView) {
                        const duration = 3000;
                        const startCount = 0;
                        const stepSize = 50; // Change step size as needed
                        let currentCount = startCount;
                        const increment = (dataCount - startCount) / (duration / stepSize);
                        const counterInterval = setInterval(() => {
                            currentCount += increment;
                            element.textContent = Math.floor(currentCount);
                            if (currentCount >= dataCount) {
                                clearInterval(counterInterval);
                                element.textContent = dataCount;
                            }
                        }, stepSize);
                        counterActivated = true;
                    }
                });
            }
        };
        let counterAct = false;
        const handleScroller = () => {
            const counterElements = document.querySelectorAll('.number2');
            const windowHeight = window.innerHeight;
            const scrollTop = window.scrollY;
            if (!counterAct) {
                counterElements.forEach((element) => {
                    const elementTop = element.getBoundingClientRect().top + scrollTop;
                    const dataCount = parseInt(element.getAttribute('data-count'), 10);
                    const elementInView = elementTop - windowHeight < scrollTop;
                    if (elementInView) {
                        const duration = 3000;
                        const startCount = 0;
                        const stepSize = 50;
                        let currentCount = startCount;
                        const increment = (dataCount - startCount) / (duration / stepSize);
                        const counterInterval = setInterval(() => {
                            currentCount += increment;
                            element.textContent = Math.floor(currentCount);
                            if (currentCount >= dataCount) {
                                clearInterval(counterInterval);
                                element.textContent = dataCount;
                            }
                        }, stepSize);
                        counterAct = true;
                    }
                });
            }
        };
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleScroller);
        return () => window.removeEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroller);
    }, []);

    return (
        <>
            <Header />
            <div className="about-page-first-div">
                <div className="content-box1">
                    <h1 ref={maintexttRef}>About Us</h1>
                    <p ref={maintextt2Ref}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
            </div>
            <div className="about-page-second-div">
                <div className="content1">
                    <p>WE ARE THE BEST </p>
                    <h1>The Excellence, Innovation, Trust!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <div className="right-logo-div">
                        <div className="right-logo-inner">
                            <div className="logo-inner"><TiTick className="logo-style" /></div>
                            <p>professional</p></div><div className="right-logo-inner">
                            <div className="logo-inner"><TiTick className="logo-style" /></div>
                            <p>Latest Technology</p></div></div>

                    <div className="right-logo-div">
                        <div className="right-logo-inner">
                            <div className="logo-inner"><TiTick className="logo-style" /></div>
                            <p>Experience Team</p>
                        </div><div className="right-logo-inner">
                            <div className="logo-inner"><TiTick className="logo-style" /></div>
                            <p>Award Winning</p>
                        </div></div>

                    <button>Make Appoinment</button>
                </div>
                <div className="content2">
                    <div className="counter-div1">
                        <div className="counter-div1-inner-image"><img src={counterimg1} /></div>
                        <div className="show-counter1"><h1 className="number" data-count="1356">0<span>+</span></h1>
                            <p>Happy Customers</p></div>
                    </div>
                    <div className="counter-div2">
                        <div className="show-counter2"><h1 className="number2" data-count="79">0<span>+</span></h1>

                            <p>Branch Restaurant</p></div>
                        <div className="counter-div1-inner-image"><img src={counterimg2} /></div>
                    </div>
                </div>

            </div>
            <Aboutus />
            <Food />
            <Footer />
        </>
    )

}
export default AboutPage;