import { ArrowUpRight, Sparkles, Target, PenLine, Eye, Github, Mail, ArrowDown, Globe, Wand2 } from "lucide-react";

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const METRICS = [
  { stat: "8×", label: "Return on ad spend", sub: "live client campaign" },
  { stat: "$0.01", label: "Cost per click", sub: "via continuous A/B testing" },
  { stat: "30+", label: "AI assets produced", sub: "concept → finished creative" },
  { stat: "BN·EN", label: "Bilingual output", sub: "English + Bangla copy" },
];

const SKILLS = [
  {
    icon: Wand2,
    title: "AI Content Creation",
    desc: "Imagination to visual, end to end — concepting, generating, and tuning AI imagery with Midjourney, DALL·E, Gemini and VEO until the tone lands.",
    tools: "Midjourney · DALL·E · Gemini · VEO",
  },
  {
    icon: Target,
    title: "Run & Optimize",
    desc: "A/B testing hooks, headlines and visual motifs against real metrics. I ship the winners and cut the rest — creative built to convert, not just to look good.",
    tools: "Meta Ads Manager · Analytics",
  },
  {
    icon: PenLine,
    title: "Copy that lands",
    desc: "English + Bangla creative that reads human. Campaign headlines engineered to stop the scroll and earn the click.",
    tools: "Copywriting · Storytelling",
  },
  {
    icon: Eye,
    title: "Trends & New Tools",
    desc: "I live on the AI front line and adopt tools before they trend. The workflow itself is the edge — I build it when it doesn't exist yet.",
    tools: "Agent workflows · Daily tool testing",
  },
];

const WORK = [
  {
    client: "Maisa Construction",
    role: "Lead Content & Campaign Creative",
    range: "Client engagement",
    points: [
      "Built CREATIVE-CAMPAIGN ads — aspirational two-tone headlines with a land-to-home visual motif, not spec sheets.",
      "Ran a continuous A/B lab on hooks and visuals, cutting cost per click to $0.01.",
      "Drove an 8× return on ad spend for the construction client.",
    ],
    built: "Visual concepts · Ad copy · A/B lab · Campaign strategy",
  },
  {
    client: "Anon's Agent",
    role: "Founder · Content Creator",
    range: "Personal publication",
    points: [
      "Founded and ran a live AI-content publication with weekly curated, human-reviewed coverage.",
      "Shipped a full design system — publication site, article templates, and editorial process.",
    ],
    built: "Publication design · Writing · Editorial system",
  },
  {
    client: "Independent campaigns",
    role: "AI Content Specialist",
    range: "Ongoing",
    points: [
      "Produced 30+ AI-driven content assets across Meta and web.",
      "From first idea to finished creative, always anchored to a clear creative direction.",
    ],
    built: "Concepting · Generating · Iterating to final",
  },
];

const EMAIL = "hossainsimumanon@gmail.com";

