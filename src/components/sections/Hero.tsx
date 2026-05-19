import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight, Globe2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import heroImage1 from '../../assets/images/services_main.jpg';
import heroImage2 from '../../assets/images/about_us_main.jpg';
import heroImage3 from '../../assets/images/focus_main.jpg';

const carouselImages = [
  heroImage1,
  heroImage2,
  heroImage3,
];

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIdx((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () => setCurrentIdx((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

  return (
    <section id="home" className="relative h-[800px] flex items-center pt-[100px] pb-0 lg:pt-[100px] lg:pb-0 overflow-hidden bg-gradient-to-br from-brand-50 via-white to-[#F9B54C]/10 dark:from-brand-900 dark:via-brand-900 dark:to-[#E50001]/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-[700px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[12px] font-bold uppercase tracking-[0.2em] text-brand-800 dark:text-brand-500 mb-6"
          >
            Established Excellence since 2008
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl lg:text-[72px] leading-[1.05] tracking-[-0.03em] font-bold mb-8 text-brand-900 dark:text-white transition-colors duration-300"
          >
            Precision Infrastructure & Project Management.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[18px] leading-[1.6] text-brand-500 dark:text-gray-300 mb-10 max-w-[540px]"
          >
            We deliver high-stakes consulting, contract negotiation, and supply chain management solutions for firms demanding global capability.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#E50001] text-white font-semibold rounded-[4px] hover:bg-[#E50001]/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-md"
            >
              Start a Project
            </a>
              <a 
                href="#services" 
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-[#E50001] dark:text-[#F9B54C] border-2 border-[#E50001] dark:border-[#F9B54C] font-semibold rounded-[4px] hover:bg-[#E50001] hover:text-white dark:hover:bg-[#F9B54C] dark:hover:text-brand-900 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-sm"
              >
                Explore Services
              </a>
            </motion.div>
          </div>
          
          <div className="relative hidden lg:block h-[600px] w-full rounded-[4px] overflow-hidden shadow-lg group">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentIdx}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                src={carouselImages[currentIdx]} 
                alt={`Corporate Environment ${currentIdx + 1}`} 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            
            <div className="absolute bottom-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                onClick={prevSlide}
                className="w-10 h-10 bg-white/90 backdrop-blur text-brand-900 rounded-full flex items-center justify-center hover:bg-brand-900 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-10 h-10 bg-white/90 backdrop-blur text-brand-900 rounded-full flex items-center justify-center hover:bg-brand-900 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
