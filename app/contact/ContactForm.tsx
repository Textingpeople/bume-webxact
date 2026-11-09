'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { LEGAL_NAME, SUPPORT_EMAIL, ADDRESS_LINE_1, ADDRESS_LINE_2, SMS_NO_SHARING_CLAUSE, SMS_SECURITY_NOTE } from '../lib/content';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1200);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />
      <section className="py-12" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#1F2937' }}>Contact Us</h1>
          <p className="text-lg" style={{ color: '#6B7280' }}>We&apos;re here to help. Reach out with any questions, concerns, or feedback.</p>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#1F2937' }}>Send Us a Message</h2>
            {submitted ? (
              <div className="rounded-xl p-8 text-center" style={{ backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#DCFCE7' }}>
                  <svg className="w-8 h-8" style={{ color: '#16A34A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1F2937' }}>Message sent.</h3>
                <p style={{ color: '#6B7280' }}>Thank you for reaching out. We&apos;ll get back to you within 1–2 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#1F2937' }}>Full Name *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Jane Smith" className="block w-full px-4 py-3 rounded-lg text-gray-900" style={{ border: '1px solid #E5E7EB' }} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#1F2937' }}>Email Address *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="jane@example.com" className="block w-full px-4 py-3 rounded-lg text-gray-900" style={{ border: '1px solid #E5E7EB' }} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#1F2937' }}>Subject *</label>
                  <select name="subject" required value={formData.subject} onChange={handleChange} className="block w-full px-4 py-3 rounded-lg text-gray-900" style={{ border: '1px solid #E5E7EB' }}>
                    <option value="">Select a topic...</option>
                     <option value="demo">Book a demo</option>
                     <option value="support">Customer Support</option>
                     <option value="sms">Text message (SMS) help</option>
                     <option value="general">General Inquiry</option>
                   </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#1F2937' }}>Message *</label>
                  <textarea name="message" required rows={5} value={formData.message} onChange={handleChange} placeholder="How can we help you?" className="block w-full px-4 py-3 rounded-lg text-gray-900" style={{ border: '1px solid #E5E7EB' }} />
                </div>
                <button type="submit" disabled={submitting} className="w-full py-3 px-6 rounded-lg text-white font-semibold transition-opacity" style={{ backgroundColor: submitting ? '#9CA3AF' : '#1A3A6B', cursor: submitting ? 'not-allowed' : 'pointer' }}>
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F2937' }}>Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: '#9CA3AF' }}>Email</h3>
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="text-base font-medium hover:underline" style={{ color: '#1A3A6B' }}>{SUPPORT_EMAIL}</a>
                  <p className="text-sm mt-1" style={{ color: '#6B7280' }}>Response within 1–2 business days</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: '#9CA3AF' }}>Mailing Address</h3>
                  <p style={{ color: '#6B7280' }}>{LEGAL_NAME}<br />{ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}</p>
                  {/* TODO: support phone */}
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: '#9CA3AF' }}>SMS Support</h3>
                  <p className="text-sm" style={{ color: '#6B7280' }}>
                    Webxact Alerts: Message frequency varies. Message and data rates may apply. Reply <strong>STOP</strong> to opt out, <strong>START</strong> to resubscribe, <strong>HELP</strong> for help. Consent is not a condition of purchase. See our{' '}
                    <a href="/sms-terms" className="font-medium hover:underline" style={{ color: '#1A3A6B' }}>SMS Terms</a> and{' '}
                    <a href="/privacy" className="font-medium hover:underline" style={{ color: '#1A3A6B' }}>Privacy Policy</a>.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F2937' }}>FAQ</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold mb-1" style={{ color: '#1F2937' }}>How do I opt out of SMS?</h3>
                  <p className="text-sm" style={{ color: '#6B7280' }}>Reply <strong>STOP</strong> to any message. You will receive one confirmation message and no further texts.</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1" style={{ color: '#1F2937' }}>Will my info be shared?</h3>
                  <p className="text-sm" style={{ color: '#6B7280' }}>{SMS_NO_SHARING_CLAUSE.split('.')[0]}. See our <a href="/privacy" className="font-medium hover:underline" style={{ color: '#1A3A6B' }}>Privacy Policy</a> and <a href="/sms-terms" className="font-medium hover:underline" style={{ color: '#1A3A6B' }}>SMS Terms</a>.</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1" style={{ color: '#1F2937' }}>Will Webxact ever text me a link or ask for personal information?</h3>
                  <p className="text-sm" style={{ color: '#6B7280' }}>{SMS_SECURITY_NOTE}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