export default function Portfolio() {
  return (
    <div className="min-h-dvh bg-bg font-body text-fg">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
        <div className="container-x flex h-16 items-center justify-between">
          <a href="#" className="font-heading text-lg font-bold tracking-tight text-fg">
            Hossain Simum Anon<span className="text-accent">.</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-mfg transition-colors hover:text-fg">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={`mailto:${EMAIL}?subject=AI%20Content%20Specialist%20Application`}
            className="hidden items-center gap-1.5 rounded-full bg-fg px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.02] sm:inline-flex"
          >
            Hire me <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href="#work" className="text-sm font-medium text-fg md:hidden" aria-label="See work">
            Work
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="border-b border-line">
          <div className="container-x flex flex-col gap-10 pt-20 pb-16 md:pt-28 md:pb-24">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
                <Sparkles className="h-4 w-4" />
                AI Content Specialist
              </p>
              <h1 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-fg md:text-6xl">
                I turn imagination into AI content that{" "}
                <span className="relative whitespace-nowrap">
                  gets results
                  <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-accent/20 md:h-4" aria-hidden="true" />
                </span>
                .
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-mfg md:text-xl">
                I&rsquo;m <strong className="font-semibold text-fg">Hossain Simum Anon</strong> — a content
                specialist who plans, creates and optimizes AI-driven visuals and copy, then proves what
                works with data.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${EMAIL}?subject=AI%20Content%20Specialist%20Application`}
                  className="inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  Hire me <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-fg"
                >
                  See the work
                </a>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
              {METRICS.map((m) => (
                <div key={m.label} className="bg-card p-6">
                  <p className="font-heading text-3xl font-bold tracking-tight text-fg md:text-4xl">{m.stat}</p>
                  <p className="mt-1.5 text-sm font-medium text-fg">{m.label}</p>
                  <p className="text-xs text-mfg">{m.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section-pad border-b border-line bg-white">
          <div className="container-x">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-medium text-accent">What I bring</p>
                <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">A full creative loop</h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-mfg">
                From the first spark of an idea to an optimized, shipping asset — the whole pipeline,
                not just the generation.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {SKILLS.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="group flex flex-col rounded-2xl border border-line bg-card p-7 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-hover"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 flex-1 text-[15px] leading-relaxed text-mfg">{s.desc}</p>
                    <p className="mt-4 text-xs font-medium uppercase tracking-wide text-mfg">{s.tools}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="section-pad border-b border-line">
          <div className="container-x">
            <div className="mb-12">
              <p className="text-sm font-medium text-accent">Selected work</p>
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">Recent, with receipts</h2>
            </div>
            <div className="space-y-6">
              {WORK.map((w, i) => (
                <article key={w.client} className="flex flex-col gap-6 rounded-2xl border border-line bg-card p-7 transition-all hover:shadow-hover md:p-9 lg:flex-row lg:gap-12">
                  <div className="lg:w-64 lg:shrink-0">
                    <div className="flex items-center gap-3">
                      <span className="font-heading text-sm font-semibold text-accent">0{i + 1}</span>
                      <span className="h-px w-8 bg-line" aria-hidden="true" />
                    </div>
                    <h3 className="mt-3 font-heading text-xl font-bold">{w.client}</h3>
                    <p className="mt-1 text-sm font-medium text-fg">{w.role}</p>
                    <p className="mt-1 text-xs text-mfg">{w.range}</p>
                  </div>
                  <div className="flex-1">
                    <ul className="space-y-2.5">
                      {w.points.map((p) => (
                        <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-mfg">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 border-t border-line pt-4 text-xs text-mfg">
                      <strong className="font-semibold text-fg">Built:</strong> {w.built}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section-pad border-b border-line bg-white">
          <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-medium text-accent">About</p>
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">Operator at the AI edge</h2>
            </div>
            <div className="space-y-4 text-[15px] leading-relaxed text-mfg">
              <p>
                I&rsquo;m a content specialist who treats AI tools the way a photographer treats a camera —
                as instruments I&rsquo;ve learned to direct, not novelties to prompt. I plan the concept,
                generate the asset, and optimize it until it earns its place in front of an audience.
              </p>
              <p>
                My foundation is a B.Sc. in Information &amp; Communication Engineering and hands-on work
                running content and ad campaigns — bilingual, always measured, and always iterating.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section id="contact" className="relative overflow-hidden bg-fg text-white">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/25 blur-3xl" aria-hidden="true" />
          <div className="container-x flex flex-col items-start gap-8 py-20 md:py-24">
            <div className="max-w-xl">
              <p className="inline-flex items-center gap-2 text-sm font-medium text-white/70">
                <Globe className="h-4 w-4" />
                Portfolio · GitHub Pages
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                Let&rsquo;s build the future of content.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/70">
                Send me a brief and I&rsquo;ll send back a concept — imagination to AI visual, ready to test.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${EMAIL}?subject=AI%20Content%20Specialist%20Application`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
              >
                <Mail className="h-4 w-4" /> {EMAIL}
              </a>
              <a
                href="https://github.com/simumhossain/anon-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60"
              >
                <Github className="h-4 w-4" /> Source on GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-line bg-white">
        <div className="container-x flex flex-wrap items-center justify-between gap-3 py-8 text-sm text-mfg">
          <span>&copy; {new Date().getFullYear()} Hossain Simum Anon · AI Content Specialist</span>
          <span className="flex items-center gap-1.5">
            <ArrowDown className="h-3.5 w-3.5 text-accent" />
            Portfolio hosted on GitHub Pages
          </span>
        </div>
      </footer>
    </div>
  );
}