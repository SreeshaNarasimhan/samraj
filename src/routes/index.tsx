import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Section, CtaBand, icons } from "@/components/Blocks";
import { highlights, programs, images, events, admissionHighlights, telHref, school } from "@/data/site";
import { toneSurface, toneAccent, type Tone } from "@/lib/tones";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Samraj Pre School — Play, Learn, Grow in Salem" },
      { name: "description", content: "Play-based preschool in Jalakandapuram, Salem. Play Group, Nursery, LKG & UKG for ages 2–6. Admissions open." },
      { property: "og:title", content: "Samraj Pre School — Play, Learn, Grow in Salem" },
      { property: "og:description", content: "Play Group to UKG in a safe, caring campus. Admissions open." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <PageHero
        eyebrow={school.tagline}
        titleTop="Where little minds"
        titleAccent="bloom with joy"
        text="A safe, colourful and caring preschool in Jalakandapuram where children aged 2–6 learn through play, stories and discovery."
        actions={
          <>
            <Link to="/admissions" className="btn-base btn-coral">
              Admissions Open <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={telHref} className="btn-base btn-outline-coral">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </>
        }
        media={
          <img
            src={images.heroChild}
            alt="Smiling Samraj Pre School student"
            className="aspect-[4/5] w-full rounded-[2.5rem] object-cover shadow-lift"
          />
        }
      />

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => {
            const Icon = icons[h.icon]!;
            return (
              <Reveal key={h.title} delay={i * 80}>
                <div className={`rounded-3xl p-6 ${toneSurface[h.tone as Tone]}`}>
                  <Icon className={`h-8 w-8 ${toneAccent[h.tone as Tone]}`} />
                  <h3 className="mt-4 text-lg">{h.title}</h3>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="bg-secondary/50">
        <SectionHeading eyebrow="Our Programs" title="Learning for every little age" accent="every little age" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <div className="surface-card h-full overflow-hidden">
                <img src={p.image} alt={p.name} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                <div className="p-5">
                  <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${toneSurface[p.tone as Tone]}`}>{p.age}</span>
                  <h3 className="mt-3 text-xl">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Link to="/programs" className="btn-base btn-outline-coral mt-8">
          Explore Programs <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img src={images.campus} alt="Samraj Pre School campus" loading="lazy" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft" />
          <div>
            <SectionHeading eyebrow="Why Samraj" title="A second home for your child" accent="second home" text="Our new campus at Sri Balaji Nagar offers bright classrooms, outdoor play, a reading library and supervised transport." />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {admissionHighlights.map((a) => (
                <li key={a} className="flex items-center gap-2 font-bold">
                  <Check className="h-5 w-5 text-mint" /> {a}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-base btn-coral mt-7">About Us <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-warm">
        <SectionHeading eyebrow="Moments" title="Every day is a celebration" accent="celebration" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {events.slice(0, 3).map((e) => (
            <div key={e.title} className="surface-card overflow-hidden">
              <img src={e.image} alt={e.title} loading="lazy" className="aspect-video w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg">{e.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.text}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/moments" className="btn-base btn-outline-coral mt-8">See Gallery <ArrowRight className="h-4 w-4" /></Link>
      </Section>

      <CtaBand />
    </>
  );
}
