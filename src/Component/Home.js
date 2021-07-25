import React from 'react';
import styled from 'styled-components' 
import second from "./assets/Image/second.png"
import boy from './assets/Image/boy.png'
import  elephant from './assets/Image/elephant.png'
import HomeAbout from './HomeAbout'
import Footer from './Footer'

import Subscribe from './Subscribe'
export default function Home() {

    
  
    const TopText = styled.h6`
    font-weight: 400;
    letter-spacing: 2.5px;
    font-size: 26px;
    line-height: auto;
    `
    const SliderButton = styled.button `
    border: 3px solid #F8931F;
    padding: 8px;
    margin: 5px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;

    &:hover{
      background-color: white;
      color: #F8931F
    }

    `
    return (

    
      <> 
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner ">

    <div className="carousel-item active slides">
      <img src={second} className=" d-block w-100 img-fluid images " alt="first-carousel" />
      <div className="slider-caption d-md-block">
          <TopText>
      Don’t Be Afraid to Draw Without An Eraser 

          </TopText>
      <br/>
      <SliderButton >
        Get Started
      </SliderButton>
    
      </div>
  
    </div>

    <div className="carousel-item">
      <img src={boy} className="d-block w-100 img-fluid images " alt="second-carousel"/>
      <div className="slider-caption d-md-block">
      <TopText >
      Art is Where Work Meets Love.
      </TopText>
      <SliderButton >
        Get Started
      </SliderButton>
      </div>
  
      
        </div>


                <div className="carousel-item"> 
                        <img src={elephant} className="d-block w-100 img-fluid images " alt="third-carousel"/>
                <div className="slider-caption d-md-block">
                <TopText >
                        Color Your Dreams.
                        </TopText>
                        
      <SliderButton >
        Get Started
      </SliderButton>
                </div>
                       
                 </div>
    </div>
 
</div>

        <HomeAbout/>
        <Subscribe/>
        <Footer/>

   </>

    );
  }

