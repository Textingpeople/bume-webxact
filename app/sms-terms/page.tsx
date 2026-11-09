import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  LEGAL_NAME, SUPPORT_EMAIL, ADDRESS_LINE_1, ADDRESS_LINE_2,
  SMS_PROGRAM_NAME, SMS_MESSAGE_TYPES, SMS_NOT_INCLUDED, SMS_SECURITY_NOTE,
  SMS_NO_SHARING_CLAUSE, SMS_SAMPLES,
} from '../lib/content';

export const metadata = {
  title: 'SMS Terms — Webxact',
  description: 'SMS Terms for the Webxact Alerts program.',
};

export default function SmsTermsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />
      <section className="py-12" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#1F2937' }}>SMS Terms</h1>
          <p className="text-lg" style={{ color: '#6B7280' }}>Last Updated: November 9, 2026</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>1. Program Description</h2>
          <p className="mb-4" style={{ color: '#6B7280' }}>
            {LEGAL_NAME} (&quot;Webxact&quot;) offers the {SMS_PROGRAM_NAME} program: automated, system-triggered text alerts for employees of enrolled employers who opt in. Message types include:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#6B7280' }}>
            {SMS_MESSAGE_TYPES.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="mb-4" style={{ color: '#6B7280' }}><strong>Not included:</strong> {SMS_NOT_INCLUDED}</p>
          <p className="mb-6" style={{ color: '#6B7280' }}>{SMS_SECURITY_NOTE}</p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>2. How to Opt In</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Check the optional, unchecked SMS box during account activation at webxact.com/signup and provide your mobile number. Opting in is not required to use Webxact. Consent is not a condition of purchase.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>3. Sample Messages</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#6B7280' }}>
            {SMS_SAMPLES.map((sample) => <li key={sample}>{sample}</li>)}
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>4. Message Frequency &amp; Rates</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Message frequency varies based on account activity and monitoring results. Message and data rates may apply.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>5. How to Opt Out</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Reply STOP (or STOPALL, UNSUBSCRIBE, CANCEL, END, QUIT) to any message. You will receive one confirmation message and no further texts. Reply START to resubscribe.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>6. Help</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Reply HELP to any message or email <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: '#1A3A6B' }}>{SUPPORT_EMAIL}</a>.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>7. Carrier Liability</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Carriers are not liable for delayed or undelivered messages.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>8. Privacy</h2>
          <p className="mb-4" style={{ color: '#6B7280' }}>{SMS_NO_SHARING_CLAUSE}</p>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            See our <Link href="/privacy" style={{ color: '#1A3A6B' }}>Privacy Policy</Link>.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>9. Changes</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            We may update these SMS Terms; updates will be posted on this page.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>10. Contact</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            {LEGAL_NAME}<br />
            {ADDRESS_LINE_1}, {ADDRESS_LINE_2}<br />
            Email: <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: '#1A3A6B' }}>{SUPPORT_EMAIL}</a>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
