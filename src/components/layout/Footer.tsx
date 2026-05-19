import React, { useState } from 'react';
import { Send } from 'lucide-react';
import logoImage from '../../assets/images/regenerated_image_1779194347634.jpg';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if(email) {
      alert(`Subscribed with ${email}`);
      setEmail('');
    }
  };
  
  return (
    <footer className="bg-white dark:bg-brand-900 border-t border-brand-100 dark:border-brand-800 text-brand-900 dark:text-white py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          <div className="md:col-span-5 lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <img src={logoImage} alt="DSHO Logo" className="h-10 sm:h-14 md:h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-brand-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
              Global expertise with local knowledge. DSHO provides impartial facilitation services, contract negotiation, and supply chain solutions.
            </p>
          </div>

          <div className="md:col-span-7 lg:col-span-8 flex flex-col items-start md:items-end w-full">
            <h4 className="text-[14px] font-bold tracking-[0.1em] uppercase text-brand-900 dark:text-white mb-4">Subscribe to our Newsletter</h4>
            <p className="text-brand-500 dark:text-gray-400 text-sm mb-4">Get the latest insights and news from our global network.</p>
            
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto md:max-w-md">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                required
                className="w-full md:w-64 px-4 py-3 bg-brand-50 dark:bg-gray-800 border-y border-l border-brand-100 dark:border-gray-700 rounded-l-[4px] focus:outline-none focus:border-brand-800 focus:ring-1 focus:ring-brand-800 transition-colors text-sm dark:text-white"
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-brand-900 dark:bg-white text-white dark:text-brand-900 font-semibold rounded-r-[4px] hover:bg-black dark:hover:bg-gray-200 transition-all duration-300 hover:shadow-lg active:scale-95 flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-brand-100 dark:border-brand-800">
          <p className="text-brand-500 dark:text-gray-400 text-sm font-medium">
            &copy; {currentYear} Dio Santo Hallmak One Limited. All rights reserved.
          </p>
          
          
        </div>
      </div>
    </footer>
  );
}
