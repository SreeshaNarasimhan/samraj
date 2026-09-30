import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section, CtaBand } from "@/components/Blocks";
import { programs, images } from "@/data/site";
import { toneSurface, type Tone } from "@/lib/tones";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Play Group to UKG | Samraj Pre School" },
      { name: "description", content: "Play Group, Nursery, LKG and UKG programs for children aged 2–6 at Samraj Pre School, Salem." },
      { property: "og:title", content: "Programs — Samraj Pre School" },
      { property: "og:description", content: "Age-appropriate programs from Play Group to UKG." },
    ],
  }),
  component: Programs,
});

function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        titleTop="The right start"
        titleAccent="for every age"
        text="Four carefully designed stages that grow with your child, from first steps into school to confident school-readiness."
        media={<img src={images.classroomPlay} alt="Children playing in class" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lift" />}
      />
      <Section>
        <div className="grid gap-8">
          {programs.map((p, i) => (
            <Reveal key={p.slug}>
              <article className={`surface-card grid overflow-hidden md:grid-cols-2 ${i % 2 ? "md:[&>img]:order-2" : ""}`}>
                <img src={p.image} alt={p.name} loading="lazy" className="h-full min-h-64 w-full object-cover" />
                <div className="p-8">
                  <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${toneSurface[p.tone as Tone]}`}>{p.age}</span>
                  <h2 className="mt-4 text-3xl">{p.name}</h2>
                  <p className="mt-3 text-muted-foreground">{p.description}</p>
                  <ul className="mt-5 space-y-2">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 font-bold">
                        <Check className="h-5 w-5 text-mint" /> {h}
                      </li>
                    ))}
                  </ul>
                  <Link to="/admissions" className="btn-base btn-coral mt-6">
                    Enquire for {p.name} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
