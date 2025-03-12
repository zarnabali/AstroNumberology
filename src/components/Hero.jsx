import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import StarsCanvas from './canvas/Stars';
import img1 from "../assets/logo/img2.png";
import BasicWrapper from '../hoc/BasicWrapper';

const HeroSection = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    gsap.set([textRef.current, imageRef.current, ctaRef.current], {
      visibility: 'visible',
      opacity: 1
    });
    
    tl.from(textRef.current, { opacity: 0, y: 30, duration: 1 })
      .from(imageRef.current, { opacity: 0, scale: 0.9, duration: 1 }, "-=0.5")
      .from(ctaRef.current, { opacity: 0, y: 20, duration: 0.8 }, "-=0.3");
    
    const imgElement = imageRef.current ? imageRef.current.querySelector('img') : null;
    if (imgElement) {
      gsap.to(imgElement, {
        rotation: 360,
        duration: 12,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center"
      });
    }

    return () => { tl.kill(); };
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative w-full py-10 flex flex-col justify-center"
    >
      <StarsCanvas />
      
      <div className="relative pt-16 md:pt-20 lg:pt-24 max-w-7xl mx-auto px-6 sm:px-16 z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5">
          
          <div className="flex flex-row items-start gap-5 w-full lg:w-1/2">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#dcb483]" />
              <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#dcb483] to-transparent" />
            </div>
            
            <div ref={textRef}>
              <h1 className="font-black text-white lg:text-[60px] sm:text-[48px] xs:text-[40px] text-[32px] lg:leading-[76px] mt-0">
                Unlock Your <br className="sm:block hidden" />
                <span className="text-[#dcb483]">Celestial Blueprint</span>
              </h1>
              <p className="text-white font-medium lg:text-[22px] sm:text-[20px] xs:text-[18px] text-[16px] lg:leading-[32px] mt-2 max-w-[700px]">
                Experience interactive astro-numerology like never before. Explore your chart and embrace the stars.
              </p>
              <p className="text-[#dcb483] font-medium lg:text-[22px] sm:text-[20px] xs:text-[18px] text-[16px] lg:leading-[32px] mb-6 max-w-[700px]">
                Celestial = Stars; and Astro-numerology - magnetism (divine sciences)
              </p>
              
              <div className="flex flex-wrap gap-4 mt-4 mb-8" ref={ctaRef}>
                <button className="bg-[#dcb483] py-2 px-6 sm:py-3 sm:px-8 rounded-xl text-white font-bold text-sm sm:text-base shadow-md hover:bg-[#c9a36f] hover:scale-105">
                  Get Started ➔
                </button>
                <button className="border border-[#dcb483] py-2 px-6 sm:py-3 sm:px-8 rounded-xl text-white font-bold text-sm sm:text-base shadow-md hover:bg-[#dcb48320] hover:scale-105">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
            <div ref={imageRef} className="mt-4 lg:mt-0 max-w-full">
              <img 
                src={img1} 
                alt="celestial" 
                className="w-[280px] sm:w-[320px] md:w-[400px] lg:w-full object-contain"
                style={{ transformOrigin: 'center center' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicWrapper(HeroSection,'home');