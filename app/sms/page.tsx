import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  DISCLAIMER, LEGAL_NAME, SUPPORT_EMAIL,
  SMS_PROGRAM_NAME, SMS_MESSAGE_TYPES, SMS_NOT_INCLUDED, SMS_SECURITY_NOTE,
  SMS_NO_SHARING_CLAUSE, SMS_SAMPLES,
} from '../lib/content';

export const metadata = {
  title: 'SMS Program — Webxact',
  description: 'The Webxact Alerts SMS program: automated, system-triggered account and security alerts.',
};

const atAGlance: [string, string][] = [
  ['Program name', SMS_PROGRAM_NAME],
  ['Sender', LEGAL_NAME],
  ['What it is', 'Automated, system-triggered account and security alerts.'],
  ['Message types', SMS_MESSAGE_TYPES.join('; ')],
  ['Not included', SMS_NOT_INCLUDED],
  ['Who receives', 'Employees of enrolled employers who opt in.'],
  ['How to opt in', 'One optional, unchecked checkbox on /signup step 3.'],
  ['Frequency', 'Varies based on account activity and monitoring results.'],
  ['Cost', 'Message and data rates may apply.'],
  ['Opt out', 'Reply STOP.'],
  ['Resubscribe', 'Reply START.'],
  ['Help', `Reply HELP or email ${SUPPORT_EMAIL}.`],
  ['Consent', 'Not a condition of purchase.'],
  ['Security', SMS_SECURITY_NOTE],
  ['Data sharing', SMS_NO_SHARING_CLAUSE],
];

const triggers: [string, string][] = [
  ['Account activated', 'Enrollment and account confirmation'],
  ['Verification requested', 'Verification code'],
  ['Information found in monitored breach', 'Identity monitoring alert'],
  ['New sign-in', 'Account security alert'],
  ['Account or service change', 'Service and account update'],
];

export default function SmsProgramPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />
      <section className="py-12" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#1F2937' }}>SMS Program</h1>
          <p className="text-lg" style={{ color: '#6B7280' }}>{SMS_PROGRAM_NAME} — program summary for carrier review.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F2937' }}>At a Glance</h2>
        <div className="overflow-x-auto mb-12 rounded-xl border" style={{ borderColor: '#E2E8F0' }}>
          <table className="w-full text-sm">
            <tbody>
              {atAGlance.map(([label, value]) => (
                <tr key={label} className="border-b last:border-0" style={{ borderColor: '#E2E8F0' }}>
                  <td className="px-4 py-3 font-semibold align-top w-48" style={{ color: '#1F2937', backgroundColor: '#F8FAFC' }}>{label}</td>
                  <td className="px-4 py-3" style={{ color: '#6B7280' }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F2937' }}>Trigger Table</h2>
        <div className="overflow-x-auto mb-12 rounded-xl border" style={{ borderColor: '#E2E8F0' }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: '#F8FAFC' }}>
                <th className="px-4 py-3 text-left font-semibold" style={{ color: '#1F2937' }}>Event</th>
                <th className="px-4 py-3 text-left font-semibold" style={{ color: '#1F2937' }}>Message</th>
              </tr>
            </thead>
            <tbody>
              {triggers.map(([event, message]) => (
                <tr key={event} className="border-t" style={{ borderColor: '#E2E8F0' }}>
                  <td className="px-4 py-3" style={{ color: '#6B7280' }}>{event}</td>
                  <td className="px-4 py-3" style={{ color: '#6B7280' }}>{message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mb-4" style={{ color: '#1F2937' }}>Sample Messages</h2>
        <ul className="list-disc pl-6 mb-12 space-y-2 text-sm" style={{ color: '#6B7280' }}>
          {SMS_SAMPLES.map((sample) => <li key={sample}>{sample}</li>)}
        </ul>

        <div className="flex flex-wrap gap-6 text-sm font-semibold mb-10">
          <Link href="/sms-terms" style={{ color: '#1A3A6B' }}>SMS Terms →</Link>
          <Link href="/terms#sms" style={{ color: '#1A3A6B' }}>Terms of Service §5 →</Link>
          <Link href="/privacy" style={{ color: '#1A3A6B' }}>Privacy Policy →</Link>
          <Link href="/contact" style={{ color: '#1A3A6B' }}>Contact →</Link>
        </div>

        <p className="text-xs" style={{ color: '#94A3B8', lineHeight: 1.6 }}>{DISCLAIMER}</p>
      </section>

      <Footer />
    </div>
  );
}
