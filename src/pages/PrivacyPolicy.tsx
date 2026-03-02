import React from 'react';
import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-rich-black text-white py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6"
      >
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-gold-400">Privacy Policy</h1>
        <p className="text-white/60 text-lg mb-12">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="font-serif text-3xl font-bold mb-4 text-white">Introduction</h2>
            <p className="text-white/80 leading-relaxed">
              Sanderson AI Solutions LLC ("we", "us", "our", or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and utilize our services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4 text-white">1. Information We Collect</h2>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                <strong>Personal Information:</strong> We may collect information about you in a variety of ways. The information we may collect on the site includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company information</li>
                <li>Any other information you choose to provide</li>
              </ul>
              <p>
                <strong>Automatic Information:</strong> When you visit our website, we automatically collect certain information about your device and your use of the site, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring page information</li>
                <li>Device information</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4 text-white">2. Use of Your Information</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
              <li>Generate a personal profile about you to make future visits to the Site easier and more personalized</li>
              <li>Increase the efficiency and operation of the Site</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site</li>
              <li>Notify you of updates to the Site</li>
              <li>Process your transactions and send related information</li>
              <li>Respond to your inquiries, questions, and requests</li>
              <li>Email you regarding updates, informational and promotional materials, and other matters</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4 text-white">3. Disclosure of Your Information</h2>
            <p className="text-white/80 leading-relaxed">
              We may share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/80 ml-4 mt-4">
              <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information is necessary to comply with the law, enforce our site policies, or protect ours or others' rights, property, and safety.</li>
              <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us, including payment processing, data analysis, email delivery, and customer service.</li>
              <li><strong>Business Transfer:</strong> If Sanderson AI Solutions LLC is involved in a merger, acquisition, bankruptcy, dissolution, reorganization, or similar transaction, your information may be transferred as part of that transaction.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4 text-white">4. Security of Your Information</h2>
            <p className="text-white/80 leading-relaxed">
              We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-3xl font-bold mb-4 text-white">5. Contact Us</h2>
            <p className="text-white/80 leading-relaxed">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 text-white/80">
              <p className="mb-2"><strong>Sanderson AI Solutions LLC</strong></p>
              <p className="mb-2">Email: <a href="mailto:contact@sandersonai.com" className="text-gold-400 hover:underline">contact@sandersonai.com</a></p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
