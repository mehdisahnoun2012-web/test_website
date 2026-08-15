import { useEffect, useState } from 'react';
import { X, CalendarCheck, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const SERVICES = [
  'Emergency Repairs',
  'Drain Cleaning',
  'Water Heaters',
  'Pipe Leak Fixes',
  'Other',
];

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function AppointmentModal({ open, onClose }: Props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(SERVICES[0]);
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'saving' | 'done'>('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const resetAndClose = () => {
    setName('');
    setPhone('');
    setEmail('');
    setService(SERVICES[0]);
    setPreferredDate('');
    setMessage('');
    setStatus('idle');
    setError('');
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError('Please enter your name and phone number.');
      return;
    }
    setError('');
    setStatus('saving');
    const { error: insertError } = await supabase.from('appointments').insert({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim() || null,
      service,
      preferred_date: preferredDate || null,
      message: message.trim() || null,
    });
    if (insertError) {
      setStatus('idle');
      setError('Something went wrong. Please call us at (555) 123-4567.');
      return;
    }
    setStatus('done');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm"
      onClick={resetAndClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={resetAndClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-navy-500 transition-colors hover:bg-navy-50 hover:text-navy-800"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {status === 'done' ? (
          <div className="flex flex-col items-center px-6 py-14 text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-9 w-9 text-green-600" />
            </div>
            <h3 className="text-2xl font-extrabold text-navy-900">Request received!</h3>
            <p className="mt-2 max-w-sm leading-relaxed text-navy-600">
              Thanks, {name.split(' ')[0]}. Our team will call you shortly to confirm your
              appointment. For urgent issues, call us anytime at{' '}
              <span className="font-semibold text-navy-900">(555) 123-4567</span>.
            </p>
            <button
              onClick={resetAndClose}
              className="mt-7 rounded-xl bg-navy-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-navy-800"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="px-6 py-8 sm:px-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10">
                <CalendarCheck className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-navy-900">Schedule an Appointment</h3>
                <p className="text-sm text-navy-500">We'll call to confirm your time.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" required>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                    placeholder="Jane Smith"
                  />
                </Field>
                <Field label="Phone" required>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={inputClass}
                    placeholder="(555) 000-0000"
                  />
                </Field>
              </div>

              <Field label="Email">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                  placeholder="jane@example.com"
                />
              </Field>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Service needed">
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className={inputClass}
                  >
                    {SERVICES.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Preferred date">
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className={inputClass}
                  />
                </Field>
              </div>

              <Field label="Details">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell us briefly what's going on..."
                />
              </Field>

              {error && (
                <p className="rounded-lg bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'saving'}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-600 hover:shadow-orange-500/40 disabled:opacity-70"
              >
                {status === 'saving' ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" /> Sending...
                  </>
                ) : (
                  'Request Appointment'
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

const inputClass =
  'w-full rounded-xl border border-navy-200 bg-navy-50/40 px-4 py-2.5 text-navy-900 placeholder-navy-400 outline-none transition-colors focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/20';

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-navy-700">
        {label} {required && <span className="text-orange-500">*</span>}
      </span>
      {children}
    </label>
  );
}
