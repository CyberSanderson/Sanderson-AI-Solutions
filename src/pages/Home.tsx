import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Bot, BarChart3, Users, Zap, Globe, ShieldCheck, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-gold-900/20 via-rich-black to-rich-black z-0" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 border border-gold-400/30 rounded-full bg-gold-400/10 text-gold-400 text-xs uppercase tracking-[0.2em] mb-6">
              AI Automation Agency for Local Businesses
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-8">
              Securing the Future of <br />
              <span className="gold-gradient-text">Local Enterprise</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Sanderson AI Solutions LLC delivers the best AI solutions for small business growth. 
              We bridge the digital divide, empowering contractors and local owners with 
              enterprise-grade automation to compete in a rapidly evolving economy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/about"
                className="px-8 py-4 bg-gold-400 text-rich-black font-semibold uppercase tracking-widest hover:bg-white transition-colors duration-300 w-full sm:w-auto"
              >
                Our Economic Impact
              </Link>
              <a
                href="#ecosystem"
                className="px-8 py-4 border border-white/20 text-white font-semibold uppercase tracking-widest hover:border-gold-400 hover:text-gold-400 transition-colors duration-300 w-full sm:w-auto"
              >
                Explore Solutions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How Can AI Help Small Businesses Section */}
      <section className="py-24 bg-charcoal relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                How Can AI Help <br />
                <span className="text-gold-400">Small Businesses?</span>
              </h2>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                In today's economy, efficiency is survival. AI services for small businesses are no longer a luxury—they are a necessity for sustainability.
              </p>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                From AI answering services for small business that ensure no lead is left behind, to comprehensive AI consulting services for small business workflows, we provide the infrastructure for growth. We don't just offer tools; we offer a lifeline to operational excellence.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Operational Efficiency",
                  "24/7 Customer Response",
                  "Lead Capture Automation",
                  "Data-Driven Decisions"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold-400 rounded-full" />
                    <span className="text-white/90 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Bot className="w-8 h-8 text-gold-400" />,
                  title: "AI Customer Service",
                  desc: "AI customer service solutions for small business that handle inquiries instantly, 24/7/365."
                },
                {
                  icon: <Zap className="w-8 h-8 text-gold-400" />,
                  title: "Workflow Automation",
                  desc: "AI automation services for small businesses to eliminate repetitive tasks and reduce overhead."
                },
                {
                  icon: <BarChart3 className="w-8 h-8 text-gold-400" />,
                  title: "Growth Consulting",
                  desc: "Strategic AI consulting services for small business to identify high-impact opportunities."
                },
                {
                  icon: <Users className="w-8 h-8 text-gold-400" />,
                  title: "Lead Generation",
                  desc: "Automated outreach and engagement to keep your pipeline full without manual effort."
                }
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-8 bg-white/5 border border-white/10 hover:border-gold-400/50 transition-colors group"
                >
                  <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg group-hover:bg-gold-400/20 transition-colors">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3">{card.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Ecosystem Section */}
      <section id="ecosystem" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-gold-400 text-sm uppercase tracking-widest font-semibold">Our Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mt-4 mb-6">The Sanderson Ecosystem</h2>
            <p className="text-white/60 text-lg">
              A suite of specialized platforms representing the best AI tools for local business growth. 
              Each entity addresses a critical operational bottleneck.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sentient Prospect */}
            <motion.a
              href="https://www.sentientprospect.com/"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative p-10 bg-linear-to-b from-white/5 to-transparent border border-white/10 hover:border-gold-400/50 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gold-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <Globe className="w-12 h-12 text-white/80 mb-8 group-hover:text-gold-400 transition-colors" />
              <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-gold-400 transition-colors">Sentient Prospect</h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                Advanced B2B Lead Generation & Outreach. We utilize AI small business ideas to identify and engage your perfect clients automatically.
              </p>
              <div className="flex items-center text-sm font-semibold tracking-widest uppercase text-white/80 group-hover:text-gold-400 transition-colors">
                Visit Platform <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>

            {/* Local Lead Bot Pro */}
            <motion.a
              href="https://www.localleadbot.pro/"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative p-10 bg-linear-to-b from-white/5 to-transparent border border-white/10 hover:border-gold-400/50 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gold-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <ShieldCheck className="w-12 h-12 text-white/80 mb-8 group-hover:text-gold-400 transition-colors" />
              <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-gold-400 transition-colors">Local Lead Bot Pro</h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                Local Market Capture & Missed Call Text Back. The premier AI answering services for small business, ensuring you never miss a revenue opportunity.
              </p>
              <div className="flex items-center text-sm font-semibold tracking-widest uppercase text-white/80 group-hover:text-gold-400 transition-colors">
                Visit Platform <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>

            {/* Serv Engines */}
            <motion.a
              href="https://www.servengines.com/"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group relative p-10 bg-linear-to-b from-white/5 to-transparent border border-white/10 hover:border-gold-400/50 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gold-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <Cpu className="w-12 h-12 text-white/80 mb-8 group-hover:text-gold-400 transition-colors" />
              <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-gold-400 transition-colors">Serv Engines</h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                Operational & Workflow Automation. We are the AI automation agency for small businesses looking to streamline complex processes.
              </p>
              <div className="flex items-center text-sm font-semibold tracking-widest uppercase text-white/80 group-hover:text-gold-400 transition-colors">
                Visit Platform <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gold-900/10 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">
            Ready to Modernize Your Operations?
          </h2>
          <p className="text-white/70 text-lg mb-10 leading-relaxed">
            As a leading AI automation agency for local businesses, we are dedicated to your success. 
            Explore our ecosystem or contact us to discuss how we can implement AI automation examples tailored to your needs.
          </p>
          <a
            href="mailto:support@sandersonaisolutions.com"
            className="inline-block px-10 py-5 bg-gold-400 text-rich-black font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
