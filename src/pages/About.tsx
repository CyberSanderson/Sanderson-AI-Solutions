import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, TrendingUp, Building2, Handshake } from 'lucide-react';

export default function About() {
  return (
    <div className="overflow-hidden">
      {/* Header */}
      <section className="relative py-24 px-6 bg-charcoal border-b border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
          >
            Our Mission & <span className="text-gold-400">Economic Impact</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed"
          >
            Sanderson AI Solutions LLC is more than an AI automation agency for small businesses. 
            We are an economic development engine, dedicated to preserving the vitality of local commerce through technological empowerment.
          </motion.p>
        </div>
      </section>

      {/* Core Values / Impact */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <span className="text-gold-400 text-sm uppercase tracking-widest font-semibold mb-2 block">Why We Exist</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Bridging the Technology Gap</h2>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                Small businesses are the backbone of our economy, yet they often lack access to the enterprise-grade tools that large corporations take for granted. We provide the best AI solutions for small business owners, leveling the playing field.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                By implementing AI automation for small businesses, we help local contractors and service providers reclaim their time, increase revenue, and secure their legacy in the digital age.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 bg-white/5 border border-white/10 rounded-sm">
                <TrendingUp className="w-10 h-10 text-gold-400 mb-4" />
                <h3 className="text-xl font-serif font-bold mb-2">Revenue Growth</h3>
                <p className="text-white/60 text-sm">Automating lead capture and follow-up to ensure zero missed opportunities.</p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-sm">
                <Building2 className="w-10 h-10 text-gold-400 mb-4" />
                <h3 className="text-xl font-serif font-bold mb-2">Local Stability</h3>
                <p className="text-white/60 text-sm">Strengthening local businesses to keep jobs and capital within the community.</p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-sm">
                <Handshake className="w-10 h-10 text-gold-400 mb-4" />
                <h3 className="text-xl font-serif font-bold mb-2">Grant Readiness</h3>
                <p className="text-white/60 text-sm">Positioning businesses for funding through modernized, data-driven operations.</p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-sm">
                <CheckCircle2 className="w-10 h-10 text-gold-400 mb-4" />
                <h3 className="text-xl font-serif font-bold mb-2">Operational Excellence</h3>
                <p className="text-white/60 text-sm">Reducing overhead through intelligent AI automation examples and workflows.</p>
              </div>
            </div>
          </div>

          {/* Strategic Focus */}
          <div className="bg-white/5 border border-white/10 p-10 md:p-16 rounded-sm">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-center">Our Strategic Focus</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl font-bold text-gold-400 mb-4 uppercase tracking-wider">01. Automation</h3>
                <p className="text-white/70 leading-relaxed">
                  We function as a premier AI automation agency for local businesses, deploying bots and workflows that handle repetitive tasks. From scheduling to invoicing, we automate the mundane so owners can focus on the meaningful.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gold-400 mb-4 uppercase tracking-wider">02. Intelligence</h3>
                <p className="text-white/70 leading-relaxed">
                  Our AI consulting services for small business go beyond software. We analyze business data to uncover hidden revenue streams and operational bottlenecks, providing actionable insights for sustainable growth.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gold-400 mb-4 uppercase tracking-wider">03. Connection</h3>
                <p className="text-white/70 leading-relaxed">
                  Through tools like Local Lead Bot Pro, we provide AI customer service solutions for small business that maintain the personal touch. We believe technology should enhance human connection, not replace it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keywords Block (Hidden visually but present for structure/context if needed, 
          though for this design we integrated them into the copy above. 
          Here is a final reinforcing statement.) */}
      <section className="py-16 px-6 text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/40 text-sm">
            Sanderson AI Solutions LLC is proud to be among the leading ai automation companies dedicated to the service sector. 
            Whether you are looking for ai small business ideas or a full-service ai automation agency, we are your partner in progress.
          </p>
        </div>
      </section>
    </div>
  );
}
