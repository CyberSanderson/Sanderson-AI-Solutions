import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X } from 'lucide-react';

interface LeadCaptureFormProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

export default function LeadCaptureForm({
  isOpen,
  onClose,
  title = "Get Started",
  description = "Tell us about your business and we'll be in touch soon."
}: LeadCaptureFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('phone', formData.phone);
      payload.append('company', formData.company);
      payload.append('website', formData.website);
      payload.append('message', formData.message);
      payload.append(
        'summary',
        `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || 'Not provided'}`
      );
      payload.append('_replyto', formData.email);
      payload.append('_subject', 'New Lead Capture Submission');

      const response = await fetch('https://formspree.io/f/xpqjgvnp', {
        method: 'POST',
        body: payload,
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', website: '', message: '' });
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-rich-black border border-white/10 rounded-lg p-8 shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/60 hover:text-gold-400 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-serif font-bold text-white mb-3">{title}</h2>
          <p className="text-white/70 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Form or Success Message */}
        {submitStatus === 'success' ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-400/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-white mb-2">Thank You!</h3>
            <p className="text-white/70">We've received your information and will be in touch shortly.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-white/90 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white placeholder-white/40 focus:outline-none focus:border-gold-400/50 focus:bg-white/10 transition-all"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-white/90 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white placeholder-white/40 focus:outline-none focus:border-gold-400/50 focus:bg-white/10 transition-all"
                placeholder="john@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-white/90 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white placeholder-white/40 focus:outline-none focus:border-gold-400/50 focus:bg-white/10 transition-all"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-white/90 mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white placeholder-white/40 focus:outline-none focus:border-gold-400/50 focus:bg-white/10 transition-all"
                placeholder="Your Company"
              />
            </div>

            {/* Website */}
            <div>
              <label htmlFor="website" className="block text-sm font-semibold text-white/90 mb-2">
                Company Website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white placeholder-white/40 focus:outline-none focus:border-gold-400/50 focus:bg-white/10 transition-all"
                placeholder="https://example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-white/90 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white placeholder-white/40 focus:outline-none focus:border-gold-400/50 focus:bg-white/10 transition-all resize-none"
                placeholder="Tell us more about your inquiry..."
              ></textarea>
            </div>

            {/* Error Message */}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-sm"
              >
                Something went wrong. Please try again.
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-gold-400 text-rich-black font-bold uppercase tracking-widest rounded hover:bg-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>

            <p className="text-xs text-white/50 text-center">
              We respect your privacy. Your information will only be used to contact you.
            </p>
          </form>
        )}
      </motion.div>
    </div>
  );
}
