import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SendIcon, CheckCircleIcon } from 'lucide-react';
import { SectionDivider } from './SectionDivider';
type FormData = {
  name: string;
  email: string;
  attending: string;
  guests: number;
  meal: string;
  message: string;
};
type FormErrors = Partial<Record<keyof FormData, string>>;
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
export function RSVPForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    attending: '',
    guests: 1,
    meal: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';else
    if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email';
    if (!form.attending) errs.attending = 'Please select an option';
    if (form.attending === 'yes' && !form.meal)
    errs.meal = 'Please select a meal';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // Simulate submission (replace with Supabase/Firebase)
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };
  const inputClass =
  'w-full px-4 py-3 bg-cream-50 border border-emerald-200 rounded-lg font-lato text-emerald-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400 transition-all duration-300 placeholder:text-emerald-800/30';
  if (submitted) {
    return (
      <section id="rsvp" className="py-20 sm:py-28 bg-cream-50">
        <motion.div
          className="max-w-md mx-auto px-4 text-center"
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.6
          }}>
          
          <CheckCircleIcon className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
          <h3 className="font-playfair text-emerald-900 text-3xl mb-3">
            Thank You!
          </h3>
          <p className="font-lato text-emerald-800/60 text-base">
            Your RSVP has been received. We can't wait to celebrate with you!
          </p>
        </motion.div>
      </section>);

  }
  return (
    <section id="rsvp" className="py-20 sm:py-28 bg-cream-50">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-12">
          <p className="font-cormorant text-gold-500 text-sm tracking-[0.3em] uppercase mb-3">
            We hope you can make it
          </p>
          <h2 className="font-playfair text-emerald-900 text-4xl sm:text-5xl mb-4">
            RSVP
          </h2>
          <SectionDivider />
          <p className="font-lato text-emerald-800/60 text-sm mt-4">
            Please respond by June 20, 2025
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-lato text-emerald-900 text-sm mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                className={inputClass}
                placeholder="Your full name"
                value={form.name}
                onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value
                })
                } />
              
              {errors.name &&
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              }
            </div>

            <div>
              <label className="block font-lato text-emerald-900 text-sm mb-1.5">
                Email *
              </label>
              <input
                type="email"
                className={inputClass}
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value
                })
                } />
              
              {errors.email &&
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              }
            </div>

            <div>
              <label className="block font-lato text-emerald-900 text-sm mb-1.5">
                Will you attend? *
              </label>
              <div className="flex gap-3">
                {['yes', 'no'].map((opt) =>
                <button
                  key={opt}
                  type="button"
                  onClick={() =>
                  setForm({
                    ...form,
                    attending: opt
                  })
                  }
                  className={`flex-1 py-3 rounded-lg border text-sm font-lato transition-all duration-300 ${form.attending === opt ? 'bg-emerald-700 text-cream-50 border-emerald-700' : 'bg-cream-50 text-emerald-800 border-emerald-200 hover:border-emerald-400'}`}>
                  
                    {opt === 'yes' ? 'Joyfully Accept' : 'Regretfully Decline'}
                  </button>
                )}
              </div>
              {errors.attending &&
              <p className="text-red-500 text-xs mt-1">{errors.attending}</p>
              }
            </div>

            {form.attending === 'yes' &&
            <motion.div
              initial={{
                opacity: 0,
                height: 0
              }}
              animate={{
                opacity: 1,
                height: 'auto'
              }}
              className="space-y-5">
              
                <div>
                  <label className="block font-lato text-emerald-900 text-sm mb-1.5">
                    Number of Guests
                  </label>
                  <input
                  type="number"
                  min={1}
                  max={5}
                  className={inputClass}
                  value={form.guests}
                  onChange={(e) =>
                  setForm({
                    ...form,
                    guests: parseInt(e.target.value) || 1
                  })
                  } />
                
                </div>

                <div>
                  <label className="block font-lato text-emerald-900 text-sm mb-1.5">
                    Meal Preference *
                  </label>
                  <select
                  className={inputClass}
                  value={form.meal}
                  onChange={(e) =>
                  setForm({
                    ...form,
                    meal: e.target.value
                  })
                  }>
                  
                    <option value="">Select a meal</option>
                    <option value="beef">Beef Tenderloin</option>
                    <option value="chicken">Herb-Roasted Chicken</option>
                    <option value="fish">Pan-Seared Salmon</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                  </select>
                  {errors.meal &&
                <p className="text-red-500 text-xs mt-1">{errors.meal}</p>
                }
                </div>
              </motion.div>
            }

            <div>
              <label className="block font-lato text-emerald-900 text-sm mb-1.5">
                Message for the Couple
              </label>
              <textarea
                className={`${inputClass} resize-none h-24`}
                placeholder="Share your wishes..."
                value={form.message}
                onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value
                })
                } />
              
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-cream-50 rounded-lg font-lato text-sm tracking-wider uppercase transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50">
              
              {submitting ?
              <span>Sending...</span> :

              <>
                  <SendIcon className="w-4 h-4" />
                  <span>Send RSVP</span>
                </>
              }
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>);

}