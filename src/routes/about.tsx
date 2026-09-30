import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Section, CtaBand } from "@/components/Blocks";
import { images, values, leadership, journey } from "@/data/site";
import { toneSurface, toneSolid, type Tone } from "@/lib/tones";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Samraj Pre School" },
      { name: "description", content: "Our story, values and leadership at Samraj Pre School, Jalakandapuram, Salem." },
      { property: "og:title", content: "About Us — Samraj Pre School" },
      { property: "og:description", content: "Meet the people and values behind Samraj Pre School." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        titleTop="Nurturing young minds"
        titleAccent="with love & care"
        text="Samraj Pre School was founded to give children in Jalakandapuram a joyful, safe and meaningful start to learning."
        media={<img src={images.campus} alt="Samraj Pre School campus" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lift" />}
      />

      <Section>
        <SectionHeading eyebrow="Our Values" title="What we stand for" accent="stand for" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 60}>
              <div className={`rounded-3xl p-6 ${toneSurface[v.tone as Tone]}`}>
                <span className={`block h-3 w-10 rounded-full ${toneSolid[v.tone as Tone]}`} />
                <h3 className="mt-4 text-xl">{v.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/50">
        <SectionHeading eyebrow="Leadership" title="Guided by experience" accent="experience" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {leadership.map((l) => (
            <div key={l.name} className="surface-card flex items-center gap-5 p-6">
              <div className={`grid h-20 w-20 shrink-0 place-items-center rounded-full font-display text-2xl font-bold ${toneSurface[l.tone as Tone]}`}>
                {l.initials}
              </div>
              <div>
                <h3 className="text-xl">{l.name}</h3>
                <p className="text-sm font-bold text-coral">{l.role}</p>
                <p className="text-sm text-muted-foreground">{l.qualification}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our Journey" title="Growing together" accent="together" />
        <ol className="mt-10 grid gap-6 md:grid-cols-4">
          {journey.map((j, i) => (
            <li key={j.title} className="surface-card p-6">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-coral font-extrabold text-primary-foreground">{i + 1}</span>
              <h3 className="mt-4 text-lg">{j.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{j.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBand />
    </>
  );
}
