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
import Service from "./componenets/Service";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom"
const App=()=>{
 return (
  <>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/service" element={<Service/>}/>
  </Routes>
  </>
 )
}

export default App;