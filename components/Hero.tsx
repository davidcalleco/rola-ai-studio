import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full h-screen flex flex-col justify-between bg-rola-bg overflow-hidden pt-32 pb-0">
      
      {/* Main Text Content */}
      <div className="flex-grow flex flex-col items-center justify-center px-4 relative z-10 -mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-light text-rola-dark leading-[0.9] tracking-tight">
            DESIGNED <br />
            <span className="italic">TO SURPRISE</span>
          </h1>
          
          <div className="mt-8 flex justify-center">
            <p className="text-xs md:text-sm font-sans font-light tracking-widest uppercase text-rola-gray max-w-xs text-center leading-relaxed">
              Elevating brands through visual alchemy and strategic aesthetics.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Image Section - Matching the reference "Wooden Slats" look */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "circOut" }}
        className="relative h-[45vh] w-full mt-auto"
      >
        <img
          src="https://images.unsplash.com/photo-1599695669145-56064f2759e9?q=80&w=2670&auto=format&fit=crop" 
          alt="Architectural Detail - Wooden Slats"
          className="w-full h-full object-cover object-center"
        />
        
        {/* Subtle overlay to blend if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

        {/* Floating badge/scroll indicator */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white rounded-full p-6 shadow-xl hidden md:block">
           <div className="animate-bounce">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
           </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;