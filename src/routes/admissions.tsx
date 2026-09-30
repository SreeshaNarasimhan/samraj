import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, FileText } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Blocks";
import { admissionSteps, importantDates, requiredDocuments, images } from "@/data/site";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions Open — Samraj Pre School" },
      { name: "description", content: "Admission process, important dates and documents for Samraj Pre School, Salem. Ages 2–6." },
      { property: "og:title", content: "Admissions Open — Samraj Pre School" },
      { property: "og:description", content: "Enquire, visit, interact and confirm — join us this year." },
    ],
  }),
  component: Admissions,
});

function Admissions() {
  return (
    <>
      <PageHero
        eyebrow="Admissions Open"
        titleTop="Begin your child's"
        titleAccent="happy journey"
        text="Limited seats for Play Group, Nursery, LKG and UKG. Campus visits are open all days."
        media={<img src={images.playground} alt="Outdoor play area" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lift" />}
      />
      <Section>
        <SectionHeading eyebrow="How It Works" title="Four simple steps" accent="simple steps" />
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {admissionSteps.map((s, i) => (
            <li key={s.title} className="surface-card p-6">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-coral font-extrabold text-primary-foreground">{i + 1}</span>
              <h3 className="mt-4 text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section className="bg-secondary/50">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="surface-card p-7">
            <h3 className="flex items-center gap-2 text-2xl"><CalendarDays className="h-6 w-6 text-coral" /> Important Dates</h3>
            <dl className="mt-5 space-y-3">
              {importantDates.map((d) => (
                <div key={d.label} className="flex justify-between gap-4 border-b border-border pb-3">
                  <dt className="text-muted-foreground">{d.label}</dt>
                  <dd className="font-extrabold">{d.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="surface-card p-7">
            <h3 className="flex items-center gap-2 text-2xl"><FileText className="h-6 w-6 text-coral" /> Documents Required</h3>
            <ul className="mt-5 list-disc space-y-2 pl-5">
              {requiredDocuments.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </div>
        </div>
      </Section>
      <Section>
        <SectionHeading eyebrow="Enquire" title="Send an admission enquiry" accent="enquiry" align="center" />
        <div className="mx-auto mt-8 max-w-2xl"><ContactForm /></div>
      </Section>
    </>
  );
}
