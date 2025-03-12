import profileIcon from '../assets/logo/profile_icon.png'; 
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { logo, menu, close } from '../assets';

const navLinks = [
  { id: 'home', title: 'Home' },
  { id: 'chart', title: 'Chart' },
  { id: 'about', title: 'About' },
  { id: 'contact', title: 'Contact Us' }
];

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen width on mount and window resize
  useEffect(() => {
    const checkScreenSize = () => {
      // 820px covers iPad Mini and similar tablet sizes
      setIsMobile(window.innerWidth < 820);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-50 bg-primary shadow-lg`}> 
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='h-20 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Astro &nbsp;<span className={`${isMobile ? 'hidden' : 'block'}`}>| Numerology</span>
          </p>
        </Link>
        
        {/* Desktop Navigation */}
        {!isMobile ? (
          <ul className='list-none flex flex-row gap-6 items-center'>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? 'text-white' : 'text-secondary'
                } hover:text-white text-[16px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
            <li>
              <img src={profileIcon} alt='Profile' className='h-6 w-6 cursor-pointer' />
            </li>
          </ul>
        ) : (
          /* Mobile Menu Toggle */
          <div className='flex-1 flex justify-end items-center'>
            <img 
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain cursor-pointer'
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                !toggle ? 'hidden' : 'flex'
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-50 rounded-xl bg-primary`}
            >
              <ul className='list-none flex flex-col gap-4'>
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? 'text-white' : 'text-secondary'
                    } text-[16px] font-medium cursor-pointer font-poppins`}
                    onClick={() => {
                      setToggle(false);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
                <li>
                  <img src={profileIcon} alt='Profile' className='h-6 w-6 cursor-pointer' />
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;