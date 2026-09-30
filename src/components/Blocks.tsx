import { Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  Brain,
  Heart,
  Palette,
  Phone,
  Shield,
  Smile,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { telHref } from "@/data/site";
import { Star } from "@/components/Decor";

export const icons: Record<string, LucideIcon> = {
  heart: Heart,
  users: Users,
  shield: Shield,
  sparkles: Sparkles,
  brain: Brain,
  smile: Smile,
  activity: Activity,
  palette: Palette,
};

export function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-16 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">{children}</div>
    </section>
  );
}

export function CtaBand({
  title = "Give your child a joyful start",
  text = "Admissions are open for Play Group, Nursery, LKG and UKG. Visit our campus any day.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-12 text-center text-primary-foreground sm:px-12">
        <Star className="absolute left-8 top-8 w-6 text-sun" />
        <Star className="absolute bottom-10 right-10 w-8 text-sun" />
        <h2 className="text-3xl text-primary-foreground sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl opacity-85">{text}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link to="/admissions" className="btn-base btn-coral">
            Apply Now <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={telHref} className="btn-base btn-sun">
            <Phone className="h-4 w-4" /> Call Us
          </a>
        </div>
      </div>
    </Section>
  );
}
