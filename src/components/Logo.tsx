import { Link } from "@tanstack/react-router";
import { school } from "@/data/site";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label={`${school.name} home`}>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sun-soft">
        <svg viewBox="0 0 32 32" aria-hidden className="h-6 w-6">
          <path d="M3 10h11v16H3z" className="fill-sky" />
          <path d="M18 10h11v16H18z" className="fill-coral" />
          <path d="M14 8h4v18h-4z" className="fill-navy" />
          <circle cx="16" cy="5" r="3" className="fill-sun" />
        </svg>
      </span>
      <span className="min-w-0 leading-none">
        <span className="block font-display text-lg font-bold tracking-tight text-navy sm:text-xl">
          SAMRAJ
        </span>
        <span className="block text-[0.62rem] font-bold uppercase tracking-[0.18em] text-coral">
          Pre School
        </span>
        {!compact && (
          <span className="mt-0.5 hidden text-[0.6rem] font-semibold tracking-wide text-muted-foreground lg:block">
            {school.tagline}
          </span>
        )}
      </span>
    </Link>
  );
}
