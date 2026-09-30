import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Gallery } from "@/components/Gallery";
import { Section, CtaBand } from "@/components/Blocks";
import { events, images } from "@/data/site";

export const Route = createFileRoute("/moments")({
  head: () => ({
    meta: [
      { title: "Moments & Gallery — Samraj Pre School" },
      { name: "description", content: "Photos of celebrations, activities and everyday fun at Samraj Pre School." },
      { property: "og:title", content: "Moments & Gallery — Samraj Pre School" },
      { property: "og:description", content: "Celebrations, festivals and happy days at school." },
    ],
  }),
  component: Moments,
});

function Moments() {
  return (
    <>
      <PageHero
        eyebrow="Moments"
        titleTop="Little moments,"
        titleAccent="big memories"
        text="Festivals, annual day, sports, field trips and the everyday joys of learning together."
        media={<img src={images.celebration} alt="Annual day performance" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lift" />}
      />
      <Section>
        <SectionHeading eyebrow="Gallery" title="Take a look inside" accent="inside" />
        <div className="mt-8"><Gallery /></div>
      </Section>
      <Section className="bg-gradient-warm">
        <SectionHeading eyebrow="Events" title="Celebrations through the year" accent="the year" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <div key={e.title} className="surface-card overflow-hidden">
              <img src={e.image} alt={e.title} loading="lazy" className="aspect-video w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg">{e.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
