import React, { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';

const FAQSection = () => {
  // Array of FAQ questions and answers about astrology and numerology
  const faqData = [
    {
      id: 1,
      question: "What is the difference between astrology and numerology?",
      answer: "Astrology is the study of how celestial bodies like planets and stars influence human behavior and events on Earth. It uses your birth date, time, and location to create a birth chart that maps planetary positions. Numerology, on the other hand, is the study of the mystical relationship between numbers and events. It analyzes numerical values derived from your name and birth date to reveal personality traits, life path, and potential future outcomes. While both are divination systems, astrology focuses on celestial influences, while numerology centers on the vibrational energy of numbers."
    },
    {
      id: 2,
      question: "How do I calculate my life path number in numerology?",
      answer: "To calculate your life path number, add all the digits in your birth date and reduce to a single digit (except for master numbers 11, 22, and 33). For example, if you were born on June 15, 1987: June is the 6th month: 6, Day: 15 = 1+5 = 6, Year: 1987 = 1+9+8+7 = 25 = 2+5 = 7. Add these numbers: 6+6+7 = 19 = 1+9 = 10 = 1+0 = 1. Your life path number would be 1."
    },
    {
      id: 3,
      question: "What are the most compatible zodiac signs for relationships?",
      answer: "Compatibility in astrology depends on many factors, but generally: Fire signs (Aries, Leo, Sagittarius) harmonize well with Air signs (Gemini, Libra, Aquarius). Earth signs (Taurus, Virgo, Capricorn) connect strongly with Water signs (Cancer, Scorpio, Pisces). Signs of the same element often understand each other well. Additionally, signs that are opposites on the zodiac wheel can create powerful attraction through their complementary qualities. For complete compatibility, professional astrologers will analyze both individuals' complete birth charts."
    },
    {
      id: 4,
      question: "How do planetary retrogrades affect us according to astrology?",
      answer: "When a planet appears to move backward from our perspective on Earth, it's in retrograde. This optical illusion is believed to cause the energies associated with that planet to turn inward or become challenging. Mercury retrograde often affects communication and technology. Venus retrograde impacts relationships and values. Mars retrograde can influence energy and motivation. Rather than simply bringing bad luck, retrogrades are seen as opportunities for reflection, revision, and inner growth in the areas of life governed by the retrograde planet."
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Toggle function to handle expanding/collapsing FAQ items
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center py-12 px-4" style={{
      backgroundImage: "url('src/assets/logo/back2.jpg')", // Use an astronomy-themed background
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
    }}>
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-[#050816] opacity-50"></div>
      
      {/* Top shadow */}
      <div className="absolute top-0 left-0 right-0 h-32" style={{
        background: "linear-gradient(to bottom, rgba(5,8,22,0.9) 0%, rgba(5,8,22,0) 100%)"
      }}></div>
      
      {/* Bottom shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{
        background: "linear-gradient(to top, rgba(5,8,22,0.9) 0%, rgba(5,8,22,0) 100%)"
      }}></div>
      
      <div className="w-full max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">Frequently <span className="text-[#ffff]">Asked Questions</span></h1>
          <p className="text-white">Discover the mysteries of the stars and numbers that guide our paths.</p>
          <p className="text-white">Unveiling cosmic wisdom and numerical insights for your journey.</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={faq.id} 
              className={`rounded-lg overflow-hidden transition-all duration-300 ${
                index === 0 ? 'border border-[#3a3f58]' : ''
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full px-6 py-4 flex justify-between items-center text-left
                  ${index === activeIndex ? 'bg-gradient-to-r from-[#151a38] to-[#1a1f3a]' : 'bg-gradient-to-r from-[#111432] to-[#181c3a]'}
                  text-white hover:bg-opacity-90 transition-all duration-300`}
              >
                <span>{faq.question}</span>
                <ChevronDownIcon 
                  className={`w-5 h-5 text-[#dcb483] transition-transform duration-300 ${
                    index === activeIndex ? 'rotate-180' : 'rotate-0'
                  }`} 
                />
              </button>

              {/* Answer */}
              <div 
                className={`bg-[#151a38] text-white/80 overflow-hidden transition-all duration-300 ease-in-out ${
                  index === activeIndex ? 'max-h-96 py-6 px-6' : 'max-h-0'
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;