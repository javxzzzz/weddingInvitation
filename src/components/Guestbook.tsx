import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  BookOpenIcon,
  SendIcon,
  ChevronLeftIcon,
  ChevronRightIcon } from
'lucide-react';
import { SectionDivider } from './SectionDivider';
type GuestMessage = {
  id: number;
  name: string;
  message: string;
  timestamp: string;
};
function AnimatedSection({
  children,
  className,
  delay = 0




}: {children: React.ReactNode;className?: string;delay?: number;}) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y: 40
      }}
      animate={
      inView ?
      {
        opacity: 1,
        y: 0
      } :
      undefined
      }
      transition={{
        duration: 0.8,
        delay,
        ease: 'easeOut'
      }}>
      
      {children}
    </motion.div>);

}
const initialMessages: GuestMessage[] = [
{
  id: 1,
  name: 'Javxz',
  message:
  'COnongratulations!',
  timestamp: 'April 16, 2026'
},
{
  id: 2,
  name: 'Joyca',
  message:
  "Congratulations!",
  timestamp: 'April 6, 2026'
},
{
  id: 3,
  name: 'Jane',
  message:
  'So happy for you!',
  timestamp: 'April 16, 2026'
},
{
  id: 4,
  name: 'John',
  message:
  'Congratulations!',
  timestamp: 'April 16, 2026'
},
{
  id: 5,
  name: 'Jayvin',
  message:
  "See you at the wedding!",
  timestamp: 'April 16, 2026'
}];

const MESSAGES_PER_PAGE = 3;
export function Guestbook() {
  const [messages, setMessages] = useState<GuestMessage[]>(initialMessages);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{
    name?: string;
    message?: string;
  }>({});
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(messages.length / MESSAGES_PER_PAGE);
  const paginatedMessages = messages.slice(
    currentPage * MESSAGES_PER_PAGE,
    (currentPage + 1) * MESSAGES_PER_PAGE
  );
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: typeof errors = {};
    if (!name.trim()) errs.name = 'Name is required';
    if (!message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    const newMsg: GuestMessage = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      timestamp: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    };
    setMessages([newMsg, ...messages]);
    setName('');
    setMessage('');
    setCurrentPage(0);
  };
  const goToPrev = () => setCurrentPage((p) => Math.max(0, p - 1));
  const goToNext = () => setCurrentPage((p) => Math.min(totalPages - 1, p + 1));
  const inputClass =
  'w-full px-4 py-3 bg-emerald-900/30 border border-gold-400/20 rounded-lg font-lato text-cream-50 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400/40 focus:border-gold-400 transition-all duration-300 placeholder:text-cream-200/30';
  return (
    <section
      id="guestbook"
      className="py-20 sm:py-28 bg-emerald-950 relative overflow-hidden">
      
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, #d4a853 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-12">
          <div className="w-14 h-14 rounded-full bg-emerald-800 border border-gold-400/30 flex items-center justify-center mx-auto mb-6">
            <BookOpenIcon className="w-6 h-6 text-gold-400" />
          </div>
          <p className="font-cormorant text-gold-400/70 text-sm tracking-[0.3em] uppercase mb-3">
            Leave your wishes
          </p>
          <h2 className="font-playfair text-cream-50 text-4xl sm:text-5xl mb-4">
            Guestbook
          </h2>
          <SectionDivider />
        </AnimatedSection>

        {/* Form */}
        <AnimatedSection delay={0.1} className="mb-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                className={inputClass}
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)} />
              
              {errors.name &&
              <p className="text-red-400 text-xs mt-1">{errors.name}</p>
              }
            </div>
            <div>
              <textarea
                className={`${inputClass} resize-none h-24`}
                placeholder="Write your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)} />
              
              {errors.message &&
              <p className="text-red-400 text-xs mt-1">{errors.message}</p>
              }
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-emerald-700 hover:bg-emerald-600 text-cream-50 rounded-lg font-lato text-sm tracking-wider uppercase transition-colors duration-300 flex items-center gap-2">
              
              <SendIcon className="w-4 h-4" />
              Sign Guestbook
            </button>
          </form>
        </AnimatedSection>

        {/* Messages */}
        <div className="space-y-4 min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              className="space-y-4"
              initial={{
                opacity: 0,
                x: 20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              exit={{
                opacity: 0,
                x: -20
              }}
              transition={{
                duration: 0.3
              }}>
              
              {paginatedMessages.map((msg) =>
              <div
                key={msg.id}
                className="bg-emerald-900/40 border border-gold-400/15 rounded-xl p-5 backdrop-blur-sm">
                
                  <div className="flex items-baseline justify-between mb-2">
                    <h4 className="font-playfair text-gold-400 text-base">
                      {msg.name}
                    </h4>
                    <span className="font-lato text-cream-200/30 text-xs">
                      {msg.timestamp}
                    </span>
                  </div>
                  <p className="font-lato text-cream-200/70 text-sm leading-relaxed">
                    {msg.message}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 &&
        <div className="flex items-center justify-center gap-4 mt-8">
            <button
            onClick={goToPrev}
            disabled={currentPage === 0}
            className="w-10 h-10 rounded-full border border-gold-400/20 flex items-center justify-center text-gold-400 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gold-400/10 transition-colors duration-300"
            aria-label="Previous page">
            
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <span className="font-lato text-cream-200/50 text-sm">
              {currentPage + 1} of {totalPages}
            </span>
            <button
            onClick={goToNext}
            disabled={currentPage === totalPages - 1}
            className="w-10 h-10 rounded-full border border-gold-400/20 flex items-center justify-center text-gold-400 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gold-400/10 transition-colors duration-300"
            aria-label="Next page">
            
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        }
      </div>
    </section>);

}