import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Services() {
  const services = [
    {
      id: "01",
      title: 'Christian Speaking',
      description: 'Drawing from deep personal experience of the Rwandan Genocide and profound faith, we offer inspiring Christian speaking engagements that ignite hope and resilience.',
    },
    {
      id: "02",
      title: 'Authorship',
      description: 'Our book, "Under His Mighty Hand," chronicles the story of Immaculée Hedden—a powerful testament to faith, survival, and overcoming adversity.',
    },
    {
      id: "03",
      title: 'Integrative Counselling',
      description: 'As trained counsellors, we are dedicated to helping people find hope. We use an integrative approach that addresses the mind, body, and spirit to foster deep healing.',
    },
    {
      id: "04",
      title: 'Charitable Partnerships',
      description: 'Through the "Let the Little Children Come to Me Charity," we actively advocate for and support the needs of orphans and widows, turning compassion into tangible action.',
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="counselling" className="pt-20 pb-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-primary-950"></div>
          <span className="uppercase tracking-[0.2em] text-xs font-semibold text-primary-950">Our Work</span>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <h3 className="text-4xl md:text-5xl lg:text-[4rem] font-serif text-primary-950 leading-[1.1] max-w-3xl tracking-tight">
            Restoring Hope Through <br className="hidden md:block"/>Faith, Words, and Action.
          </h3>
          <p className="text-xl text-primary-600 font-light max-w-md pb-2">
            Comforting those who suffer, sharing testimonies of grace, and supporting the vulnerable.
          </p>
        </div>

        <div className="border-t border-primary-200">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative border-b border-primary-200 py-12 lg:py-16 cursor-pointer"
            >
              <div className="absolute inset-0 bg-primary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 origin-left" style={{ scaleX: hoveredIndex === index ? 1 : 0, transition: "transform 0.5s ease-out, opacity 0.5s" }} />
              
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10 px-4">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-16 flex-1">
                  <span className="text-xl md:text-2xl font-serif text-primary-400 group-hover:text-accent transition-colors duration-500 hidden lg:block">
                    {service.id}
                  </span>
                  <div className="flex-1">
                    <h4 className="text-3xl md:text-4xl font-serif text-primary-950 lg:group-hover:translate-x-4 transition-transform duration-500">
                      {service.title}
                    </h4>
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          className="text-lg text-primary-700 font-light max-w-2xl overflow-hidden leading-relaxed block"
                        >
                          {service.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                
                <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-full border border-primary-200 group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 self-start lg:self-center">
                  <ArrowRight className="w-6 h-6 lg:-rotate-45 lg:group-hover:rotate-0 transition-transform duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
