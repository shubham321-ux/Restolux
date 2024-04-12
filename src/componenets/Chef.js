import React from "react";
import './Chef.css'
import cheff1 from '../images/cheff1.png'
import cheff2 from '../images/cheff2.png'
import cheff3 from '../images/cheff3.png'


const Chef=()=>{
 return(
    <>
    <div className="main-chef-div">
        <div className="chef-title">
            <p>OUR CHEF</p>
        </div>
        <div className="chef-title2">
            <h1>A Symphony<br/>
            of Flavors</h1>
        </div>
        <div className="three-chef">
            <div className="chef-details">
                <div className="chef-image">
                    <img src={cheff1}/>
                </div>
                <div className="about-chef">
                    <h1>Iqbal Chef</h1>
                    <a href="#">Instagram</a>
                </div>
            </div>


            <div className="chef-details">
            <div className="chef-image2">
                    <img src={cheff2}/>
                </div>
                <div className="about-chef">
                    <h1>Iqbal Chef</h1>
                    <a href="#">Instagram</a>
                </div>
            </div>


            <div className="chef-details">
            <div className="chef-image">
                    <img src={cheff3}/>
                </div>
                <div className="about-chef">
                    <h1>Iqbal Chef</h1>
                    <a href="#">Instagram</a>
                </div>
            </div>
        </div>
    </div>
    </>
 )
}
export default Chef