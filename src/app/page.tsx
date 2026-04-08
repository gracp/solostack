"use client";

import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Target,
  Repeat,
  Clock,
  BarChart2,
  Check,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Zap,
} from "lucide-react";
import { copy } from "@/lib/copy";

/* ─────────────────────────────────────────────
   NAV
───────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-zinc-100"
          : "bg-transparent"
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-16">
          <span className="text-lg font-bold tracking-tight text-foreground">
            {copy.nav.logo}
          </span>
          <a
            href="#waitlist"
            className="hidden sm:inline-flex items-center gap-2 bg-foreground text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-accent transition-colors duration-200"
          >
            {copy.nav.cta}
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
function Hero() {
  const { ref, isVisible } = useScrollAnimation();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  }

  return (
    <section
      id="waitlist"
      className="pt-40 pb-24 px-4 sm:px-6 lg:px-8"
    >
      <div
        ref={ref}
        className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-700 text-xs font-medium px-3 py-1.5 rounded-full mb-8">
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          Early Access — Limited Spots
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.05] mb-6 text-balance">
          {copy.hero.headline}
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
          {copy.hero.subheadline}
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-5"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={copy.hero.ctaPlaceholder}
              className="flex-1 px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-foreground text-white text-sm font-semibold rounded-xl hover:bg-accent transition-colors duration-200 whitespace-nowrap flex items-center gap-2 cursor-pointer"
            >
              {copy.hero.ctaButton}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="max-w-lg mx-auto mb-5 flex items-center justify-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium px-5 py-3.5 rounded-xl">
            <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            You're in! We'll be in touch.
          </div>
        )}

        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}

        <p className="text-sm text-muted-foreground">
          {copy.hero.trustLine}
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SOCIAL PROOF BAR
───────────────────────────────────────────── */
function SocialProofBar() {
  return (
    <div className="bg-foreground text-white py-4 px-4 sm:px-6 lg:px-8">
      <div className="container-max">
        <p className="text-center text-sm sm:text-base font-medium text-zinc-300">
          <span className="text-white font-semibold">
            {copy.socialProofBar.text.split(" ")[0]}
          </span>{" "}
          {copy.socialProofBar.text.split(" ").slice(1).join(" ")}
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ANIMATED SECTION WRAPPER
───────────────────────────────────────────── */
function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   HOW IT WORKS
───────────────────────────────────────────── */
const stepIcons = [Target, Repeat, Check];

function HowItWorks() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container-max">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Three steps to consistent social media
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {copy.howItWorks.map((item, i) => {
            const Icon = stepIcons[i];
            return (
              <AnimatedSection key={item.step} delay={i * 120} className="relative">
                <div className="flex flex-col items-start">
                  <span className="text-6xl font-extrabold text-zinc-100 leading-none mb-4 select-none">
                    {item.step}
                  </span>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FEATURES
───────────────────────────────────────────── */
const featureIcons: Record<string, React.ElementType> = {
  target: Target,
  repeat: Repeat,
  clock: Clock,
  "bar-chart": BarChart2,
};

function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50">
      <div className="container-max">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Everything you need. Nothing you don't.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Built for the solopreneur who wants results, not another dashboard to learn.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {copy.features.map((feature, i) => {
            const Icon = featureIcons[feature.icon] || Target;
            return (
              <AnimatedSection
                key={feature.name}
                delay={i * 100}
                className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 hover:border-zinc-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1.5">
                  {feature.name}
                </h3>
                <p className="text-xs font-medium text-accent mb-3">
                  {feature.descriptor}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────────── */
function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container-max">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Real results from real solopreneurs.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {copy.testimonials.map((t, i) => (
            <AnimatedSection
              key={t.name}
              delay={i * 120}
              className="flex flex-col bg-zinc-50 border border-zinc-200 rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow duration-300"
            >
              <p className="text-sm text-foreground leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </p>
              <div className="border-t border-zinc-200 pt-5">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5 mb-3">
                  {t.role}
                </p>
                <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                  <Zap className="w-3 h-3" />
                  {t.result}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PRICING
───────────────────────────────────────────── */
function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50">
      <div className="container-max">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Simple pricing. No surprises.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Start free. Upgrade when you're ready to go all in.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { ...copy.pricing.free, highlighted: false },
            { ...copy.pricing.pro, highlighted: true },
            { ...copy.pricing.agency, highlighted: false },
          ].map((plan, i) => (
            <AnimatedSection
              key={plan.name}
              delay={i * 100}
              className={`relative flex flex-col rounded-2xl p-6 sm:p-8 ${
                plan.highlighted
                  ? "bg-foreground text-white shadow-2xl scale-[1.02]"
                  : "bg-white border border-zinc-200"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-lg font-bold mb-1 ${
                    plan.highlighted ? "text-white" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-4xl font-extrabold tracking-tight ${
                      plan.highlighted ? "text-white" : "text-foreground"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.highlighted ? "text-zinc-400" : "text-muted-foreground"
                    }`}
                  >
                    /month
                  </span>
                </div>
                <p
                  className={`text-sm mt-2 ${
                    plan.highlighted ? "text-zinc-400" : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? "text-accent" : "text-emerald-500"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.highlighted ? "text-zinc-300" : "text-muted-foreground"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                className={`block text-center text-sm font-semibold px-5 py-3 rounded-xl transition-colors duration-200 cursor-pointer ${
                  plan.highlighted
                    ? "bg-accent text-white hover:bg-accent/90"
                    : "bg-zinc-100 text-foreground hover:bg-zinc-200"
                }`}
              >
                {plan.cta}
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FAQ
───────────────────────────────────────────── */
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container-max">
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Questions we get a lot.
          </h2>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto flex flex-col divide-y divide-zinc-200">
          {copy.faq.map((item, i) => (
            <div key={i} className="py-5">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-start justify-between gap-4 text-left cursor-pointer"
              >
                <span className="text-sm sm:text-base font-semibold text-foreground">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 mt-0.5 text-muted-foreground transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FINAL CTA
───────────────────────────────────────────── */
function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-foreground">
      <div
        ref={ref}
        className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <Sparkles className="w-8 h-8 text-accent mx-auto mb-6" />
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5 text-balance">
          {copy.finalCta.headline}
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg mb-10 max-w-xl mx-auto">
          {copy.finalCta.subheadline}
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={copy.finalCta.ctaPlaceholder}
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-white text-sm font-semibold rounded-xl hover:bg-accent/90 transition-colors duration-200 whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer"
            >
              {copy.finalCta.ctaButton}
            </button>
          </form>
        ) : (
          <div className="max-w-md mx-auto flex items-center justify-center gap-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium px-5 py-3.5 rounded-xl">
            <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            You're in! We'll be in touch.
          </div>
        )}

        {error && <p className="text-red-400 text-sm mt-3">{error}</p>}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */
function Footer() {
  const cols = [
    copy.footer.links.slice(0, 3),
    copy.footer.links.slice(3, 6),
    copy.footer.links.slice(6),
  ];

  return (
    <footer className="bg-white border-t border-zinc-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container-max">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="text-base font-bold text-foreground">
              {copy.nav.logo}
            </span>
            <p className="text-sm text-muted-foreground mt-1">
              {copy.footer.tagline}
            </p>
          </div>

          <div className="flex gap-12">
            {cols.map((col, ci) => (
              <ul key={ci} className="flex flex-col gap-2">
                {col.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="border-t border-zinc-200 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} SoloStack. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#privacy"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function HomePage() {
  return (
    <main className="bg-white min-h-screen">
      <Nav />
      <Hero />
      <SocialProofBar />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
