import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X, ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";
import { navLinks, telHref, primaryPhone } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-card/95 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:flex lg:justify-between lg:px-8"
      >
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="rounded-full px-3 py-2 text-sm font-bold text-muted-foreground transition-colors hover:text-coral data-[status=active]:text-coral"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={telHref}
            aria-label={`Call ${primaryPhone}`}
            className="grid h-10 w-10 place-items-center rounded-full bg-sky-soft text-navy transition-colors hover:bg-sky"
          >
            <Phone className="h-4 w-4" />
          </a>
          <Link to="/contact" className="btn-base btn-coral hidden sm:inline-flex">
            Book a Visit <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-navy lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile sliding menu */}
      <div
        className={`fixed inset-x-0 top-[66px] z-40 origin-top border-b border-border bg-card px-4 pb-6 pt-2 shadow-lift transition-all duration-300 lg:hidden ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <ul className="flex flex-col">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="block border-b border-border/60 py-3 text-base font-bold text-navy data-[status=active]:text-coral"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="btn-base btn-coral mt-5 w-full">
          Book a Visit <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}
