import React from 'react';
import { motion } from 'framer-motion';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 md:py-40 bg-rola-bg relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Intro Block */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 md:mb-32">
          <div className="md:w-1/3 mb-10 md:mb-0">
             <span className="block w-12 h-[1px] bg-rola-dark mb-6"></span>
             <h3 className="text-xs font-sans uppercase tracking-widest text-rola-gray">
               The Philosophy
             </h3>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:w-2/3"
          >
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-rola-dark leading-[1.15] font-light">
              We believe that <span className="italic">true luxury</span> lies in the clarity of thought. A brand should not just be seen, but <span className="italic">felt</span>.
            </h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
               <p className="font-sans font-light text-rola-gray text-sm leading-7">
                 Rola Design stands at the intersection of architectural precision and artistic fluidity. We deconstruct complexity to reveal the essential narrative of your business, crafting identities that possess a timeless gravity.
               </p>
               <p className="font-sans font-light text-rola-gray text-sm leading-7">
                 Inspired by the masters of minimalism, our work is characterized by negative space, typographic restraint, and a tactile sensibility that invites touch and contemplation.
               </p>
            </div>
          </motion.div>
        </div>

        {/* Visual Composition */}
        <div className="relative w-full h-[60vh] md:h-[80vh]">
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="w-full h-full"
          >
             <img 
               src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2727&auto=format&fit=crop" 
               alt="Minimalist Interior with sunlight"
               className="w-full h-full object-cover grayscale-[20%]"
             />
          </motion.div>
          
          {/* Overlapping Text Element */}
          <div className="absolute bottom-10 left-6 md:left-12 bg-white/90 backdrop-blur-sm p-8 max-w-sm">
             <h4 className="font-serif italic text-2xl text-rola-dark mb-2">Curated Silence</h4>
             <p className="font-sans text-xs text-rola-gray uppercase tracking-widest">
               Visual Identity / 2024
             </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Philosophy;