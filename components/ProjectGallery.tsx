import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Aura Botanica",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Kinfolk Digital",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1513161455079-7dc1fb1535f3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Mono Type",
    category: "Editorial",
    image: "https://images.unsplash.com/photo-1506097425191-7ad538b29cef?q=80&w=2070&auto=format&fit=crop"
  }
];

const ProjectGallery: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16">
           <div>
             <h3 className="text-xs font-sans uppercase tracking-widest text-rola-gray mb-4">Selected Works</h3>
             <h2 className="font-serif text-4xl md:text-6xl text-rola-dark">The Collection</h2>
           </div>
           <a href="#" className="hidden md:flex items-center text-xs font-sans uppercase tracking-widest text-rola-dark hover:text-rola-gray transition-colors">
             View All <ArrowRight className="ml-2 w-4 h-4" />
           </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {projects.map((project, index) => (
             <motion.div
               key={project.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.2, duration: 0.8 }}
               className="group cursor-pointer"
             >
                <div className="overflow-hidden aspect-[4/5] mb-6 relative">
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                   <img 
                     src={project.image} 
                     alt={project.title}
                     className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                   />
                </div>
                <div className="flex justify-between items-baseline border-b border-gray-200 pb-4 group-hover:border-rola-dark transition-colors duration-500">
                  <h3 className="font-serif text-2xl text-rola-dark italic group-hover:translate-x-2 transition-transform duration-500">{project.title}</h3>
                  <span className="text-xs font-sans uppercase tracking-widest text-gray-400">{project.category}</span>
                </div>
             </motion.div>
           ))}
        </div>
        
        <div className="mt-12 md:hidden flex justify-center">
            <a href="#" className="flex items-center text-xs font-sans uppercase tracking-widest text-rola-dark border-b border-rola-dark pb-1">
             View All Projects
           </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;