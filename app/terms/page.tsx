import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  LEGAL_NAME, SUPPORT_EMAIL, ADDRESS_LINE_1, ADDRESS_LINE_2,
  SMS_PROGRAM_NAME, SMS_MESSAGE_TYPES, SMS_NOT_INCLUDED, SMS_SECURITY_NOTE,
  SMS_NO_SHARING_CLAUSE, SMS_SAMPLES,
} from '../lib/content';

export const metadata = {
  title: 'Terms of Service — Webxact',
  description: 'Terms of Service for Webxact LLC, automated identity monitoring and alert software.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />
      <section className="py-12" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#1F2937' }}>Terms of Service</h1>
          <p className="text-lg" style={{ color: '#6B7280' }}>Last Updated: November 9, 2026</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>1. Acceptance of Terms</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            By accessing or using the Webxact service (&quot;Service&quot;) offered by {LEGAL_NAME}, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, you may not access or use the Service.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>2. Description of Service</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Webxact is automated identity monitoring and alert software offered as an employee benefit. Employers offer Webxact to their employees, who activate it with an Employee ID from HR. Webxact automatically monitors for employees&apos; personal information in data breaches and on the dark web, offers credit monitoring, and sends automated alerts when activity is detected. When an alert happens, employees get step-by-step recovery guidance and support resources. Webxact is not a credit bureau, bank, insurance company, or law firm, and does not guarantee that identity theft will be prevented or detected. Only employees of enrolled employers can use Webxact; there is no public or consumer signup.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>3. Eligibility</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            You must be at least 18 years old, an employee of an employer enrolled in Webxact, and in possession of a valid Employee ID to use the Service.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>4. Monitoring Limitations</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Webxact LLC provides automated identity monitoring, alerts, and recovery guidance. Webxact is not a credit bureau, bank, insurance company, or law firm, and cannot guarantee that all identity theft or fraud will be detected or prevented. Monitoring depends on the information you provide and the sources we monitor, and alerts may be delayed or incomplete.
          </p>
          <h2 id="sms" className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>5. SMS Communications</h2>
          <p className="mb-4" style={{ color: '#6B7280' }}>
            {LEGAL_NAME} offers the {SMS_PROGRAM_NAME} program: automated, system-triggered text alerts for employees of enrolled employers who opt in. Message types include:
          </p>
          <ul className="list-disc pl-6 mb-4" style={{ color: '#6B7280' }}>
            {SMS_MESSAGE_TYPES.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="mb-4" style={{ color: '#6B7280' }}><strong>Not included:</strong> {SMS_NOT_INCLUDED}</p>
          <p className="mb-4" style={{ color: '#6B7280' }}>{SMS_SECURITY_NOTE}</p>
          <p className="mb-4" style={{ color: '#6B7280' }}>
            Message frequency varies based on account activity and monitoring results. Message and data rates may apply. Reply STOP to opt out, START to resubscribe, HELP for help. Opting in is optional and not required to use Webxact. Consent is not a condition of purchase. Carriers are not liable for delayed or undelivered messages.
          </p>
          <p className="mb-4" style={{ color: '#6B7280' }}>{SMS_NO_SHARING_CLAUSE}</p>
          <p className="mb-2" style={{ color: '#6B7280' }}><strong>Sample messages:</strong></p>
          <ul className="list-disc pl-6 mb-6" style={{ color: '#6B7280' }}>
            {SMS_SAMPLES.map((sample) => <li key={sample}>{sample}</li>)}
          </ul>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Full program terms: <Link href="/sms-terms" style={{ color: '#1A3A6B' }}>SMS Terms</Link>.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>6. Acceptable Use</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            You agree to use the Service only for its intended purpose and not to misuse, interfere with, or attempt unauthorized access to the Service.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>7. Termination</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            We may suspend or terminate your access to the Service if you violate these Terms or if your employer&apos;s enrollment in Webxact ends.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>8. Disclaimer of Warranties</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            The Service is provided &quot;as is&quot; without warranties of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>9. Limitation of Liability</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Webxact shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>10. Changes</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            We may update these Terms from time to time. Updates will be posted on this page with a revised &quot;Last Updated&quot; date.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>11. Governing Law</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            These Terms are governed by the laws of the State of Delaware, without regard to conflict of law principles.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>12. Contact</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            For questions about these Terms, contact {LEGAL_NAME} at{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: '#1A3A6B' }}>{SUPPORT_EMAIL}</a> or {ADDRESS_LINE_1}, {ADDRESS_LINE_2}.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}


