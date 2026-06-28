import Image from "next/image";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Aurelia Labs",
    description: "A premium launch site for a biotech platform introducing a new wellness line.",
    image: "/portfolio-1.svg",
    tags: ["Branding", "Website"],
  },
  {
    title: "Morrow Finance",
    description: "A refined digital experience for an investment consultancy with a modern tone.",
    image: "/portfolio-2.svg",
    tags: ["Product", "Strategy"],
  },
  {
    title: "Lumen Commerce",
    description: "An elevated e-commerce redesign focused on storytelling and conversion flow.",
    image: "/portfolio-3.svg",
    tags: ["Design System", "Growth"],
  },
  {
    title: "Nova Health",
    description: "A calm, high-trust digital presence for an emerging healthcare startup.",
    image: "/portfolio-1.svg",
    tags: ["Healthcare", "Mobile"],
  },
  {
    title: "Northwind AI",
    description: "A bold product launch page blending product storytelling with conversion design.",
    image: "/portfolio-2.svg",
    tags: ["AI", "Launch"],
  },
  {
    title: "Solstice Studio",
    description: "A cinematic portfolio experience built to spotlight creative work beautifully.",
    image: "/portfolio-3.svg",
    tags: ["Creative", "Editorial"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-slate-950 px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Portfolio"
            title="Recent work shaped for clarity and impact."
            description="Every engagement combines thoughtful collaboration with polished execution."
          />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-[0_20px_60px_rgba(2,8,23,0.35)]"
            >
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={640}
                  height={420}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
