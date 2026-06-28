import Image from "next/image";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const highlights = ["Rapid launch", "Brand systems", "Growth design"];

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.35),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(168,85,247,0.28),transparent_26%),linear-gradient(135deg,#020617_0%,#0f172a_48%,#111827_100%)]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-sm text-sky-200 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Trusted by modern founders
            </div>
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Design that helps startups grow faster.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              We craft launch-ready brands, websites, and product stories that turn first attention into lasting momentum.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-200"
              >
                Book a strategy call
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-sky-400/40 hover:text-sky-200"
              >
                <Play className="h-4 w-4" />
                View our work
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:180ms]">
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-[0_30px_100px_rgba(10,20,40,0.45)] backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-sky-500/25 via-slate-900/80 to-fuchsia-500/25 p-5 sm:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-300">Launch readiness</p>
                    <p className="text-xl font-semibold text-white">92% faster rollout</p>
                  </div>
                  <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
                    Live
                  </div>
                </div>

                <div className="animate-float rounded-[1.25rem] border border-white/10 bg-slate-950/70 p-3">
                  <Image
                    src="/hero-illustration.svg"
                    alt="Abstract design agency illustration"
                    width={640}
                    height={640}
                    priority
                    className="h-auto w-full rounded-[1rem]"
                  />
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <p className="text-sm text-slate-400">Brand clarity</p>
                    <p className="mt-1 text-base font-semibold text-white">3-week sprint</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <p className="text-sm text-slate-400">Conversion focus</p>
                    <p className="mt-1 text-base font-semibold text-white">+38% engagement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
