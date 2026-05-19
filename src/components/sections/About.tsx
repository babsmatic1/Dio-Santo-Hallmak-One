import { motion } from 'motion/react';
import { Target, ShieldCheck, Sprout, Compass } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="pt-[58px] pb-24 lg:pt-[58px] lg:pb-32 bg-gradient-to-bl from-[#F9B54C]/10 via-white to-[#E50001]/10 dark:from-brand-900 dark:via-brand-900 dark:to-brand-900/50 text-brand-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[12px] font-bold tracking-[0.2em] text-brand-800 dark:text-brand-500 uppercase mb-4">About Us.</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] leading-tight mb-6 transition-colors duration-300">Navigating Africa for Overseas Investors.</h3>
            <p className="text-[18px] text-brand-500 dark:text-gray-300 mb-6 leading-[1.6]">
              Established in 2008, DSHO is a network of business professionals specializing in business brokerage, facilitation, and consulting. We offer overseas investors a hassle-free option for conducting business transactions in Nigeria and beyond.
            </p>
            <p className="text-[16px] text-brand-500 dark:text-gray-300 mb-10 leading-[1.6]">
              We understand the frustration of living abroad while trying to conduct business in Africa—travel costs, communication hurdles, and bureaucratic challenges. Our team bridges that gap.
            </p>
            
            <div className="grid grid-cols-2 gap-6 border-t border-brand-100 dark:border-brand-800 pt-8">
              <div>
                <div className="text-[32px] font-bold text-brand-900 dark:text-white mb-1 transition-colors duration-300">15+</div>
                <div className="text-[13px] uppercase tracking-[0.1em] text-brand-500 dark:text-gray-400">Years of Exp.</div>
              </div>
              <div>
                <div className="text-[32px] font-bold text-brand-900 dark:text-white mb-1 transition-colors duration-300">Global</div>
                <div className="text-[13px] uppercase tracking-[0.1em] text-brand-500 dark:text-gray-400">Network Reach</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex gap-6 p-8 bg-brand-50 dark:bg-brand-900/50 border border-brand-100 dark:border-brand-800 rounded-[4px] transition-colors duration-300">
              <div className="flex-shrink-0">
                <Target className="w-8 h-8 text-brand-800 dark:text-brand-500" />
              </div>
              <div>
                <h4 className="text-[20px] font-bold mb-2 text-brand-900 dark:text-white transition-colors duration-300">Our Proposition</h4>
                <p className="text-brand-500 dark:text-gray-400 text-[14px] leading-relaxed">Our development programs align directly with your strategy, starting with a diagnostic session to assess the corporate situation.</p>
              </div>
            </div>
            
            <div className="flex gap-6 p-8 bg-brand-50 dark:bg-brand-900/50 border border-brand-100 dark:border-brand-800 rounded-[4px] transition-colors duration-300">
              <div className="flex-shrink-0">
                <Compass className="w-8 h-8 text-brand-800 dark:text-brand-500" />
              </div>
              <div>
                <h4 className="text-[20px] font-bold mb-2 text-brand-900 dark:text-white transition-colors duration-300">Global Network, Local App</h4>
                <p className="text-brand-500 dark:text-gray-400 text-[14px] leading-relaxed">We draw inspiration from key commercial hubs Dubai, Shanghai, Singapore combining massive growth strategies with deep local knowledge.</p>
              </div>
            </div>

            <div className="flex gap-6 p-8 bg-brand-50 dark:bg-brand-900/50 border border-brand-100 dark:border-brand-800 rounded-[4px] transition-colors duration-300">
              <div className="flex-shrink-0">
                <ShieldCheck className="w-8 h-8 text-brand-800 dark:text-brand-500" />
              </div>
              <div>
                <h4 className="text-[20px] font-bold mb-2 text-brand-900 dark:text-white transition-colors duration-300">First-Hand Experience</h4>
                <p className="text-brand-500 dark:text-gray-400 text-[14px] leading-relaxed">Our trainers and consultants have international corporate backgrounds and have navigated the same challenges you face today.</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}