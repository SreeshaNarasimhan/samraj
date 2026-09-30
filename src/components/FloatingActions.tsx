import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { whatsappHref, telHref, mapsHref } from "@/data/site";

/** Desktop side rail. Mobile uses MobileBottomNav instead. */
export function FloatingActions() {
  return (
    <div className="fixed bottom-8 right-5 z-40 hidden flex-col gap-2 lg:flex">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="btn-base bg-mint text-navy shadow-soft"
      >
        <MessageCircle className="h-4 w-4" /> WhatsApp
      </a>
      <a href={telHref} className="btn-base btn-coral">
        <Phone className="h-4 w-4" /> Call
      </a>
      <a
        href={mapsHref}
        target="_blank"
        rel="noreferrer"
        className="btn-base bg-sky text-navy shadow-soft"
      >
        <MapPin className="h-4 w-4" /> Locate
      </a>
    </div>
  );
}

export function MobileBottomNav() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 gap-2 border-t border-border bg-card px-3 py-2.5 lg:hidden"
    >
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="btn-base bg-mint py-2.5 text-sm text-navy"
      >
        <MessageCircle className="h-4 w-4" /> WhatsApp
      </a>
      <a href={telHref} className="btn-base bg-sky py-2.5 text-sm text-navy">
        <Phone className="h-4 w-4" /> Call
      </a>
      <Link to="/contact" className="btn-base btn-coral py-2.5 text-sm">
        Enquire
      </Link>
    </nav>
  );
}
