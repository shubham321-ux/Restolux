import React from "react";
import './App.css'
import Header from "./componenets/Header";
import Herosection from "./componenets/Herosection";
import Aboutus from "./componenets/Aboutus";
import Ourmenu from "./componenets/Ourmenu";
import Customers from "./componenets/Customers";
import Chef from "./componenets/Chef";
import Food from "./componenets/Food";
import Footer from "./componenets/Footer";
import Form from "./componenets/Form";
import AboutPage from "./componenets/AboutPage";
import { BrowserRouter, Routes, Route } from "react-router-dom"
const Home=()=>{
   const scroll=(id)=>{
    const ele=document.getElementById(id)
    if(ele){
        ele.scrollIntoView({behavior:'smooth'})
    }
   }
 return (
  <>


  <Header scrl={scroll}/>
  <Herosection/>
  <Aboutus/>
  <Ourmenu />
  <Customers/>
  <Chef />
  <Food/>
  <Form/>
  <Footer/>
  </>
 )
}

export default Home