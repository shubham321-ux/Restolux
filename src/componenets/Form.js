import React, { useState } from "react";
import './Form.css'
import  gsap  from "gsap";
 import { useRef } from "react";
 import { useGSAP } from "@gsap/react";
 import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP);

 const Form=()=>{
    const[data,setdata]=useState("")
    const form=document.getElementById("formdata")
    const datastore=()=>{
        form.addEventListener('submit',(e)=>{
            e.preventDefault()
            let store=new FormData(e.target)
            let storeddata=store.fromRnteries(store)
            setdata(storeddata)
            console.log(data)
        })
    }

    const headingRef=useRef(null)
    const formRef=useRef(null)
   


    useGSAP(()=>{
        const heading=headingRef.current
        const form=formRef.current
        

        gsap.from(heading, {
          y:-110,
       opacity:0,
          duration: 1,
          scrollTrigger:{
              trigger:heading,
              markers:false,
              start:"top 50%"
          }  
        });

        gsap.from(form, {
           scale:0,
            opacity:0,
            duration: 1,
            scrollTrigger:{
                trigger:form,
                markers:false,
                start:"top 90%"
            }  
          });


    })
return (

    <>
        <div className="main-form-div">
            <div className="form-title">
                <div ref={headingRef}>
                <h1 >RSVP NOW</h1>
                <p >Experience culinary delights without the wait.</p>
                </div>
            </div>
            <div className="form-content" ref={formRef}>
                <form id="formdata">
                    <label for="name-section">Reservation</label>
                    <input type="text" id="name-section"/>
                    <label for="reserve-section">Reserve</label>
                    <input list="drop-down" id="reserve-section" />
                    <datalist id="drop-down">
                        <option value="item1" />
                        <option value="item2" />
                        <option value="item3" />

                    </datalist>
                    <label for="booking-section">Reservation</label>
                    <input type="text" id="booking-section" />
                    <label for="additional-section">Reservation</label>
                    <input type="text" id="additional-section" />
                    <button  type="submit">Booking Now</button>
                </form>
            </div>

        </div>
    </>
)
}


export default Form;