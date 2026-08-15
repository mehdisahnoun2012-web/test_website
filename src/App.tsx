import { useState } from 'react';
import {
  Phone,
  Wrench,
  Droplets,
  Flame,
  ShieldCheck,
  BadgeCheck,
  Tag,
  Clock,
  CalendarCheck,
  ArrowRight,
  Star,
} from 'lucide-react';
import AppointmentModal from '@/components/AppointmentModal';

const PHONE_DISPLAY = '(555) 123-4567';
const PHONE_LINK = 'tel:+15551234567';

const SERVICES = [
  {
    icon: Wrench,
    title: 'Emergency Repairs',
    desc: 'Burst pipes, overflows, and no-water emergencies handled fast, day or night.',
  },
  {
    icon: Droplets,
    title: 'Drain Cleaning',
    desc: 'Clear stubborn clogs in sinks, showers, and main lines with pro-grade equipment.',
  },
  {
    icon: Flame,
    title: 'Water Heaters',
    desc: 'Repair, maintenance, and same-day installation for tank and tankless systems.',
  },
  {
    icon: Wrench,
    title: 'Pipe Leak Fixes',
    desc: 'Precise leak detection and lasting repairs that protect your home from damage.',
  },
];

const REASONS = [
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    desc: 'Fully certified, background-checked plumbers you can trust in your home or business.',
  },
  {
    icon: Tag,
    title: 'Upfront Pricing',
    desc: 'Clear, honest quotes before any work begins. No surprises, no hidden fees.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    desc: 'Real plumbers on call around the clock, every day of the year, including holidays.',
  },
];

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-navy-900">
      <header className="sticky top-0 z-40 border-b border-navy-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900">
              <Droplets className="h-5 w-5 text-orange-500" />
            </div>
            <span className="text-lg font-extrabold tracking-tight">Apex Plumbing</span>
          </div>
          <a
            href={PHONE_LINK}
            className="hidden items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-600 hover:shadow-orange-500/40 sm:flex"
          >
            <Phone className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950">
        <img
          src="https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-950/95 to-navy-900/80" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <div className="max-w-2xl animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-orange-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-400" />
              </span>
              Available Now — 24/7 Emergency Service
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Fast, Reliable Local Plumbers{' '}
              <span className="text-orange-500">Available 24/7</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100">
              Trusted residential and commercial plumbing done right the first time. From
              midnight emergencies to planned upgrades, our licensed team keeps your water
              flowing.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={PHONE_LINK}
                className="group flex items-center justify-center gap-2.5 rounded-xl bg-orange-500 px-7 py-4 text-lg font-bold text-white shadow-xl shadow-orange-500/30 transition-all hover:bg-orange-600 hover:shadow-orange-500/50"
              >
                <Phone className="h-5 w-5 transition-transform group-hover:rotate-12" />
                Call Now: {PHONE_DISPLAY}
              </a>
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10"
              >
                Schedule Online
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-navy-200">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <span className="font-medium">Rated 4.9/5 by 1,200+ local customers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
            What We Do
          </p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Our Plumbing Services</h2>
          <p className="mt-4 leading-relaxed text-navy-500">
            Whatever the issue, we bring the tools, parts, and expertise to fix it in one visit.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-navy-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-navy-900/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 p-3 transition-colors group-hover:bg-orange-500">
                <Icon className="h-6 w-6 text-orange-500 transition-colors group-hover:text-white" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-navy-950">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-400">
              Why Apex
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Why Homeowners Choose Us
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {REASONS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition-colors hover:bg-white/10"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15">
                  <Icon className="h-7 w-7 text-orange-400" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 leading-relaxed text-navy-200">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-navy-200">
            <span className="flex items-center gap-2 font-medium">
              <BadgeCheck className="h-5 w-5 text-orange-400" /> Same-day service
            </span>
            <span className="flex items-center gap-2 font-medium">
              <BadgeCheck className="h-5 w-5 text-orange-400" /> 1-year workmanship warranty
            </span>
            <span className="flex items-center gap-2 font-medium">
              <BadgeCheck className="h-5 w-5 text-orange-400" /> Locally owned & operated
            </span>
          </div>
        </div>
      </section>

      {/* Appointment */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 to-navy-800 px-6 py-14 shadow-2xl sm:px-14">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Ready to fix it? Book your appointment today.
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-navy-200">
                Pick a time that works for you and our team will confirm by phone. Prefer to
                talk now? We're just one call away, 24 hours a day.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => setModalOpen(true)}
                  className="group flex items-center justify-center gap-2.5 rounded-xl bg-orange-500 px-7 py-4 text-lg font-bold text-white shadow-xl shadow-orange-500/30 transition-all hover:bg-orange-600 hover:shadow-orange-500/50"
                >
                  <CalendarCheck className="h-5 w-5 transition-transform group-hover:scale-110" />
                  Schedule an Appointment
                </button>
                <a
                  href={PHONE_LINK}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/20 px-7 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Phone className="h-5 w-5" />
                  Call Us
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <p className="text-sm font-bold uppercase tracking-widest text-orange-400">
                Contact
              </p>
              <div className="mt-5 space-y-5 text-white">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-400" />
                  <div>
                    <p className="text-sm text-navy-200">Call or text 24/7</p>
                    <a href={PHONE_LINK} className="text-lg font-bold hover:text-orange-400">
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-400" />
                  <div>
                    <p className="text-sm text-navy-200">Hours</p>
                    <p className="font-semibold">Open 24 hours, 7 days a week</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-400" />
                  <div>
                    <p className="text-sm text-navy-200">Service area</p>
                    <p className="font-semibold">Greater Metro & surrounding suburbs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-navy-100 bg-navy-950">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500">
                <Droplets className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-extrabold text-white">Apex Plumbing Services</span>
            </div>
            <a
              href={PHONE_LINK}
              className="flex items-center gap-2 text-xl font-extrabold text-white hover:text-orange-400"
            >
              <Phone className="h-5 w-5 text-orange-400" />
              {PHONE_DISPLAY}
            </a>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-navy-300">
            <p>
              &copy; {new Date().getFullYear()} Apex Plumbing Services. Licensed &amp; Insured.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <AppointmentModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
