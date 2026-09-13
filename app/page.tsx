import Link from "next/link";
import { ArrowUpRight, Sparkles, Target, PenLine, Eye, Github, Mail } from "lucide-react";

const NAV = [{ href: "#work", label: "Work" }, { href: "#skills", label: "Skills" }];

const METRICS = [
  { stat: "8×", label: "return on ad spend (client campaign)" },
  { stat: "$0.01", label: "cost per click via continuous A/B testing" },
  { stat: "30+", label: "AI-driven content assets produced" },
  { stat: "BN + EN", label: "bilingual creative delivered" },
];

const SKILLS = [
  { icon: Sparkles, title: "AI Content Creation", desc: "Imagination-to-visual with AI image & video tools — concept to polished asset, tuned for tone.", tools: "Midjourney · DALL·E · Gemini · VEO" },
  { icon: Target, title: "Run & Optimize AI Creative", desc: "A/B testing headlines, hooks and visuals against real metrics; keep what converts, kill what doesn't.", tools: "Meta Ads Manager, analytics" },
  { icon: PenLine, title: "Copy that lands", desc: "English + Bangla creative that reads human. Campaign hooks and headlines built to stop the scroll.", tools: "Copywriting, storytelling" },
  { icon: Eye, title: "Trends & New Tools", desc: "Live on the AI front line daily — I adopt and test new tools before they trend so content stays ahead.", tools: "Agent workflows, daily tool testing" },
];

const WORK = [
  {
    client: "Maisa Construction",
    role: "Lead Content & Campaign Creative",
    result: "CREATIVE-CAMPAIGN ads (not spec-sheets) — aspirational two-tone headlines + land-to-home visual motif. Continuous A/B iteration cut CPC to $0.01.",
    built: "Visual concepts, ad copy, A/B lab, campaign strategy.",
  },
  {
    client: "Anon's Agent",
    role: "Founder / Content Creator",
    result: "A live AI content publication — weekly curated, human-reviewed AI coverage, shipped as a design system (publication site + written posts).",
    built: "Publication design, article writing, editorial process, setup guides.",
  },
  {
    client: "Independent Campaigns",
    role: "AI Content Specialist",
    result: "Produced 30+ AI-driven content assets across Meta & web — from first idea to finished creatives, always aligned to a creative direction.",
    built: "Concepting, generating, iterating to final.",
  },
];

const EMAIL = "hossainsimumanon@gmail.com";

export default function Portfolio() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-6 px-6">
          <span className="text-lg font-bold tracking-tight text-foreground">
            Hossain Simum Anon<span className="text-brand-600">.</span>
          </span>
          <nav className="flex items-center gap-4 overflow-x-auto whitespace-nowrap sm:gap-7">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {n.label}
              </a>
            ))}
            <a
              href={`mailto:${EMAIL}?subject=AI%20Content%20Specialist%20Application`}
              className="rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Hire me
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-brand-50 via-background to-white">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-brand-600" />
              AI Content Specialist · Portfolio
            </span>
            <h1 className="max-w-[16ch] text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl">
              I turn imagination into AI content that <span className="text-brand-600">gets results.</span>
            </h1>
            <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-muted-foreground md:text-xl">
              I&rsquo;m <strong className="text-foreground">Hossain Simum Anon</strong> — a content specialist
              who plans, creates and optimizes AI-driven visuals and copy, then proves what works with data.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${EMAIL}?subject=AI%20Content%20Specialist%20Application`}
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Hire me <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#work" className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-foreground">
                See the work
              </a>
            </div>
          </div>
        </section>

        {/* METRICS */}
        <section className="border-b border-border bg-white">
          <div className="mx-auto max-w-[1200px] px-6 py-14">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {METRICS.map((m) => (
                <div key={m.label}>
                  <p className="text-3xl font-bold tracking-tight text-brand-600 md:text-4xl">{m.stat}</p>
                  <p className="mt-2 max-w-[22ch] text-sm leading-snug text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="border-b border-border bg-background">
          <div className="mx-auto max-w-[1200px] px-6 py-16">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">What I bring</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {SKILLS.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="rounded-xl border border-border bg-white p-6 shadow-soft transition-shadow hover:shadow-lift">
                    <div className="mb-3 flex items-center gap-2.5">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50">
                        <Icon className="h-4.5 w-4.5 text-brand-600" />
                      </span>
                      <h3 className="text-lg font-semibold">{s.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                    <p className="mt-3 text-xs font-medium text-brand-700">{s.tools}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="border-b border-border bg-white">
          <div className="mx-auto max-w-[1200px] px-6 py-16">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Selected work</h2>
            <div className="mt-8 divide-y divide-border border-y border-border">
              {WORK.map((w) => (
                <div key={w.client} className="grid gap-4 py-7 sm:grid-cols-[200px_1fr]">
                  <div className="sm:pt-1">
                    <h3 className="text-lg font-semibold">{w.client}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{w.role}</p>
                  </div>
                  <div>
                    <p className="text-[15px] leading-relaxed"><strong>Result:</strong> {w.result}</p>
                    <p className="mt-2 text-sm text-muted-foreground"><strong>Built:</strong> {w.built}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EMAIL CTA */}
        <section className="bg-foreground text-white">
          <div className="mx-auto max-w-[720px] px-6 py-20 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Let&rsquo;s build the future of content.</h2>
            <p className="mx-auto mt-4 max-w-[46ch] text-white/80">
              I turn ideas into AI-driven content — and optimize it to perform. Send me a brief and I&rsquo;ll
              send back a concept.
            </p>
            <a
              href={`mailto:${EMAIL}?subject=AI%20Content%20Specialist%20Application`}
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {EMAIL} <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-white">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} Hossain Simum Anon · AI Content Specialist</span>
          <span className="flex items-center gap-4">
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-1 hover:text-foreground">
              <Mail className="h-4 w-4" /> {EMAIL}
            </a>
            <a href="https://github.com/simumhossain" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-foreground">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}