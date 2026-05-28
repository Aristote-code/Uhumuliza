import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pt-32 pb-20 bg-primary-950 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="/images/hero-background.png"
          alt="Peaceful landscape representing hope and comfort"
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/70 to-primary-950/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col items-start pt-20">
        <motion.div
           initial={{ opacity: 0, scaleX: 0 }}
           animate={{ opacity: 1, scaleX: 1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="flex items-center gap-4 mb-8 origin-left"
        >
          <div className="w-16 h-[1px] bg-accent"></div>
          <span className="uppercase tracking-[0.25em] text-xs font-semibold text-accent">Faith & Healing</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-6xl lg:text-[6.5rem] font-serif leading-[1.05] tracking-tight mb-12 max-w-5xl"
        >
          Finding Hope & <br className="hidden md:block"/><span className="italic text-primary-200">Overcoming.</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between w-full border-t border-white/20 pt-8 mt-8 gap-8"
        >
          <p className="text-xl md:text-2xl text-primary-300 max-w-2xl font-light leading-relaxed">
            Christian speaking, insightful authoring, and integrative counselling to help you find comfort and renewed strength.
          </p>
          
          <div className="flex gap-4 items-center mt-6 md:mt-0">
            <a href="#about" className="uppercase tracking-[0.1em] text-xs font-semibold text-white hover:text-accent transition-colors mr-4">
              Our Story
            </a>
            <a href="#book" className="group flex items-center justify-center w-16 h-16 rounded-full border border-white/20 hover:bg-white hover:text-primary-950 transition-all duration-500 shrink-0">
               <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
