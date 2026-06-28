import { BrushCleaning, Globe, Megaphone, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

const services = [
  {
    title: "UI/UX Design",
    description: "Thoughtful interfaces and intuitive journeys that feel effortless on every device.",
    icon: Sparkles,
  },
  {
    title: "Web Development",
    description: "Fast, scalable websites built with clean code and modern performance standards.",
    icon: Globe,
  },
  {
    title: "Branding",
    description: "Identity systems and messaging that make your brand feel distinctive and memorable.",
    icon: BrushCleaning,
  },
  {
    title: "Digital Marketing",
    description: "Launch campaigns and content strategies designed to grow visibility and engagement.",
    icon: Megaphone,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-900/90 px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Strategy-led design for modern growth."
          description="We combine research, storytelling, and polished execution to give your business a sharper edge."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_20px_60px_rgba(2,8,23,0.35)] transition duration-300 hover:-translate-y-2 hover:border-sky-400/40 hover:shadow-[0_24px_70px_rgba(56,189,248,0.18)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/15 to-fuchsia-500/15 text-sky-200 transition duration-300 group-hover:scale-110 group-hover:text-fuchsia-200">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
