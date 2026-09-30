import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Section, CtaBand, icons } from "@/components/Blocks";
import { developmentAreas, facilities, images } from "@/data/site";
import { toneSurface, toneAccent, type Tone } from "@/lib/tones";

export const Route = createFileRoute("/learning")({
  head: () => ({
    meta: [
      { title: "Learning & Facilities — Samraj Pre School" },
      { name: "description", content: "Holistic, play-based learning and child-friendly facilities at Samraj Pre School, Salem." },
      { property: "og:title", content: "Learning & Facilities — Samraj Pre School" },
      { property: "og:description", content: "How we help children grow in every way." },
    ],
  }),
  component: Learning,
});

function Learning() {
  return (
    <>
      <PageHero
        eyebrow="Learning"
        titleTop="Learning through"
        titleAccent="play & discovery"
        text="Our approach nurtures the whole child — mind, heart, body and imagination."
        media={<img src={images.artActivity} alt="Child painting" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lift" />}
      />
      <Section>
        <SectionHeading eyebrow="Holistic Growth" title="Six areas of development" accent="development" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {developmentAreas.map((d, i) => {
            const Icon = icons[d.icon]!;
            return (
              <Reveal key={d.title} delay={i * 60}>
                <div className={`flex items-center gap-4 rounded-3xl p-6 ${toneSurface[d.tone as Tone]}`}>
                  <Icon className={`h-9 w-9 ${toneAccent[d.tone as Tone]}`} />
                  <h3 className="text-lg">{d.title}</h3>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>
      <Section className="bg-secondary/50">
        <SectionHeading eyebrow="Facilities" title="Spaces made for children" accent="children" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => (
            <div key={f.title} className="surface-card overflow-hidden">
              <img src={f.image} alt={f.title} loading="lazy" className="aspect-video w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
