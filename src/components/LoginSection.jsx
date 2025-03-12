import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import StarsCanvas from './canvas/Stars';
import img1 from "../assets/logo/login_img1.png";
import BasicWrapper from '../hoc/BasicWrapper';

const LoginSection = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const imageRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    gsap.set([formRef.current, imageRef.current, ctaRef.current], {
      visibility: 'visible',
      opacity: 1
    });
    
    tl.from(formRef.current, { opacity: 0, y: 30, duration: 1 })
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

  const handleSignUpClick = (e) => {
    e.preventDefault();
    navigate('/register');
  };

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
            
            {/* Updated left box with login form */}
            <div ref={formRef} className="w-full">
              <h1 className="font-black text-white lg:text-[50px] sm:text-[40px] xs:text-[34px] text-[28px] lg:leading-[60px] mt-0">
                Welcome to your <br className="sm:block hidden" />
                <span className="text-[#dcb483]">Celestial Journey</span>
              </h1>
              <p className="text-white font-medium lg:text-[18px] sm:text-[16px] xs:text-[15px] text-[14px] mt-2 mb-6 max-w-[500px]">
                Sign in to access your personal astro-numerology chart and cosmic insights.
              </p>
              
              <form className="space-y-4 max-w-[450px]">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-[#dcb483]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                    </svg>
                  </div>
                  <input 
                    type="email" 
                    className="bg-[#111827] border border-[#374151] text-white text-sm rounded-lg focus:ring-[#dcb483] focus:border-[#dcb483] block w-full pl-10 p-3" 
                    placeholder="Email Address" 
                    required 
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-[#dcb483]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <input 
                    type="password" 
                    className="bg-[#111827] border border-[#374151] text-white text-sm rounded-lg focus:ring-[#dcb483] focus:border-[#dcb483] block w-full pl-10 p-3" 
                    placeholder="Password" 
                    required 
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input 
                      id="remember-me" 
                      type="checkbox" 
                      className="w-4 h-4 border border-[#374151] rounded bg-[#111827] focus:ring-[#dcb483]" 
                    />
                    <label htmlFor="remember-me" className="ml-2 text-sm text-white">Remember me</label>
                  </div>
                  <a href="#" className="text-sm text-[#dcb483] hover:underline">Forgot Password?</a>
                </div>
                
                <div ref={ctaRef}>
                  <button 
                    type="submit" 
                    className="w-full bg-[#dcb483] py-3 px-5 rounded-xl text-white font-bold text-base shadow-md hover:bg-[#c9a36f] transition-all duration-300 flex items-center justify-center"
                  >
                    <span>Sign In</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
                
                {/* Fixed spacing for the divider */}
                <div className="relative flex items-center justify-center mt-8 mb-4">
                  <div className="border-t border-[#374151] absolute w-full"></div>
                  <div className="bg-[#111827] text-white px-4 relative z-10 text-sm">Or continue with</div>
                </div>
                
                <div className="flex space-x-4">
                  <button 
                    type="button" 
                    className="flex-1 border border-[#374151] py-2.5 rounded-xl text-white font-medium text-sm shadow-md hover:bg-[#1e2533] transition-all duration-300 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Google
                  </button>
                  <button 
                    type="button" 
                    className="flex-1 border border-[#374151] py-2.5 rounded-xl text-white font-medium text-sm shadow-md hover:bg-[#1e2533] transition-all duration-300 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.3062 8.12501C15.608 8.95626 14.4521 9.64064 13.5254 9.64064C13.2651 9.64064 12.7917 9.50001 12.3615 9.50001C11.9312 9.50001 11.196 9.64064 10.9357 9.64064C10.062 9.64064 9.00388 9.05939 8.30569 8.22814C7.41862 7.20001 7.41862 5.40626 8.30569 4.37814C8.95125 3.59689 10.1072 3.10001 11.0413 3.10001C11.254 3.10001 11.6843 3.24064 12.1145 3.24064C12.5448 3.24064 13.0221 3.10001 13.2347 3.10001C13.9305 3.10001 14.9396 3.45626 15.5332 4.09064C15.5332 4.09064 14.2701 4.80314 14.2701 6.36564C14.2701 8.07501 16.3062 8.12501 16.3062 8.12501ZM13.2347 2.80376C13.341 2.14126 13.7712 1.52501 14.2485 1.10001C14.6787 0.768757 15.3225 0.524995 15.9134 0.524995C15.9613 1.24064 15.6531 1.95314 15.1758 2.46876C14.7456 3.03126 14.1041 3.38751 13.2347 3.38751C13.2347 3.24689 13.2347 3.10626 13.2347 2.80376Z" fill="white"/>
                      <path d="M19.3363 18.1125C19.9779 17.2812 20.2382 16.8562 20.7155 15.9313C17.8383 14.9031 17.318 11.5844 20.1948 10.0844C19.2121 8.81564 17.8383 8.15314 16.5134 8.15314C15.6264 8.15314 15.0329 8.29377 14.5557 8.43439C14.1733 8.52501 13.843 8.62501 13.512 8.62501C13.129 8.62501 12.7509 8.52501 12.3685 8.43439C11.9383 8.29377 11.3447 8.15314 10.4577 8.15314C9.08033 8.15314 7.65941 8.81564 6.63013 10.0844C5.21558 11.9125 5.40823 14.9031 7.23407 18.1125C8.45625 20.2156 9.51466 21.6219 10.9292 21.6219C11.5708 21.6219 11.9531 21.4813 12.3836 21.3406C12.8138 21.2 13.2441 21.0594 13.9399 21.0594C14.6356 21.0594 15.018 21.2 15.4482 21.3406C15.8306 21.4813 16.2129 21.6219 16.8546 21.6219C18.2691 21.575 19.3363 20.2156 19.3363 18.1125Z" fill="white"/>
                    </svg>
                    Apple
                  </button>
                </div>
                
                <p className="text-white text-sm text-center mt-6">
                  Don't have an account? 
                  <a 
                    href="#" 
                    className="text-[#dcb483] ml-1 hover:underline"
                    onClick={handleSignUpClick}
                  >
                    Sign Up
                  </a>
                </p>
              </form>
            </div>
          </div>
          
          {/* Right Box */}
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

export default BasicWrapper(LoginSection, 'login');