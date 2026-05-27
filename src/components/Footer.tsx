import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24 border-b border-white/10 pb-24">
          <div className="lg:col-span-5 pr-8">
            <span className="block font-serif text-3xl md:text-4xl text-white mb-8 tracking-wide">
              Uhumuliza.
            </span>
            <p className="text-lg md:text-xl leading-relaxed text-primary-300 mb-10 max-w-sm font-light">
              Christian speakers, authors and counsellors helping people find hope and empowering vulnerability.
            </p>
            <div className="flex gap-4">
               <a href="#" aria-label="Skype" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary-950 hover:border-white transition-all duration-300">
                 <span className="text-xs font-semibold uppercase">Sk</span>
               </a>
               <a href="#" aria-label="Twitter" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary-950 hover:border-white transition-all duration-300">
                 <span className="text-xs font-semibold uppercase">Tw</span>
               </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-8 uppercase tracking-[0.2em] text-[11px]">Directory</h4>
            <ul className="space-y-6 text-sm font-light text-primary-200">
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Counselling</a></li>
              <li><a href="#partnerships" className="hover:text-accent transition-colors">Partnerships</a></li>
              <li><a href="#book" className="hover:text-accent transition-colors">The Book</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-8 uppercase tracking-[0.2em] text-[11px]">Contact</h4>
            <ul className="space-y-6 text-sm font-light text-primary-200">
              <li>info@uhumuliza.com</li>
              <li>rhedden2@gmail.com</li>
              <li>07552223433</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-8 uppercase tracking-[0.2em] text-[11px]">Newsletter</h4>
            <p className="text-sm font-light text-primary-300 mb-8 leading-relaxed">
              Subscribe to receive updates, encouraging words, and our latest charity publications directly to your inbox.
            </p>
            <form className="flex group relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-b border-white/30 text-white text-sm px-0 py-4 w-full focus:outline-none focus:border-accent transition-colors font-light placeholder:text-primary-500"
                required
              />
              <button 
                type="submit"
                className="absolute right-0 bottom-4 text-primary-300 group-hover:text-accent group-focus-within:text-accent transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[12px] font-light text-primary-500 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Uhumuliza Ltd. All Rights Reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
