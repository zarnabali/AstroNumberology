import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import customImg from "../assets/logo/chart_02.png"; // Make sure to replace with your actual image path

const CustomSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    gsap.set([headingRef.current, imageRef.current, descriptionRef.current], {
      visibility: 'visible',
      opacity: 1
    });
    
    tl.from(headingRef.current, { opacity: 0, y: 30, duration: 1 })
      .from(imageRef.current, { opacity: 0, scale: 0.95, duration: 1.2 }, "-=0.5")
      .from(descriptionRef.current, { opacity: 0, y: 20, duration: 0.8 }, "-=0.3");
    
    return () => { tl.kill(); };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full mx-auto overflow-hidden py-20"
    >
      <div className="relative max-w-7xl mx-auto px-6 sm:px-16">
        <div className="flex flex-col items-start ">
          {/* Heading Row - Left Aligned */}
          <div className="w-full" ref={headingRef}>
            <div className="flex flex-row items-center gap-4">
              <h1 className="font-black text-white lg:text-[60px] sm:text-[48px] xs:text-[40px] text-[32px] lg:leading-[76px] mt-0 pl-6">
                Featured <span className="text-[#dcb483]">Discovery</span>
              </h1>
            </div>
          </div>
          
          {/* Image Row - Full Width */}
          <div className="w-full" ref={imageRef}>
            <img 
              src={customImg} 
              alt="Featured celestial discovery" 
              className="w-full h-[500px] md:h-[500px] lg:h-[600px] object-cover rounded-3xl mt-8"
              
            />
          </div>

          {/* Description Row - Left Aligned */}
          <div className="w-full pl-6" ref={descriptionRef}>
            <p className="text-[#dfd9ff] font-medium lg:text-[20px] sm:text-[18px] xs:text-[16px] text-[16px] lg:leading-[32px] mt-2 mb-6 ">
            Discover the Universal Order: a symbolic hierarchy that unites warmth, color, number, and geometry through the square and the cube! The universe functions in perfect harmony, and you too can make your personal universe shine, based on your date of birth. Don't miss this unique opportunity to create balance and beauty in your life!
            </p>
            <a href="#" className="text-[#dcb483] underline text-lg font-medium hover:text-[#b88a5b] transition ">
              Explore the full analysis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSection;