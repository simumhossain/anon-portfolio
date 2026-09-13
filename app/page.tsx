import { ArrowUpRight, Sparkles, Target, PenLine, Eye, Github, Mail, Globe, Wand2, TrendingUp, Briefcase, GraduationCap, Phone, MessageCircle, Award } from "lucide-react";

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const METRICS = [
  { stat: "8×", label: "Revenue growth in 6 months", sub: "real BDT, real business" },
  { stat: "$0.01", label: "Cost per click", sub: "via Meta Ads A/B testing" },
  { stat: "1mo", label: "Hire → promotion", sub: "Marketer to Manager" },
  { stat: "100+", label: "Customer calls / day", sub: "orders, trust, recovery" },
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
    desc: "A/B testing hooks, headlines and visual motifs against real metrics. I ship the winners and cut the rest — creative built to convert, $0.01 CPC.",
    tools: "Meta Ads Manager · Analytics",
  },
  {
    icon: PenLine,
    title: "Copy that lands",
    desc: "English + Bangla creative that reads human. Campaign headlines engineered to stop the scroll and earn the click.",
    tools: "Copywriting · Canva · Storytelling",
  },
  {
    icon: Eye,
    title: "Trends & New Tools",
    desc: "Daily user of ChatGPT, Claude, Gemini, DeepSeek; self-taught prompt engineering since 2023. I adopt tools before they trend — and build the workflow.",
    tools: "Agent workflows · AI research · Prompt engineering",
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
];

const EXPERIENCE = [
  {
    company: "M/s Nakshee Decor",
    role: "Manager (promoted from Marketer in 1 month)",
    range: "Jun 2025 – Jan 2026 · Dhaka · Interior & Decor",
    points: [
      "Managed end-to-end operations — sales, marketing, production, delivery, customer service.",
      "Ran Meta Ads with A/B testing of creatives, audiences & CTAs — achieved $0.01 CPC.",
      "Drove revenue 12L → 18L → 30L → 1 Crore BDT in 6 months.",
      "Personally handled 100+ calls/day: order confirmation, trust-building, difficult-customer recovery.",
      "Owned profit modeling, pricing, cost control, KPI reporting, and stakeholder communication.",
    ],
  },
  {
    company: "Budget Bazaar",
    role: "Co-Founder",
    range: "Sep 2025 – Feb 2026 · E-Commerce · Import",
    points: [
      "Owned end-to-end sourcing from China to Bangladesh — full supply-chain.",
      "Handled logistics, delivery, and order management across B2C and B2B.",
      "Built vendor relationships and import-margin pricing strategy.",
    ],
  },
  {
    company: "FoodBump",
    role: "Founder",
    range: "Oct 2023 – Sep 2024 · Campus Food Venture",
    points: [
      "Built and operated a campus food business from scratch while studying full-time.",
      "Ran customer interaction, order management, and real-time dynamic pricing.",
      "Operated solo — owner, marketer, and operator in one.",
    ],
  },
];

const ABOUT_PARAGRAPHS = [
  "I'm Hossain Simum Anon — a technical graduate who turned a love of content and AI into real-world business results. I treat AI tools the way a photographer treats a camera: instruments I've learned to direct, not novelties to prompt.",
  "I plan the concept, generate the asset, and optimize it until it earns its place in front of an audience. Bilingual (English + Bangla), always measured, and always iterating — from imagination to a shipping, converting asset.",
  "My foundations: B.Sc. in Information & Communication Engineering (DIU, 2026, CGPA 3.27), a published patent, and hands-on ownership across ventures and a six-figure-then-seven-figure operation.",
];

const EDUCATION = [
  { degree: "B.Sc. in Information & Communication Engineering", school: "Daffodil International University", year: "2026 · CGPA 3.27" },
  { degree: "Higher Secondary Certificate (HSC)", school: "Daffodil International College", year: "2020 · GPA 4.42" },
  { degree: "Secondary School Certificate (SSC)", school: "Model Academy", year: "2018 · GPA 4.44" },
];

const CERTS = ["Social Media Marketing — Passive Journal (2022)", "Software Development Life Cycle (SDLC) — Riseup Labs (2025)", "Patent: Smart Locker Suitable for Public Places — BT (Published 2025)"];

const EMAIL = "hossainsimumanon@gmail.com";
const PHONE = "01827-888314";

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
                AI Content Specialist · Dhaka, Bangladesh
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
                works with data. Bilingual, operator-minded, and result-obsessed.
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
                <span className="text-sm text-mfg">Available · Open to relocate</span>
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
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">Creative, with receipts</h2>
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

        {/* EXPERIENCE */}
        <section id="experience" className="section-pad border-b border-line bg-white">
          <div className="container-x">
            <div className="mb-12">
              <p className="text-sm font-medium text-accent">Experience</p>
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">Work that moved real numbers</h2>
            </div>
            <div className="space-y-8">
              {EXPERIENCE.map((e) => (
                <article key={e.company} className="grid gap-5 border-b border-line pb-8 last:border-0 lg:grid-cols-[260px_1fr]">
                  <div>
                    <div className="flex items-center gap-2 text-accent">
                      <Briefcase className="h-4 w-4" />
                      <span className="font-heading text-lg font-semibold text-fg">{e.company}</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-fg">{e.role}</p>
                    <p className="mt-1 text-xs text-mfg">{e.range}</p>
                  </div>
                  <ul className="space-y-2.5">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-mfg">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section-pad border-b border-line">
          <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-medium text-accent">About</p>
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">Operator at the AI edge</h2>
            </div>
            <div className="space-y-4 text-[15px] leading-relaxed text-mfg">
              {ABOUT_PARAGRAPHS.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section-pad border-b border-line bg-white">
          <div className="container-x">
            <p className="text-sm font-medium text-accent">Education & certifications</p>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">Built to keep learning</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {EDUCATION.map((ed) => (
                <div key={ed.degree} className="rounded-2xl border border-line bg-card p-6 shadow-card">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-base font-semibold leading-snug">{ed.degree}</h3>
                  <p className="mt-1 text-sm text-fg">{ed.school}</p>
                  <p className="mt-1 text-xs text-mfg">{ed.year}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <div className="mb-4 flex items-center gap-2 text-accent">
                <Award className="h-4 w-4" />
                <span className="font-heading text-base font-semibold text-fg">Certifications & highlights</span>
              </div>
              <ul className="space-y-2.5">
                {CERTS.map((c) => (
                  <li key={c} className="flex gap-3 text-[15px] leading-relaxed text-mfg">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
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
                Portfolio · GitHub Pages · Open to relocate
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
                href="tel:+8801827888314"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60"
              >
                <Phone className="h-4 w-4" /> {PHONE}
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
            <div className="flex flex-wrap gap-4 text-sm text-white/60">
              <a href="https://linkedin.com/in/hossainanon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white">
                <MessageCircle className="h-4 w-4" /> linkedin.com/in/hossainanon
              </a>
              <a href="https://simumanon.github.io/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white">
                <Globe className="h-4 w-4" /> General portfolio
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
            <TrendingUp className="h-3.5 w-3.5 text-accent" />
            Dhaka, Bangladesh · Open to relocate
          </span>
        </div>
      </footer>
    </div>
  );
}