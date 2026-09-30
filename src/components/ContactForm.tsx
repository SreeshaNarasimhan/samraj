import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ageGroups } from "@/data/site";

type Fields = {
  name: string;
  phone: string;
  email: string;
  ageGroup: string;
  message: string;
};

const empty: Fields = { name: "", phone: "", email: "", ageGroup: "", message: "" };

function validate(v: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {};
  if (!v.name.trim()) e.name = "Please enter the parent's name.";
  if (!/^[0-9+\s-]{10,15}$/.test(v.phone.trim())) e.phone = "Enter a valid phone number.";
  if (!/^\S+@\S+\.\S+$/.test(v.email.trim())) e.email = "Enter a valid email address.";
  if (!v.ageGroup) e.ageGroup = "Please select your child's age group.";
  if (v.message.trim().length < 10) e.message = "Please tell us a little more (10+ characters).";
  return e;
}

const inputClass =
  "w-full rounded-2xl border border-border bg-card px-4 py-3 text-base text-navy placeholder:text-muted-foreground focus:border-coral focus:outline-none";

export function ContactForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  function set<K extends keyof Fields>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      // NOTE: no backend connected yet — the enquiry is captured in the UI only.
      setSent(true);
      setValues(empty);
    }
  }

  if (sent) {
    return (
      <div className="surface-card p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-mint" />
        <h3 className="mt-4 text-2xl">Thank you!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Your enquiry has been noted. Our admissions team will get in touch with you soon.
        </p>
        <button type="button" onClick={() => setSent(false)} className="btn-base btn-sun mt-6">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="surface-card space-y-4 p-6 sm:p-8">
      <Field id="name" label="Parent Name" error={errors.name}>
        <input
          id="name"
          className={inputClass}
          value={values.name}
          onChange={(e) => set("name", e.target.value)}
          placeholder="Your full name"
          autoComplete="name"
        />
      </Field>

      <Field id="phone" label="Phone Number" error={errors.phone}>
        <input
          id="phone"
          type="tel"
          inputMode="tel"
          className={inputClass}
          value={values.phone}
          onChange={(e) => set("phone", e.target.value)}
          placeholder="+91 00000 00000"
          autoComplete="tel"
        />
      </Field>

      <Field id="email" label="Email Address" error={errors.email}>
        <input
          id="email"
          type="email"
          inputMode="email"
          className={inputClass}
          value={values.email}
          onChange={(e) => set("email", e.target.value)}
          placeholder="you@example.com"
          autoComplete="email"
        />
      </Field>

      <Field id="ageGroup" label="Select Child's Age Group" error={errors.ageGroup}>
        <select
          id="ageGroup"
          className={inputClass}
          value={values.ageGroup}
          onChange={(e) => set("ageGroup", e.target.value)}
        >
          <option value="">Choose an age group</option>
          {ageGroups.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </Field>

      <Field id="message" label="Your Message" error={errors.message}>
        <textarea
          id="message"
          rows={4}
          className={inputClass}
          value={values.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="What would you like to know?"
        />
      </Field>

      <button type="submit" className="btn-base btn-coral w-full py-3.5">
        Send Message <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-bold text-navy">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-sm font-semibold text-coral">
          {error}
        </p>
      )}
    </div>
  );
}
