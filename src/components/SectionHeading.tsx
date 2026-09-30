import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  accent,
  text,
  align = "left",
  children,
}: {
  eyebrow?: string;
  title: string;
  /** Word(s) rendered in coral inside the title. */
  accent?: string;
  text?: string;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  const parts = accent ? title.split(accent) : [title];
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-coral">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
        {parts[0]}
        {accent && <span className="text-coral">{accent}</span>}
        {parts[1]}
      </h2>
      {text && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{text}</p>}
      {children}
    </div>
  );
}
