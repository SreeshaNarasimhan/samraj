import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Blocks";
import { school, mapsHref } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Visit — Samraj Pre School" },
      { name: "description", content: "Call, email or visit Samraj Pre School at Sri Balaji Nagar, Vandimedu, Jalakandapuram, Salem." },
      { property: "og:title", content: "Contact & Visit — Samraj Pre School" },
      { property: "og:description", content: "Book a campus visit or send us an enquiry." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        titleTop="We'd love to"
        titleAccent="meet you"
        text="Book a campus visit, ask about admissions, or just say hello."
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-5">
            <div className="surface-card p-6">
              <h3 className="flex items-center gap-2 text-xl"><Phone className="h-5 w-5 text-coral" /> Call Us</h3>
              <ul className="mt-3 space-y-2">
                {school.phones.map((p) => (
                  <li key={p.number}>
                    <span className="text-sm text-muted-foreground">{p.label}: </span>
                    <a href={`tel:${p.number.replace(/\s/g, "")}`} className="font-extrabold hover:text-coral">{p.number}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="surface-card p-6">
              <h3 className="flex items-center gap-2 text-xl"><Mail className="h-5 w-5 text-coral" /> Email</h3>
              <a href={`mailto:${school.email}`} className="mt-3 block font-extrabold hover:text-coral">{school.email}</a>
            </div>
            <div className="surface-card p-6">
              <h3 className="flex items-center gap-2 text-xl"><MapPin className="h-5 w-5 text-coral" /> Visit</h3>
              <address className="mt-3 not-italic">{school.address.map((a) => <div key={a}>{a}</div>)}</address>
              <a href={mapsHref} target="_blank" rel="noreferrer" className="btn-base btn-outline-coral mt-4">Get Directions</a>
            </div>
          </div>
          <ContactForm />
        </div>
        <iframe
          title="Samraj Pre School location"
          src={`https://www.google.com/maps?q=${encodeURIComponent(school.mapsQuery)}&output=embed`}
          loading="lazy"
          className="mt-10 h-80 w-full rounded-[2rem] border-0 shadow-soft"
        />
      </Section>
    </>
  );
}
