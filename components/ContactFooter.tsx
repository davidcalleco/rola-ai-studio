import React from 'react';

const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-rola-bg py-24 border-t border-rola-dark/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <h2 className="font-serif text-4xl md:text-5xl text-rola-dark mb-8">
              ROLA<span className="italic">/DSGN</span>
            </h2>
            <p className="font-sans font-light text-rola-gray text-sm leading-relaxed max-w-sm">
              Creating visual narratives for those who appreciate the quiet power of design.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-4">
             <h4 className="text-xs font-sans uppercase tracking-widest text-rola-dark mb-4">Sitemap</h4>
             <a href="#philosophy" className="font-serif text-xl text-rola-gray hover:text-rola-dark hover:italic transition-all">Concept</a>
             <a href="#projects" className="font-serif text-xl text-rola-gray hover:text-rola-dark hover:italic transition-all">Projects</a>
             <a href="#studio" className="font-serif text-xl text-rola-gray hover:text-rola-dark hover:italic transition-all">Studio</a>
          </div>

          {/* Contact */}
          <div className="flex flex-col space-y-4">
             <h4 className="text-xs font-sans uppercase tracking-widest text-rola-dark mb-4">Contact</h4>
             <p className="font-serif text-xl text-rola-gray">hello@roladsgn.com</p>
             <p className="font-serif text-xl text-rola-gray">+351 912 345 678</p>
             <div className="pt-4 flex space-x-6">
                <a href="#" className="text-xs font-sans uppercase tracking-widest text-rola-dark border-b border-transparent hover:border-rola-dark transition-all">Instagram</a>
                <a href="#" className="text-xs font-sans uppercase tracking-widest text-rola-dark border-b border-transparent hover:border-rola-dark transition-all">LinkedIn</a>
             </div>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-rola-dark/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-400 font-sans">
          <p>&copy; 2024 Rola Design. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;