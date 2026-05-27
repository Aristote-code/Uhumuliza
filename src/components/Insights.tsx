import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function Insights() {
  const articles = [
    {
      category: 'The Book',
      title: 'Under His Mighty Hand: Overcoming from the Rwandan Genocide',
      date: 'Available Now',
      image: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=2070&auto=format&fit=crop',
    },
    {
      category: 'Media',
      title: 'Immaculee Hedden talks to Carl Wilkens',
      date: 'Recent Interview',
      image: 'https://images.unsplash.com/photo-1563729784478-eb34bd0970b5?q=80&w=2070&auto=format&fit=crop',
    },
    {
      category: 'Counselling',
      title: 'Finding Hope: A Guide to Integrative Inner Healing',
      date: 'Article',
      image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop',
    }
  ];

  return (
    <section id="book" className="py-32 md:py-40 bg-primary-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-primary-950"></div>
              <span className="uppercase tracking-[0.2em] text-xs font-semibold text-primary-950">Media & Publications</span>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-[4rem] font-serif text-primary-950 leading-[1.1] tracking-tight">
              Words of Comfort <br className="hidden md:block"/>& Testimonies.
            </h3>
          </div>
          <a href="#" className="group inline-flex items-center gap-3 pb-2 border-b border-primary-950 text-primary-950 hover:text-accent hover:border-accent transition-colors shrink-0">
            <span className="uppercase tracking-[0.15em] text-sm font-semibold">View All Media</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Featured Article */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 group block relative h-[500px] lg:h-[700px] overflow-hidden"
          >
            <img 
              src={articles[0].image} 
              alt={articles[0].title}
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/40 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10 w-full h-full flex flex-col justify-end">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-accent text-white text-[11px] font-bold uppercase tracking-widest">{articles[0].category}</span>
                <span className="text-white/80 text-sm font-medium">{articles[0].date}</span>
              </div>
              <h4 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-8 pr-8 group-hover:text-primary-200 transition-colors leading-tight">
                {articles[0].title}
              </h4>
              <div className="inline-flex items-center gap-3 text-white/80 group-hover:text-white">
                <span className="text-sm uppercase tracking-widest font-semibold">Read Publication</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </div>
          </motion.a>

          {/* Secondary Articles */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {articles.slice(1).map((article, index) => (
              <motion.a
                href="#"
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                className="group flex flex-col h-full bg-white border border-primary-100 hover:border-primary-200 transition-colors"
                style={{ height: "calc(50% - 16px)" }}
              >
                <div className="relative h-56 lg:h-1/2 overflow-hidden shrink-0">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-950 text-[11px] font-bold uppercase tracking-widest">{article.category}</span>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-8">
                  <h4 className="text-2xl font-serif text-primary-950 mb-6 group-hover:text-accent transition-colors leading-snug">
                    {article.title}
                  </h4>
                  <div className="mt-auto flex items-center justify-between border-t border-primary-100 pt-6">
                    <span className="text-primary-500 text-sm font-medium block">{article.date}</span>
                    <div className="inline-flex items-center gap-2 text-primary-950 group-hover:text-accent transition-colors">
                      <span className="text-[11px] uppercase tracking-widest font-bold">Read</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
