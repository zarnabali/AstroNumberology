import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import SectionWrapper from '../hoc';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#dcb483]">Celestial Stars</h3>
            <p className="mb-4 text-white/80">
              The ultimate destination for Astro-numerology and Magnetism - the divine sciences that unlock your potential.
            </p>
            <p className="text-white/80">
              The most powerful tool to become the creator of your destiny. Your future is in your hands!
            </p>
          </div>

          {/* Column 2: Features */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#dcb483]">Features</h3>
            <ul className="space-y-2 text-white/80">
              <li>Personalized birth chart analysis</li>
              <li>Numerological life path calculations</li>
              <li>Compatibility insights</li>
              <li>Future trend predictions</li>
              <li>Magnetic energy alignment</li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#dcb483]">Connect With Us</h3>
            <p className="mb-4 text-white/80">
              It's finally time to shape your life and bring to life the present and future you have always dreamed of!
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-white hover:text-[#dcb483] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#dcb483] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#dcb483] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#dcb483] transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#dcb483] transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Promotional Banner */}
        <div className="mt-10 p-6 bg-gradient-to-r from-[#151a38] to-[#1a1f3a] rounded-3xl text-center">
          <h2 className="text-2xl font-bold mb-2">The only site in the world! The most complete ever!</h2>
          <p className="mb-4">Discover your destiny based on your experience. Personalized interpretations based on your date of birth, precious roots of the present and future.</p>
          <button className="bg-[#dcb483] hover:bg-[#c9a575] text-[#070921] font-bold py-2 px-6 rounded-full transition-colors">
            Don't miss this extraordinary opportunity!
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-[#3a3f58] text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Celestial Stars. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default SectionWrapper(Footer,"footer");