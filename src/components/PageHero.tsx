import type { ReactNode } from "react";
import { BlobField } from "@/components/Decor";

export function PageHero({
  eyebrow,
  titleTop,
  titleAccent,
  titleBottom,
  text,
  actions,
  media,
}: {
  eyebrow: string;
  titleTop: string;
  titleAccent?: string;
  titleBottom?: string;
  text?: string;
  actions?: ReactNode;
  media?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-sky">
      <BlobField />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div className="reveal">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-coral">
            {eyebrow}
          </p>
          <h1 className="text-4xl leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
            {titleTop}
            {titleAccent && (
              <>
                <br />
                <span className="text-coral">{titleAccent}</span>
              </>
            )}
            {titleBottom && (
              <>
                {" "}
                <span>{titleBottom}</span>
              </>
            )}
          </h1>
          {text && (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {text}
            </p>
          )}
          {actions && <div className="mt-7 flex flex-wrap gap-3">{actions}</div>}
        </div>
        {media && <div className="reveal relative">{media}</div>}
      </div>
    </section>
  );
}
