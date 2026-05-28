import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const yImage1 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section id="about" ref={ref} className="pt-32 pb-40 bg-primary-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-6 relative h-[700px] hidden lg:block">
            <motion.div style={{ y: yImage1 }} className="absolute top-0 left-0 w-[80%] h-[70%] z-10 overflow-hidden">
              <img 
                src="/images/hope-and-light.png" 
                alt="Hope and light" 
                className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 hover:grayscale-0 hover:opacity-100"
              />
            </motion.div>
            <motion.div style={{ y: yImage2 }} className="absolute bottom-10 right-0 w-[60%] h-[50%] z-20 overflow-hidden border-8 border-primary-50">
              <img 
                src="/images/community-and-faith.png" 
                alt="Community and faith" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 lg:pl-10"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-[1px] bg-primary-950"></div>
              <span className="uppercase tracking-[0.2em] text-xs font-semibold text-primary-950">The Meaning of Uhumuliza</span>
            </div>
            
            <h3 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif text-primary-950 leading-[1.1] mb-12 tracking-tight">
              Comfort & Renewed Hope.
            </h3>
            
            <div className="space-y-6 text-lg md:text-xl text-primary-700 font-light leading-relaxed mb-16">
              <p>
                Uhumuliza is a Rwandan word which means comforter. One of the names of the Holy Spirit, it means <em>‘the one called in alongside to help.’</em>
              </p>
              <p>
                Through the life story of Immaculée and Richard Hedden, God continues to bring comfort and restore hope to many. We believe it is God who makes us strong and invigorates us—we are simply His channels of grace.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 border-t border-primary-200 pt-12">
              <div>
                <motion.div 
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}
                  className="text-2xl font-serif text-primary-950 mb-3 uppercase tracking-wider"
                >
                  Immaculée & Richard Hedden
                </motion.div>
                <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-primary-700">Christian Speakers & Authors</div>
              </div>
              <div>
                <motion.div 
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}
                  className="text-2xl font-serif text-primary-950 mb-3 uppercase tracking-wider"
                >
                  Trained Counsellors
                </motion.div>
                <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-primary-700">Integrative Counselling</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
