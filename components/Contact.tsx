"use client";

import { Mail, MapPin, PhoneCall } from "lucide-react";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {
      name: formData.name.trim() ? "" : "Please enter your name.",
      email: /.+@.+\..+/.test(formData.email) ? "" : "Please enter a valid email.",
      message: formData.message.trim().length >= 10 ? "" : "Please share a bit more detail.",
    };

    setErrors(nextErrors);
    return !nextErrors.name && !nextErrors.email && !nextErrors.message;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-slate-900 px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_25px_80px_rgba(2,8,23,0.35)] lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-300">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to build something memorable?
          </h2>
          <p className="mt-4 max-w-xl text-lg text-slate-300">
            Share your goals and we will shape a thoughtful plan for your next launch.
          </p>

          <div className="mt-8 space-y-4 text-sm text-slate-300">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-fuchsia-300" />
              <span>hello@southstarstudio.com</span>
            </div>
            <div className="flex items-center gap-3">
              <PhoneCall className="h-5 w-5 text-fuchsia-300" />
              <span>9876543210</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-fuchsia-300" />
              <span>Remote-first, available worldwide</span>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6"
          noValidate
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm text-slate-300">
              <span className="mb-2 block">Name</span>
              <input
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                value={formData.name}
                onChange={(event) => {
                  setFormData({ ...formData, name: event.target.value });
                  setErrors({ ...errors, name: "" });
                }}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-400"
                placeholder="Taylor"
              />
              {errors.name ? <p id="name-error" className="mt-2 text-xs text-rose-400">{errors.name}</p> : null}
            </label>
            <label className="text-sm text-slate-300">
              <span className="mb-2 block">Email</span>
              <input
                type="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                value={formData.email}
                onChange={(event) => {
                  setFormData({ ...formData, email: event.target.value });
                  setErrors({ ...errors, email: "" });
                }}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-400"
                placeholder="you@company.com"
              />
              {errors.email ? <p id="email-error" className="mt-2 text-xs text-rose-400">{errors.email}</p> : null}
            </label>
          </div>
          <label className="text-sm text-slate-300">
            <span className="mb-2 block">Message</span>
            <textarea
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              value={formData.message}
              onChange={(event) => {
                setFormData({ ...formData, message: event.target.value });
                setErrors({ ...errors, message: "" });
              }}
              className="min-h-32 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-sky-400"
              placeholder="Tell us about your project, timeline, and goals."
            />
            {errors.message ? <p id="message-error" className="mt-2 text-xs text-rose-400">{errors.message}</p> : null}
          </label>

          {submitted ? (
            <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
              Thanks! Your message is ready to go and we will be in touch soon.
            </div>
          ) : null}

          <button
            type="submit"
            className="rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            Send inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
