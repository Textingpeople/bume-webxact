import Link from 'next/link';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Globe, CreditCard, Building2, Users, Bell, FileCheck, MessageSquare } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { DISCLAIMER } from './lib/content';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-24 lg:py-32" style={{ background: 'linear-gradient(135deg, #101F3D 0%, #19345F 60%, #1e3d6e 100%)' }}>
        {/* Concentric protection rings */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] rounded-full border opacity-10" style={{ borderColor: '#93C5FD' }} />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[480px] h-[480px] rounded-full border opacity-8" style={{ borderColor: '#3B82F6' }} />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[360px] h-[360px] rounded-full border opacity-6" style={{ borderColor: '#93C5FD' }} />
          {/* Subtle network dots */}
          <div className="absolute top-20 left-20 w-2 h-2 rounded-full opacity-20" style={{ backgroundColor: '#93C5FD' }} />
          <div className="absolute top-40 left-40 w-1 h-1 rounded-full opacity-15" style={{ backgroundColor: '#3B82F6' }} />
          <div className="absolute bottom-20 left-32 w-2 h-2 rounded-full opacity-20" style={{ backgroundColor: '#93C5FD' }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8" style={{ backgroundColor: 'rgba(59,130,246,0.2)', color: '#93C5FD', fontFamily: 'Inter, sans-serif' }}>
                <Shield className="w-4 h-4" />
                Employee Identity Monitoring Benefit
              </div>

              <h1 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)', lineHeight: 1.05, marginBottom: '1.5rem' }}>
                <span style={{ color: '#FFFFFF', display: 'block' }}>Identity monitoring</span>
                <span style={{ color: '#93C5FD', display: 'block' }}>for every employee.</span>
              </h1>

              <p style={{ fontSize: '1.1rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', maxWidth: '520px' }}>
                Webxact is automated identity monitoring and alert software offered as an employee benefit. Employees activate their account with an Employee ID from HR, and Webxact monitors for their information and sends alerts when activity is detected.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/talk-to-sales"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#3B82F6', fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}>
                  Book a Demo
                </Link>
                <Link href="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-opacity hover:opacity-90"
                  style={{ border: '2px solid rgba(147,197,253,0.5)', color: '#93C5FD', fontFamily: 'Inter, sans-serif', fontSize: '1rem', backgroundColor: 'transparent' }}>
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right: Shield visualization */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 flex items-center justify-center">
                {/* Outer rings */}
                <div className="absolute inset-0 rounded-full border-2 opacity-15" style={{ borderColor: '#93C5FD' }} />
                <div className="absolute inset-8 rounded-full border opacity-12" style={{ borderColor: '#3B82F6' }} />
                <div className="absolute inset-16 rounded-full border opacity-10" style={{ borderColor: '#93C5FD' }} />
                {/* Center shield */}
                <div className="relative w-40 h-40 rounded-3xl flex items-center justify-center shadow-2xl" style={{ background: 'linear-gradient(135deg, #19345F, #101F3D)', border: '1px solid rgba(147,197,253,0.3)' }}>
                  <Shield className="w-20 h-20" style={{ color: '#93C5FD' }} />
                </div>
                {/* Floating icons */}
                <div className="absolute top-8 right-8 w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(59,130,246,0.3)', border: '1px solid rgba(147,197,253,0.3)' }}>
                  <Eye className="w-5 h-5" style={{ color: '#93C5FD' }} />
                </div>
                <div className="absolute bottom-8 left-8 w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(59,130,246,0.3)', border: '1px solid rgba(147,197,253,0.3)' }}>
                  <Bell className="w-5 h-5" style={{ color: '#93C5FD' }} />
                </div>
                <div className="absolute top-8 left-12 w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(59,130,246,0.3)', border: '1px solid rgba(147,197,253,0.3)' }}>
                  <Lock className="w-5 h-5" style={{ color: '#93C5FD' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AT A GLANCE ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#3B82F6', fontFamily: 'Inter, sans-serif' }}>At a Glance</p>
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#101F3D', marginBottom: '1rem' }}>
              Automated identity monitoring, offered as an employee benefit.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: Shield, title: 'What it is', desc: 'Identity monitoring and alert software employers offer their teams.' },
              { icon: Users, title: 'How it works', desc: "Activate with your Employee ID. Webxact monitors for your information and alerts you if it's found." },
              { icon: MessageSquare, title: 'Text alerts', desc: 'Optional, automated alerts only — never marketing or links.' },
            ].map((card) => (
              <div key={card.title} className="p-6 rounded-2xl border" style={{ borderColor: '#E2E8F0', backgroundColor: '#EFF6FF' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#FFFFFF' }}>
                  <card.icon className="w-6 h-6" style={{ color: '#3B82F6', strokeWidth: 1.75 }} />
                </div>
                <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#101F3D', marginBottom: '0.5rem' }}>{card.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6 }}>{card.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs mb-6" style={{ color: '#94A3B8', maxWidth: '640px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
            {DISCLAIMER}
          </p>
          <div className="flex justify-center gap-6 text-sm font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
            <Link href="/about" style={{ color: '#3B82F6' }}>About Webxact →</Link>
            <Link href="/sms" style={{ color: '#3B82F6' }}>SMS Program →</Link>
          </div>
        </div>
      </section>

      {/* ── WHY IDENTITY MONITORING MATTERS ── */}
      <section className="py-20" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#101F3D', marginBottom: '1rem' }}>
              Why identity monitoring matters
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
              Personal information can appear in data breaches at any time. Monitoring helps employees find out quickly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: 'Personal information exposure', desc: 'Employee data can appear in data breaches and on the dark web.' },
              { icon: CreditCard, title: 'Credit monitoring', desc: 'Alerts when changes are detected in your credit file.' },
              { icon: AlertTriangle, title: 'Recovery complexity', desc: 'Resolving identity theft can take time and effort.' },
              { icon: Users, title: 'Employee peace of mind', desc: 'Automated monitoring helps employees stay informed about their personal information.' },
            ].map((card) => (
              <div key={card.title} className="p-6 rounded-2xl bg-white border" style={{ borderColor: '#E2E8F0' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#EFF6FF' }}>
                  <card.icon className="w-6 h-6" style={{ color: '#3B82F6', strokeWidth: 1.75 }} />
                </div>
                <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#101F3D', marginBottom: '0.5rem' }}>{card.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROTECTION FEATURES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#101F3D', marginBottom: '1rem' }}>
              What every employee gets
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
              Identity monitoring and alerts for every enrolled employee.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: 'Identity monitoring', desc: 'Ongoing automated monitoring of personal information for data breaches and dark web exposure.' },
              { icon: Bell, title: 'Breach alerts', desc: 'Employees are alerted when their information is found in a monitored data breach.' },
              { icon: FileCheck, title: 'Recovery guidance and support', desc: 'Step-by-step guidance and support resources to help employees respond if their identity is misused.' },
              { icon: Shield, title: 'Support', desc: 'Reach our support team at support@webxact.com.' },
              { icon: Lock, title: 'Credit monitoring', desc: 'Alerts when changes are detected in your credit file.' },
              { icon: Eye, title: 'Ongoing automated scanning', desc: 'Scanning for employee personal information on the dark web.' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border hover:shadow-md transition-shadow" style={{ borderColor: '#E2E8F0' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#EFF6FF' }}>
                  <item.icon className="w-6 h-6" style={{ color: '#3B82F6', strokeWidth: 1.75 }} />
                </div>
                <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#101F3D', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WEBXACT WORKS ── */}
      <section className="py-20" style={{ backgroundColor: '#EFF6FF' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#101F3D', marginBottom: '1rem' }}>
              How Webxact works
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
              Simple for employers to introduce. Easy for employees to access.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-px" style={{ backgroundColor: '#3B82F6', opacity: 0.3 }} />
            {[
              { num: '01', icon: Building2, title: 'Employers introduce the benefit', desc: 'Add Webxact to your employee benefits package. Our team handles setup — no IT required.' },
              { num: '02', icon: Users, title: 'Employees enroll or activate', desc: 'Employees receive their unique Employee ID and activate their protection in minutes.' },
              { num: '03', icon: Shield, title: 'Access protection services', desc: 'Employees access the included identity protection services and monitoring features.' },
            ].map((step) => (
              <div key={step.num} className="text-center p-8 rounded-2xl bg-white border" style={{ borderColor: '#E2E8F0' }}>
                <div className="text-5xl font-extrabold mb-4" style={{ color: '#DBEAFE', fontFamily: 'Manrope, sans-serif' }}>{step.num}</div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#EFF6FF' }}>
                  <step.icon className="w-6 h-6" style={{ color: '#3B82F6', strokeWidth: 1.75 }} />
                </div>
                <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#101F3D', marginBottom: '0.75rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS FOR EMPLOYERS ── */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #101F3D, #19345F)' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: 'white', marginBottom: '1.25rem' }}>
                Built for employers who care about their people.
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '2rem' }}>
                Webxact is a voluntary employee benefit that helps organizations offer automated identity monitoring as part of their benefits package.
              </p>
              <Link href="/talk-to-sales"
                className="inline-block px-7 py-3.5 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#3B82F6', fontFamily: 'Inter, sans-serif' }}>
                Book a Demo
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Automated monitoring', desc: 'Identity monitoring runs automatically once an employee activates their account.' },
                { title: 'Automated alerts', desc: 'Employees are alerted automatically when activity is detected.' },
                { title: 'Recovery guidance', desc: 'Step-by-step guidance and support resources if an employee needs help.' },
                { title: 'Simple employee activation', desc: 'Employees self-activate using their unique Employee ID.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-5 rounded-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(147,197,253,0.1)' }}>
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#3B82F6' }} />
                  <div>
                    <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: 'white', marginBottom: '0.25rem' }}>{item.title}</p>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24" style={{ backgroundColor: '#3B82F6' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: 'white', marginBottom: '1.25rem' }}>
            Offer identity monitoring to your team.
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Explore automated identity monitoring for your organization.
          </p>
          <Link href="/talk-to-sales"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#101F3D', color: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}>
            Book a Demo
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
