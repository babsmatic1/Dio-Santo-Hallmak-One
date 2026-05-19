import { motion, AnimatePresence } from 'motion/react';
import { Building2, Compass, LineChart, Users, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    title: 'Business Facilitation',
    description: 'Impartial facilitation services helping managers understand capabilities, market trends, and navigate complex company dynamics.',
    icon: Users,
    details: 'Our business facilitation services provide an impartial perspective to complex company dynamics. We consider all aspects of international matrix organizations with the aim to optimize organizational and personal development to achieve the best results.',
    caseStudy: 'Helped a multinational corporation restructure their African operations, improving inter-departmental communication and increasing operational efficiency by 25%.',
  },
  {
    title: 'Contract Negotiation',
    description: 'Expert negotiation to protect your interests, securing advantageous terms for international deals and strategic partnerships.',
    icon: Compass,
    details: 'We specialize in navigating intricate multicultural nuances, ensuring that every contract is not just legally sound, but culturally adapted to guarantee long-term partnerships and mitigate regional risks.',
    caseStudy: 'Successfully negotiated a $50M infrastructure joint venture between a leading Asian investor and a local Nigerian firm, ensuring balanced risk distribution and compliance with local laws.',
  },
  {
    title: 'Project Management',
    description: 'Planning and implementation support across construction, oil & gas, and facilities management sectors.',
    icon: Building2,
    details: 'From inception to completion, we manage large-scale projects meticulously. We bring deep local knowledge and apply global project management frameworks to deliver on time and on budget.',
    caseStudy: 'Oversaw the construction and facility setup of a 50,000 sq ft logistics hub in Lagos, delivered 2 months ahead of schedule and 10% under budget.',
  },
  {
    title: 'Supply Chain Management',
    description: 'Strategic sourcing and lean management assessments to reduce total costs worldwide using cross-functional teams.',
    icon: LineChart,
    details: 'Our experienced consultants implement best-in-class supply management practices. Activities include strategic sourcing, planning implementation for key process areas, and lean management assessments.',
    caseStudy: 'Re-engineered the supply chain for a manufacturing client, reducing total raw material procurement costs by 15% worldwide.',
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="border-y border-brand-100 dark:border-brand-800 bg-gradient-to-b from-white to-[#F9B54C]/5 dark:from-brand-900 dark:to-brand-900/80 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-brand-100 dark:divide-brand-800">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-10 flex flex-col justify-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-transparent hover:bg-gray-50/50 dark:hover:bg-brand-800/10 cursor-pointer group"
              >
                <div className="inline-block px-3 py-1 bg-[#E50001]/10 dark:bg-brand-800/10 text-brand-800 dark:text-brand-500 rounded-full text-[11px] font-bold uppercase tracking-widest mb-4 w-max">
                  {service.title.split(' ')[0]}
                </div>
                <div className="mb-4 text-brand-900 dark:text-gray-300">
                  <Icon className="w-8 h-8" />
                </div>
                <h4 className="text-[20px] font-bold text-brand-900 dark:text-white mb-2 leading-tight transition-colors duration-300">{service.title}</h4>
                <p className="text-[14px] text-brand-500 dark:text-gray-400 leading-relaxed mb-6 transition-colors duration-300">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <button 
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center text-[13px] font-bold tracking-[0.1em] uppercase text-brand-800 dark:text-brand-500 hover:text-brand-900 dark:hover:text-white transition-colors group/btn"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-brand-900/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white dark:bg-brand-900 rounded-[4px] shadow-2xl overflow-hidden z-10 border border-brand-100 dark:border-brand-800"
            >
              <div className="p-8 sm:p-10">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 text-brand-500 hover:text-brand-900 dark:hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="inline-block px-3 py-1 bg-[#E50001]/10 dark:bg-brand-800/10 text-brand-800 dark:text-brand-500 rounded-full text-[11px] font-bold uppercase tracking-widest mb-6">
                  {selectedService.title.split(' ')[0]}
                </div>
                
                <h3 className="text-3xl font-bold text-brand-900 dark:text-white mb-4">{selectedService.title}</h3>
                <p className="text-brand-500 dark:text-gray-400 text-[16px] leading-[1.6] mb-8">
                  {selectedService.details}
                </p>
                
                <div className="bg-brand-50 dark:bg-gray-800 p-6 rounded-[4px] border border-brand-100 dark:border-gray-700">
                  <h4 className="text-[13px] font-bold tracking-[0.1em] uppercase text-brand-800 dark:text-brand-500 mb-3">Case Study Example</h4>
                  <p className="text-brand-900 dark:text-gray-300 text-[15px] italic leading-[1.6]">
                    "{selectedService.caseStudy}"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
