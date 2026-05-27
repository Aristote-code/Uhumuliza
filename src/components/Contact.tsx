import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-primary-950"></div>
              <span className="uppercase tracking-[0.2em] text-xs font-semibold text-primary-950">Get In Touch</span>
            </div>
            
            <h3 className="text-4xl md:text-5xl lg:text-[4rem] font-serif text-primary-950 leading-[1.1] mb-8 tracking-tight">
              Reach Out & <br/><span className="italic text-primary-400">Connect.</span>
            </h3>
            
            <p className="text-lg text-primary-600 font-light leading-relaxed mb-12 max-w-md">
              Whether you are looking for counselling, interested in booking us for a speaking engagement, or would like to support our charity, we would love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-primary-100 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-primary-900 mb-2">Phone / Skype</h4>
                  <p className="text-primary-600 font-light">07552223433</p>
                  <p className="text-primary-600 font-light mt-1">Skype: Richard and Immaculee Hedden</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-primary-100 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-primary-900 mb-2">Email</h4>
                  <p className="text-primary-600 font-light">rhedden2@gmail.com</p>
                </div>
              </div>

               <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-primary-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-primary-900 mb-2">Location</h4>
                  <p className="text-primary-600 font-light">Based in the United Kingdom</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-primary-50 p-10 md:p-14 border border-primary-100"
          >
            <form className="flex flex-col gap-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-xs font-semibold uppercase tracking-widest text-primary-900">First Name</label>
                  <input type="text" id="firstName" className="bg-transparent border-b border-primary-200 py-3 text-primary-950 focus:outline-none focus:border-accent transition-colors" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-xs font-semibold uppercase tracking-widest text-primary-900">Last Name</label>
                  <input type="text" id="lastName" className="bg-transparent border-b border-primary-200 py-3 text-primary-950 focus:outline-none focus:border-accent transition-colors" required />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-primary-900">Email Address</label>
                <input type="email" id="email" className="bg-transparent border-b border-primary-200 py-3 text-primary-950 focus:outline-none focus:border-accent transition-colors" required />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-widest text-primary-900">Subject</label>
                <select id="subject" className="bg-transparent border-b border-primary-200 py-3 text-primary-950 focus:outline-none focus:border-accent transition-colors appearance-none" required>
                  <option value="">Select a topic...</option>
                  <option value="counselling">Counselling Inquiry</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="book">The Book Inquiry</option>
                  <option value="charity">Charity / Donation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-primary-900">Message</label>
                <textarea id="message" rows={4} className="bg-transparent border-b border-primary-200 py-3 text-primary-950 focus:outline-none focus:border-accent transition-colors resize-none" required></textarea>
              </div>
              
              <button type="submit" className="group flex items-center justify-center gap-3 bg-primary-950 text-white py-4 px-8 hover:bg-accent transition-colors duration-300 self-start">
                <span className="uppercase tracking-[0.15em] text-sm font-semibold">Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
