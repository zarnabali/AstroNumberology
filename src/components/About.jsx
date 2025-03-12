import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc'; // Import as default export

import person_icon from "../assets/logo/person_icon.png";
import chart_icon from "../assets/logo/chart_icon.png";
import insights_icon from "../assets/logo/insights_icon.png";
import analysis_icon from "../assets/logo/analysis_icon.png";



const services = [
  {
    title: "Dynamic Chart",
    icon: chart_icon
  },
  {
    title: "Account Management",
    icon: person_icon
  },
  {
    title: "Insights",
    icon: insights_icon
  },
  {
    title: "Analytics",
    icon: analysis_icon
  }
];




const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5, index * 0.75)}
        className="w-full p-[1px] rounded-[20px] shadow-card"
        style={{
          background: 'linear-gradient(135deg, #dcb483, #b8860b, #8b6a2b)',
        }}
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-20 h-20 object-contain" />
          <h3 className="text-[#dcb483] text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};


const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className="text-[#dcb483] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]" >Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 0.1)}>
      Unlock your <span className="text-[#dcb483]">celestial project (No) =</span>  Become the creator of your destiny;
The only site in the world! The most complete ever! The most powerful tool to become the creator of your destiny. Your future is in your hands! It is finally time to shape your life and bring to life the present and future you have always dreamed of! Don't miss this extraordinary opportunity!
      </motion.p>

      <p  className="mt-3 text-[#dcb483] text-[17px]  leading-[30px]">
      Personalized interpretations based on your date of birth, precious roots of the present and future; Powerful tools for your astro-numerology and magnetism journey
      </p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about'); // Use SectionWrapper as a function