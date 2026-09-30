import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gallery, galleryCategories, type GalleryCategory } from "@/data/site";

export function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory>("All");
  const [index, setIndex] = useState<number | null>(null);

  const items = gallery.filter((g) => filter === "All" || g.category === filter);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: number) =>
      setIndex((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, close, step]);

  const active = index === null ? null : items[index];

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {galleryCategories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => {
              setFilter(c);
              setIndex(null);
            }}
            aria-pressed={filter === c}
            className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
              filter === c
                ? "bg-coral text-primary-foreground"
                : "bg-secondary text-navy hover:bg-sky-soft"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item, i) => (
          <button
            key={`${item.alt}-${i}`}
            type="button"
            onClick={() => setIndex(i)}
            className="group relative aspect-square overflow-hidden rounded-3xl shadow-soft"
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-navy/60 px-3 py-1.5 text-left text-[0.7rem] font-bold text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
              {item.category}
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/85 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="relative w-full max-w-3xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[75vh] w-full rounded-3xl object-contain"
            />
            <p className="mt-3 text-center text-sm font-semibold text-primary-foreground">
              {active.alt}
            </p>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute -top-3 right-0 grid h-10 w-10 place-items-center rounded-full bg-card text-navy shadow-lift"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-card/90 text-navy shadow-lift"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-card/90 text-navy shadow-lift"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
