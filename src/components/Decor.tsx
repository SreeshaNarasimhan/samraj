/** Lightweight hand-drawn style decorations. Purely decorative. */

export function Cloud({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 60" aria-hidden className={className} fill="currentColor">
      <path d="M28 52c-11 0-20-8-20-18S17 16 28 16c3-9 12-15 22-15 12 0 22 8 24 19 10 1 18 9 18 19 0 7-6 13-14 13H28z" />
    </svg>
  );
}

export function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M12 1.5l2.6 6.4 6.9.5-5.3 4.4 1.7 6.7L12 15.9 6.1 19.5l1.7-6.7-5.3-4.4 6.9-.5z" />
    </svg>
  );
}

export function PaperPlane({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 48" aria-hidden className={className} fill="none">
      <path d="M2 24L60 4 42 44l-12-12-9 9v-12z" fill="currentColor" />
      <path
        d="M60 4L21 29"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function Leaf({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={className} fill="currentColor">
      <path d="M28 4C14 4 4 11 4 22c0 3 1 5 2 6C10 18 18 13 26 11c-6 4-13 9-17 19 2 1 4 1 6 1 12 0 17-11 13-27z" />
    </svg>
  );
}

export function Sun({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden className={className} fill="none" stroke="currentColor">
      <circle cx="24" cy="24" r="9" strokeWidth="3" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        return (
          <line
            key={i}
            x1={24 + Math.cos(a) * 14}
            y1={24 + Math.sin(a) * 14}
            x2={24 + Math.cos(a) * 20}
            y2={24 + Math.sin(a) * 20}
            strokeWidth="3"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

/** Soft blob backdrop used behind hero areas. */
export function BlobField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-soft blur-3xl" />
      <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-sun-soft blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-blossom-soft blur-3xl" />
      <Cloud className="float-slow absolute left-[8%] top-[18%] w-24 text-card opacity-90" />
      <Cloud className="float-slow absolute right-[12%] bottom-[14%] w-20 text-card opacity-80" />
      <Star className="float-slow absolute left-[4%] bottom-[22%] w-6 text-sun" />
      <Star className="float-slow absolute right-[6%] top-[12%] w-5 text-sun" />
      <Leaf className="absolute right-[3%] bottom-[6%] w-10 text-mint opacity-70" />
    </div>
  );
}
