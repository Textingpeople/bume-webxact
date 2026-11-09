import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  LEGAL_NAME, SUPPORT_EMAIL, ADDRESS_LINE_1, ADDRESS_LINE_2,
  SMS_PROGRAM_NAME, SMS_MESSAGE_TYPES, SMS_NOT_INCLUDED, SMS_SECURITY_NOTE,
  SMS_NO_SHARING_CLAUSE,
} from '../lib/content';

export const metadata = {
  title: 'Privacy Policy — Webxact',
  description: 'Privacy Policy for Webxact LLC, automated identity monitoring and alert software.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />
      <section className="py-12" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#1F2937' }}>Privacy Policy</h1>
          <p className="text-lg" style={{ color: '#6B7280' }}>Last Updated: November 9, 2026</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>1. Introduction</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            {LEGAL_NAME} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the Webxact service. By using the Service, you agree to the collection and use of information in accordance with this policy.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>2. Information We Collect</h2>
          <p className="mb-4" style={{ color: '#6B7280' }}>When you activate or use Webxact, we may collect:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#6B7280' }}>
            <li>Name, work email, and company</li>
            <li>Employee ID</li>
            <li>Mobile number, if provided</li>
            <li>Personal identifiers you choose to add for monitoring (for example, email addresses, phone numbers, and other identifiers)</li>
            <li>SMS consent preferences</li>
            <li>Usage and device data</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>3. How We Use Information</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#6B7280' }}>
            <li>To run automated identity monitoring</li>
            <li>To send alerts when activity is detected</li>
            <li>For account and security purposes</li>
            <li>To improve the Service</li>
            <li>To comply with legal obligations</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>4. Sensitive Information</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Identifiers you add for monitoring are used only for monitoring purposes. This information is encrypted in transit and at rest, and is never sold.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>5. What Your Employer Can See</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Your employer can see your activation status only. Your employer never sees your monitored information or alerts.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>6. Sharing</h2>
          <p className="mb-4" style={{ color: '#6B7280' }}>
            We share information with service providers under confidentiality obligations, including monitoring and SMS providers, and as required by law.
          </p>
          <p className="mb-6" style={{ color: '#6B7280' }}>{SMS_NO_SHARING_CLAUSE}</p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>7. SMS Messaging</h2>
          <p className="mb-4" style={{ color: '#6B7280' }}>
            {LEGAL_NAME} offers the {SMS_PROGRAM_NAME} program: automated, system-triggered text alerts for employees of enrolled employers who opt in. Message types include:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#6B7280' }}>
            {SMS_MESSAGE_TYPES.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="mb-4" style={{ color: '#6B7280' }}><strong>Not included:</strong> {SMS_NOT_INCLUDED}</p>
          <p className="mb-4" style={{ color: '#6B7280' }}>{SMS_SECURITY_NOTE}</p>
          <p className="mb-6" style={{ color: '#6B7280' }}>{SMS_NO_SHARING_CLAUSE}</p>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            See our full <Link href="/sms-terms" style={{ color: '#1A3A6B' }}>SMS Terms</Link>.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>8. Data Security</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            We use administrative, technical, and physical safeguards designed to protect your information, including encryption in transit and at rest.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>9. Your Rights</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            You may request access to, correction of, or deletion of your information, and may opt out of SMS at any time by replying STOP, by contacting us at {SUPPORT_EMAIL}.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>10. Children&apos;s Privacy</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Webxact is intended for individuals 18 years of age and older. We do not knowingly collect information from children.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>11. Changes</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised &quot;Last Updated&quot; date.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>12. Contact</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            If you have questions about this Privacy Policy, please contact us at:<br />
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
