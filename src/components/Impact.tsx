import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Impact() {
  const metrics = [
    { value: '20+', label: 'Years of Faith' },
    { value: '1000+', label: 'Lives Touched' },
    { value: '50+', label: 'Global Talks' },
    { value: '1', label: 'Powerful Book' },
  ];

  return (
    <section id="partnerships" className="relative py-32 md:py-40 bg-primary-950 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
          alt="Hands helping" 
          className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-primary-950/80" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-accent"></div>
              <span className="uppercase tracking-[0.2em] text-xs font-semibold text-accent">Charitable Partnerships</span>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-[4rem] font-serif leading-[1.1] mb-10 tracking-tight">
              Let the Little Children <br className="hidden md:block"/><span className="italic text-primary-300">Come to Me Charity.</span>
            </h3>
            <p className="text-primary-200 text-xl font-light leading-relaxed mb-12 max-w-2xl">
              We advocate for and support the needs of orphans and widows in Rwanda. Your partnership helps us provide tangible support—food, education, and shelter—to those who are most vulnerable, breathing hope into communities.
            </p>
            <a href="#contact" className="group inline-flex items-center gap-4 pb-3 border-b border-accent text-white hover:text-accent transition-colors">
              <span className="uppercase tracking-[0.15em] text-sm font-semibold">Support Our Charity</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-x-8 gap-y-16 lg:border-l lg:border-white/10 lg:pl-16">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-5xl md:text-6xl lg:text-[4.5rem] font-serif mb-4 text-white">
                  {metric.value.replace('+', '')}<span className="text-accent">+</span>
                </div>
                <div className="text-primary-300 text-[11px] uppercase tracking-[0.2em] font-semibold">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
