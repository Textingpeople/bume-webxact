import Link from 'next/link';
import { Shield, Eye, CheckCircle, XCircle, Building2, Users, Bell, FileCheck, MessageSquare } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { DISCLAIMER, SUPPORT_EMAIL, ADDRESS_LINE_1, ADDRESS_LINE_2, LEGAL_NAME } from '../lib/content';

export const metadata = {
  title: 'About — Webxact',
  description: 'Webxact is automated identity monitoring and alert software employers offer their teams.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Dark Hero */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0F1F3D 0%, #1A3A6B 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: 'rgba(59,130,246,0.2)', color: '#93C5FD' }}>
            <Building2 className="w-4 h-4" />
            About Webxact
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-6">
            Identity monitoring, offered as an employee benefit.
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#CBD5E1' }}>
            Webxact helps employers offer automated identity monitoring and alerts to their teams.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#0F1F3D' }}>What we do</h2>
              <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
                Webxact is automated identity monitoring and alert software offered as an employee benefit. Employers offer Webxact to their employees, who activate it with an Employee ID from HR.
              </p>
              <p className="text-lg" style={{ color: '#6B7280' }}>
                Webxact automatically monitors for employees&apos; personal information in data breaches and on the dark web, offers credit monitoring, and sends automated alerts when activity is detected. When an alert happens, employees get step-by-step recovery guidance and support resources.
              </p>
            </div>
            <div className="rounded-2xl p-10" style={{ background: 'linear-gradient(135deg, #0F1F3D, #1A3A6B)' }}>
              <h3 className="text-2xl font-bold text-white mb-8">What Webxact is — and isn&apos;t</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#93C5FD' }}>Webxact is</p>
                  <ul className="space-y-2">
                    {[
                      'Automated identity monitoring software',
                      'An employee benefit offered through employers',
                      'Automated alerts',
                      'Recovery guidance and support resources',
                      'Optional text alerts',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#3B82F6' }} />
                        <span className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#93C5FD' }}>Webxact is not</p>
                  <ul className="space-y-2">
                    {[
                      'A credit bureau',
                      'A bank',
                      'An insurance company',
                      'A law firm',
                      'A guarantee against identity theft',
                      'A public or consumer signup service',
                      'A sender of marketing texts',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }} />
                        <span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-14" style={{ color: '#0F1F3D' }}>How it works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', icon: Building2, title: 'Employer offers Webxact', desc: 'The employer adds Webxact to its employee benefits.' },
              { step: '02', icon: Users, title: 'Employee activates with Employee ID', desc: 'Employees activate their account using the Employee ID provided by HR.' },
              { step: '03', icon: Bell, title: 'Webxact monitors and sends alerts', desc: 'Webxact monitors for the employee&apos;s information and sends automated alerts when activity is detected.' },
            ].map((item) => (
              <div key={item.step} className="text-center p-8 bg-white rounded-2xl border" style={{ borderColor: '#E2E8F0' }}>
                <div className="text-5xl font-extrabold mb-4" style={{ color: '#DBEAFE' }}>{item.step}</div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#EEF2FF' }}>
                  <item.icon className="w-6 h-6" style={{ color: '#1A3A6B' }} />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#0F1F3D' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#6B7280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#0F1F3D' }}>Identity monitoring and alerts for every enrolled employee.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Eye, title: 'Automated monitoring', desc: 'Identity monitoring runs automatically once an employee activates their account.' },
              { icon: Bell, title: 'Automated alerts', desc: 'Employees are alerted automatically when activity is detected.' },
              { icon: FileCheck, title: 'Recovery guidance', desc: 'Step-by-step guidance and support resources if an employee needs help.' },
              { icon: Users, title: 'Simple employee activation', desc: 'Employees self-activate using their unique Employee ID.' },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-white rounded-xl border hover:shadow-md transition-shadow" style={{ borderColor: '#E2E8F0' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#EEF2FF' }}>
                  <item.icon className="w-6 h-6" style={{ color: '#1A3A6B' }} />
                </div>
                <h3 className="font-bold mb-2" style={{ color: '#0F1F3D' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#6B7280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Text alerts */}
      <section className="py-20" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#EEF2FF' }}>
            <MessageSquare className="w-7 h-7" style={{ color: '#1A3A6B' }} />
          </div>
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#0F1F3D' }}>Text alerts</h2>
          <p className="text-lg mb-6" style={{ color: '#6B7280' }}>
            Employees can optionally opt in to receive automated text alerts, including enrollment confirmations, verification codes, identity monitoring alerts, and account security alerts. Webxact does not send marketing texts.
          </p>
          <div className="flex justify-center gap-6 text-sm font-semibold">
            <Link href="/sms" style={{ color: '#1A3A6B' }}>SMS Program →</Link>
            <Link href="/sms-terms" style={{ color: '#1A3A6B' }}>SMS Terms →</Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-14 h-14 mx-auto mb-6" style={{ color: '#1A3A6B' }} />
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#0F1F3D' }}>Contact</h2>
          <p className="text-lg" style={{ color: '#6B7280' }}>
            {LEGAL_NAME}<br />
            {ADDRESS_LINE_1}, {ADDRESS_LINE_2}<br />
            <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: '#1A3A6B' }}>{SUPPORT_EMAIL}</a>
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs" style={{ color: '#94A3B8', lineHeight: 1.6 }}>{DISCLAIMER}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
