import React from 'react';
import { motion } from 'motion/react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-rich-black text-white py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6"
      >
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-gold-400">Terms of Service</h1>
        <p className="text-white/60 text-lg mb-12">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="font-serif text-3xl font-bold mb-4 text-white">1. Agreement to Terms</h2>
            <p className="text-white/80 leading-relaxed">
              By accessing and using this website operated by Sanderson AI Solutions LLC ("Company", "we", "us", "our"), you accept and agree to be bound by and abide by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4 text-white">2. Use License</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Sanderson AI Solutions LLC's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
              <li>Attempting to decompile or reverse engineer any software contained on Sanderson AI Solutions LLC's website</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4 text-white">3. Disclaimer</h2>
            <p className="text-white/80 leading-relaxed">
              The materials on Sanderson AI Solutions LLC's website are provided on an 'as is' basis. Sanderson AI Solutions LLC makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4 text-white">4. Limitations</h2>
            <p className="text-white/80 leading-relaxed">
              In no event shall Sanderson AI Solutions LLC or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Sanderson AI Solutions LLC's website, even if Sanderson AI Solutions LLC or a Sanderson AI Solutions LLC authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4 text-white">5. Accuracy of Materials</h2>
            <p className="text-white/80 leading-relaxed">
              The materials appearing on Sanderson AI Solutions LLC's website could include technical, typographical, or photographic errors. Sanderson AI Solutions LLC does not warrant that any of the materials on its website are accurate, complete, or current. Sanderson AI Solutions LLC may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4 text-white">6. Links</h2>
            <p className="text-white/80 leading-relaxed">
              Sanderson AI Solutions LLC has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Sanderson AI Solutions LLC of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4 text-white">7. Modifications</h2>
            <p className="text-white/80 leading-relaxed">
              Sanderson AI Solutions LLC may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4 text-white">8. Governing Law</h2>
            <p className="text-white/80 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4 text-white">9. User Responsibilities</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              As a user of this website, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li>Comply with all applicable laws and regulations</li>
              <li>Not engage in any conduct that restricts or inhibits anyone's use or enjoyment of our website</li>
              <li>Not submit false, inaccurate, misleading, or deceptive information</li>
              <li>Not harass, threaten, embarrass, or cause distress or discomfort to any individual</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4 text-white">10. Contact Information</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="text-white/80">
              <p className="mb-2"><strong>Sanderson AI Solutions LLC</strong></p>
              <p className="mb-2">Email: <a href="mailto:support@sandersonaisolutions.com" className="text-gold-400 hover:underline">support@sandersonaisolutions.com</a></p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
