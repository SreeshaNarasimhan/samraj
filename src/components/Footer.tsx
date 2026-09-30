import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { school, mapsHref, navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-cream pb-28 pt-14 lg:pb-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            A joyful, play-based start to school for children aged 2 to 6 in Jalakandapuram, Salem.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href={school.social.facebook}
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-full bg-sky-soft text-navy transition-colors hover:bg-sky"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={school.social.instagram}
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full bg-blossom-soft text-navy transition-colors hover:bg-blossom"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={school.social.youtube}
              aria-label="YouTube"
              className="grid h-9 w-9 place-items-center rounded-full bg-coral-soft text-navy transition-colors hover:bg-coral hover:text-primary-foreground"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.slice(0, 4).map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-coral">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider">More Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.slice(4).map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-coral">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-wider">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {school.phones.map((p) => (
              <li key={p.number} className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
                <a href={`tel:${p.number.replace(/\s/g, "")}`} className="hover:text-coral">
                  {p.number} <span className="text-xs">({p.label})</span>
                </a>
              </li>
            ))}
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
              <a href={`mailto:${school.email}`} className="break-all hover:text-coral">
                {school.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
              <a href={mapsHref} target="_blank" rel="noreferrer" className="hover:text-coral">
                {school.address.join(" ")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-7xl px-4 text-xs text-muted-foreground lg:px-8">
        © {new Date().getFullYear()} {school.name}. {school.tagline}
      </p>
    </footer>
  );
}
