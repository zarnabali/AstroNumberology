import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import StarsCanvas from './canvas/Stars';
import BasicWrapper from '../hoc/BasicWrapper';
import img1 from "../assets/logo/chart_01.png";
import img2 from "../assets/logo/chart_02.png";
import img3 from "../assets/logo/chart_03.png";

const ChartSection = () => {
  const sectionRef = useRef(null);
  const textRef1 = useRef(null);
  const imageRef1 = useRef(null);
  const textRef2 = useRef(null);
  const imageRef2 = useRef(null);
  const textRef3 = useRef(null);
  const imageRef3 = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    gsap.set([textRef1.current, imageRef1.current, textRef2.current, imageRef2.current, textRef3.current, imageRef3.current, ctaRef.current], {
      visibility: 'visible',
      opacity: 1
    });
    
    tl.from(textRef1.current, { opacity: 0, y: 30, duration: 1 })
      .from(imageRef1.current, { opacity: 0, scale: 0.9, duration: 1 }, "-=0.5")
      .from(textRef2.current, { opacity: 0, y: 30, duration: 1 }, "-=0.3")
      .from(imageRef2.current, { opacity: 0, scale: 0.9, duration: 1 }, "-=0.5")
      .from(textRef3.current, { opacity: 0, y: 30, duration: 1 }, "-=0.3")
      .from(imageRef3.current, { opacity: 0, scale: 0.9, duration: 1 }, "-=0.5")
      .from(ctaRef.current, { opacity: 0, y: 20, duration: 0.8 }, "-=0.3");
    
    return () => { tl.kill(); };
  }, []);

  return (
    <section 
      ref={sectionRef} 
       id="chart"
      className="relative w-full mx-auto overflow-hidden py-32 pb-40"
    >
      <StarsCanvas />
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-16">
        {/* Chart 1 */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 mb-24">
          <div className="flex flex-row items-start gap-5 w-full lg:w-1/2">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#dcb483]" />
              <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#dcb483] to-transparent" />
            </div>
            
            <div ref={textRef1}>
              <h1 className="font-black text-white lg:text-[60px] sm:text-[48px] xs:text-[40px] text-[32px] lg:leading-[76px] mt-0">
                Chart # <span className="text-[#dcb483]"> 01</span>
              </h1>
              <p className="text-white font-medium lg:text-[22px] sm:text-[20px] xs:text-[18px] text-[16px] lg:leading-[32px] mt-2 mb-6 max-w-[700px]">
              Astro-Numerology: Unlock the Secrets of Egyptian and Kabbalistic Wisdom!
              </p>
              <a href="#" className="text-[#dcb483] underline text-lg font-medium hover:text-[#b88a5b] transition">Click to learn more</a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
            <div ref={imageRef1} className="mt-4 lg:mt-0 max-w-full">
              <img 
                src={img1} 
                alt="celestial chart 1" 
                className="w-[280px] sm:w-[320px] md:w-[400px] lg:w-full object-contain rounded-3xl"
                style={{ transformOrigin: 'center center' }}
              />
            </div>
          </div>
        </div>

        {/* Chart 2 - Reversed orientation */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 mb-24">
          {/* Image on left for larger screens, but will appear below text on mobile (due to flex-col) */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center order-2 lg:order-1">
            <div ref={imageRef2} className="mt-4 lg:mt-0 max-w-full">
              <img 
                src={img3} 
                alt="celestial chart 2" 
                className="w-[280px] sm:w-[320px] md:w-[400px] lg:w-full object-contain rounded-3xl"
                style={{ transformOrigin: 'center center' }}
              />
            </div>
          </div>
          
          {/* Text on right for larger screens */}
          <div className="flex flex-row items-start gap-5 w-full lg:w-1/2 order-1 lg:order-2">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#dcb483]" />
              <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#dcb483] to-transparent" />
            </div>
            
            <div ref={textRef2}>
              <h1 className="font-black text-white lg:text-[60px] sm:text-[48px] xs:text-[40px] text-[32px] lg:leading-[76px] mt-0">
                Chart # <span className="text-[#dcb483]"> 02</span>
              </h1>
              <p className="text-white font-medium lg:text-[22px] sm:text-[20px] xs:text-[18px] text-[16px] lg:leading-[32px] mt-2 mb-6 max-w-[700px]">
              Traditional astrology; Chaldean, Egyptian, and sidereal!
              </p>
              <a href="#" className="text-[#dcb483] underline text-lg font-medium hover:text-[#b88a5b] transition">Click to learn more</a>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default BasicWrapper(ChartSection,'chart');