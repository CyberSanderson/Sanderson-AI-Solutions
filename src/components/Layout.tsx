import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, ChevronRight, Linkedin, Twitter, Mail } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About & Impact', path: '/about' },
  ];

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-rich-black text-white selection:bg-gold-400 selection:text-rich-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-rich-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/Sanderson AI Solutions Logo.png" 
              alt="Sanderson AI Solutions" 
              className="h-10 w-auto md:h-12 object-contain group-hover:opacity-80 transition-opacity duration-300"
            />
            <span className="font-serif text-lg md:text-xl tracking-wide font-semibold text-white group-hover:text-gold-400 transition-colors duration-300 hidden sm:inline">
              SANDERSON <span className="text-gold-400 group-hover:text-white transition-colors duration-300">AI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm uppercase tracking-widest hover:text-gold-400 transition-colors duration-300",
                  location.pathname === link.path ? "text-gold-400 font-semibold" : "text-white/70"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 border border-gold-400 text-gold-400 text-sm uppercase tracking-widest hover:bg-gold-400 hover:text-rich-black transition-all duration-300"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white hover:text-gold-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-rich-black border-b border-white/10 p-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-lg font-serif hover:text-gold-400 transition-colors",
                  location.pathname === link.path ? "text-gold-400" : "text-white/80"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contact"
              className="mt-4 w-full py-3 bg-gold-400 text-rich-black text-center uppercase tracking-widest font-semibold"
            >
              Contact Us
            </a>
          </motion.div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-charcoal border-t border-white/10 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <img 
                  src="/Sanderson AI Solutions Logo.png" 
                  alt="Sanderson AI Solutions" 
                  className="h-8 w-auto object-contain"
                />
                <span className="font-serif text-lg tracking-wide font-semibold text-white">
                  SANDERSON <span className="text-gold-400">AI</span>
                </span>
              </Link>
              <p className="text-white/60 max-w-md leading-relaxed mb-8">
                Empowering the economic backbone of our communities through intelligent automation. 
                We provide the best AI solutions for small business growth, securing the future of local enterprise.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold-400 hover:text-gold-400 transition-all">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold-400 hover:text-gold-400 transition-all">
                  <Twitter size={18} />
                </a>
                <a href="mailto:contact@sandersonai.com" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-gold-400 hover:text-gold-400 transition-all">
                  <Mail size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-gold-400 text-lg mb-6">Our Ecosystem</h4>
              <ul className="space-y-4">
                <li>
                  <a href="https://www.sentientprospect.com/" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                    <ChevronRight size={14} className="text-gold-400 group-hover:translate-x-1 transition-transform" />
                    Sentient Prospect
                  </a>
                </li>
                <li>
                  <a href="https://www.localleadbot.pro/" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                    <ChevronRight size={14} className="text-gold-400 group-hover:translate-x-1 transition-transform" />
                    Local Lead Bot Pro
                  </a>
                </li>
                <li>
                  <a href="https://www.servengines.com/" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                    <ChevronRight size={14} className="text-gold-400 group-hover:translate-x-1 transition-transform" />
                    Serv Engines
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-gold-400 text-lg mb-6">Company</h4>
              <ul className="space-y-4">
                <li>
                  <Link to="/about" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                    <ChevronRight size={14} className="text-gold-400 group-hover:translate-x-1 transition-transform" />
                    About & Impact
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                    <ChevronRight size={14} className="text-gold-400 group-hover:translate-x-1 transition-transform" />
                    Services
                  </Link>
                </li>
                <li>
                  <a href="#contact" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                    <ChevronRight size={14} className="text-gold-400 group-hover:translate-x-1 transition-transform" />
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Sanderson AI Solutions LLC. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/40">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
