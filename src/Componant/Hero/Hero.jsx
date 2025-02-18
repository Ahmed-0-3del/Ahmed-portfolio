import React from 'react'

import myPic from "../../Assests/Person Pic/WhatsApp Image 2024-06-28 at 15.44.50_dc36690f-modified.png"
import Style from "./Hero.module.css"
import { Helmet } from 'react-helmet'
import { Slide  } from 'react-awesome-reveal';
import Lottie from "lottie-react";
import developerAnimate from "../../Assests/animation/developer.json"

export  function Hero() {
  return <>
   <Helmet>
        <meta name="Hero" content="This is hero page about me and my cv and links" />
      </Helmet>

      <section className={` mx-auto ${Style.hero} `}>
        <div className="row ">
          <div className={`${Style.heroFlex} align-items-center`}>
          <div className='col-md-8 '>
            <div className="d-flex mt-3 ">
              <img src={myPic} className={`${Style.imgStyle} ms-3 cursor-pointer`} alt="my photo" />
              <i  className="text-primary fa-solid fa-certificate fs-4 align-content-end mb-2 ms-2"></i>
              <h2 className='mt-5 d-flex justify-content-center text-primary'> Eng/  Ahmed Adel </h2>
            </div>
            <Slide  direction='left' duration={1000}>
            <div className={`${Style.aboutMe}`}>
            <h1 className=' fw-bolder my-5'>Frontend React.Js Developer </h1>
            <p >Hi, My name is <span className='px-2 py-1 rounded-4 cursor-pointer'>Ahmed Adel Mohamed</span> . I work as a Software Engineer and specialize in React, and Front-End Web Development, I thrive on learning
and teamwork, dedicated to staying updated on industry advancements and emerging technologies to improve
skills and deliver innovative solutions consistently.</p>
          </div>

          <div className={`${Style.socialIcons} mt-5 d-flex justify-content-center`}>
            <a href="http://www.linkedin.com/in/ahmed-adel-bb0586308" target="_blank">
            <i className='fa fa-brands fa-linkedin fs-3 me-3 cursor-pointer '></i>
            </a>
            <a href="https://github.com/Ahmed-0-3del" target="_blank">
            <i className='fa fa-brands fa-github fs-3 me-3 cursor-pointer'></i>
            </a>
            <a href="mailto:ahmedadelinfo2004@gmail.com" target="_blank">
            <i class="fa-solid fa-envelope fs-3 me-3 cursor-pointer "></i>
            </a>
            <a href="https://www.instagram.com/ahmedadel8036/" target="_blank">
            <i className='fa fa-brands  fa-instagram fs-3 me-3 cursor-pointer'></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100028729267216&mibextid=ZbWKwL" target="_blank">
            <i className='fa fa-brands fa-facebook-f fs-3 me-3 cursor-pointer'></i>
            </a>
            <a href="https://iwtsp.com/201060107143" target="_blank">
            <i className='fa fa-brands fa-whatsapp fs-3 me-3 cursor-pointer'></i>
            </a>
            
           
            
          </div>
            </Slide>
        
          </div>
          <div className={`col-md-4 ${Style.developerAnimate} justify-content-center`}>
          <Lottie animationData={developerAnimate}   />
          </div> 
          </div>

        </div>
      </section>
  </>
}
