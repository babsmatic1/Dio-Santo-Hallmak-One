import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-to-t from-[#E50001]/10 to-brand-50 dark:from-brand-900 dark:to-brand-900/50 border-t border-brand-100 dark:border-brand-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[12px] font-bold tracking-[0.2em] text-brand-800 dark:text-brand-500 uppercase mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] mb-6 text-brand-900 dark:text-white transition-colors duration-300">Let's start a conversation.</h3>
            <p className="text-[18px] text-brand-500 dark:text-gray-300 mb-10 max-w-[540px] leading-[1.6]">
              Whether you are looking to initiate a new project, expand to Africa, or optimize your supply chain, we are here to help.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 border-b border-brand-100 dark:border-brand-800 pb-8 transition-colors duration-300">
                <div className="w-12 h-12 bg-white dark:bg-brand-900 border border-brand-100 dark:border-brand-800 rounded-[4px] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-brand-800 dark:text-brand-500" />
                </div>
                <div>
                  <h4 className="text-[16px] font-bold mb-2 text-brand-900 dark:text-white transition-colors duration-300">Lagos Office (HQ)</h4>
                  <p className="text-brand-500 dark:text-gray-400 text-[15px] leading-relaxed">No. 276A Kofo Abayomi Street,<br/>Victoria Island, Lagos, Nigeria.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 border-b border-brand-100 dark:border-brand-800 pb-8 transition-colors duration-300">
                <div className="w-12 h-12 bg-white dark:bg-brand-900 border border-brand-100 dark:border-brand-800 rounded-[4px] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-brand-800 dark:text-brand-500" />
                </div>
                <div>
                  <h4 className="text-[16px] font-bold mb-2 text-brand-900 dark:text-white transition-colors duration-300">Phone</h4>
                  <p className="text-brand-500 dark:text-gray-400 text-[15px] leading-relaxed">+44 753 944 4800 (UK)</p>
                  <p className="text-brand-500 dark:text-gray-400 text-[15px] leading-relaxed">+234 703 616 1623 (NG)</p>
                  <p className="text-brand-500 dark:text-gray-400 text-[15px] leading-relaxed">+234 708 765 9565 (NG)</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white dark:bg-brand-900 border border-brand-100 dark:border-brand-800 rounded-[4px] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-brand-800 dark:text-brand-500" />
                </div>
                <div>
                  <h4 className="text-[16px] font-bold mb-2 text-brand-900 dark:text-white transition-colors duration-300">Email</h4>
                  <a href="mailto:gbenga.shonubi@dsholtd.com" className="relative inline-block text-brand-500 dark:text-gray-400 text-[15px] leading-relaxed hover:text-brand-800 dark:hover:text-brand-500 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-brand-800 dark:after:bg-brand-500 after:transition-all after:duration-300 hover:after:w-full">
                    gbenga.shonubi@dsholtd.com
                  </a>
                  <br />
                  <a href="mailto:gsdsho@gmail.com" className="relative inline-block text-brand-500 dark:text-gray-400 text-[15px] leading-relaxed hover:text-brand-800 dark:hover:text-brand-500 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-brand-800 dark:after:bg-brand-500 after:transition-all after:duration-300 hover:after:w-full">
                    gsdsho@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-brand-900 p-10 md:p-12 border border-brand-100 dark:border-brand-800 rounded-[4px] transition-colors duration-300"
          >
            <h4 className="text-[24px] font-bold tracking-tight text-brand-900 dark:text-white mb-8 transition-colors duration-300">Send an Inquiry</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[13px] font-bold tracking-[0.1em] uppercase text-brand-500 dark:text-gray-400 mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-brand-100 dark:border-gray-700 rounded-[4px] focus:outline-none focus:border-brand-800 focus:ring-1 focus:ring-brand-800 transition-colors dark:text-white" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[13px] font-bold tracking-[0.1em] uppercase text-brand-500 dark:text-gray-400 mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-brand-100 dark:border-gray-700 rounded-[4px] focus:outline-none focus:border-brand-800 focus:ring-1 focus:ring-brand-800 transition-colors dark:text-white" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-[13px] font-bold tracking-[0.1em] uppercase text-brand-500 dark:text-gray-400 mb-2">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-brand-100 dark:border-gray-700 rounded-[4px] focus:outline-none focus:border-brand-800 focus:ring-1 focus:ring-brand-800 transition-colors dark:text-white" placeholder="How can we help?" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[13px] font-bold tracking-[0.1em] uppercase text-brand-500 dark:text-gray-400 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-brand-100 dark:border-gray-700 rounded-[4px] focus:outline-none focus:border-brand-800 focus:ring-1 focus:ring-brand-800 transition-colors dark:text-white" placeholder="Briefly describe your project or needs..."></textarea>
              </div>
              
              <button type="submit" className="w-full px-8 py-4 bg-[#E50001] text-white font-semibold rounded-[4px] hover:bg-[#E50001]/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-md mt-4">
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
