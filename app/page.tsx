import { ArrowUpRight, Sparkles, Target, PenLine, Eye, Mail, Globe, Wand2, TrendingUp, Briefcase, GraduationCap, Phone, MessageCircle, Award, Rocket, Cpu, LineChart, Handshake, ShoppingBag, Store, Lightbulb, Users, Gauge, Compass } from "lucide-react";
import { Reveal, Counter } from "@/components/motion";

const NAV = [
  { href: "#what-i-do", label: "What I do" },
  { href: "#experience", label: "Experience" },
  { href: "#ventures", label: "Ventures" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const METRICS = [
  { value: 8, suffix: "×", label: "Revenue growth in 6 months", sub: "real BDT, real business" },
  { value: 0.01, prefix: "$", decimals: 2, label: "Cost per click", sub: "via Meta Ads A/B testing" },
  { value: 1, suffix: "Cr", label: "BDT monthly run-rate", sub: "12L → 1Cr scaling an operation" },
  { value: 100, suffix: "+", label: "Customer calls / day", sub: "orders, trust, recovery" },
];

const SERVICES = [
  {
    icon: LineChart,
    title: "Understand & scale business",
    desc: "I read the economics of a business — unit economics, margin, funnel, position — then build the machine that grows it. Proven: took a business from 12L to 1Cr BDT in six months.",
    tools: "Strategy · Unit economics · Operations · Pricing",
  },
  {
    icon: Cpu,
    title: "Automate with AI",
    desc: "Any business or service, I can see where it can be automated — content, ads, ops, customer service, reporting. I design the workflow and make the AI do the heavy lifting.",
    tools: "Agent workflows · Prompt engineering · Automation",
  },
  {
    icon: Target,
    title: "Growth marketing that converts",
    desc: "A/B-tested hooks, headlines and visuals against real metrics. I ship what works and cut the rest — creative built to convert at $0.01 CPC.",
    tools: "Meta Ads · Analytics · CRO · Funnels",
  },
  {
    icon: PenLine,
    title: "Copy & AI content",
    desc: "English + Bangla creative that reads human. Campaign headlines engineered to stop the scroll and earn the click.",
    tools: "Copywriting · Canva · Storytelling",
  },
  {
    icon: Rocket,
    title: "Launch & build ventures",
    desc: "Founder track: taken ideas from zero to operating businesses — e-commerce, import supply chains, a campus food venture, and a live publication.",
    tools: "Sourcing · Logistics · Product · Positioning",
  },
  {
    icon: Handshake,
    title: "Consult on business + AI",
    desc: "You understand your domain; I understand how business and AI fit together. I advise on where to invest, what to build, and what to automate — knowledge I share freely.",
    tools: "Consulting · Advisory · Training · Roadmaps",
  },
];

const EXPERIENCE = [
  {
    company: "Maisa Construction",
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
];

const VENTURES = [
  {
    company: "FoodBump",
    role: "Founder",
    range: "Oct 2023 – Sep 2024 · Campus Food Venture",
    icon: ShoppingBag,
    points: [
      "Built and operated a campus food business from scratch while studying full-time.",
      "Ran customer interaction, order management, and real-time dynamic pricing.",
      "Operated solo — owner, marketer, and operator in one.",
    ],
  },
  {
    company: "Budget Bazaar",
    role: "Co-Founder",
    range: "Sep 2025 – Feb 2026 · E-Commerce · Import",
    icon: Store,
    points: [
      "Owned end-to-end sourcing from China to Bangladesh — full supply-chain.",
      "Handled logistics, delivery, and order management across B2C and B2B.",
      "Built vendor relationships and import-margin pricing strategy.",
    ],
  },
  {
    company: "Anon's Agent",
    role: "Founder · Content Creator",
    range: "Personal publication · ongoing",
    icon: Globe,
    points: [
      "Founded and ran a live AI-content publication with weekly curated, human-reviewed coverage.",
      "Shipped a full design system — publication site, article templates, and editorial process.",
    ],
  },
];

const ABOUT_PARAGRAPHS = [
  "I'm Hossain Simum Anon — a visionary who understands business end to end, and an AI-first builder who automates any business or service. I'm equally comfortable talking strategy with a founder and building the workflow that executes it.",
  "I've scaled a business from 12L to 1 Crore BDT in six months, founded and run three ventures, earned a published patent, and use AI daily to remove friction from everything I touch. My edge is the crossover: I see both how a business makes money and where AI can multiply that.",
  "I consult on business and AI because I enjoy sharing the knowledge. My foundations: B.Sc. in Information & Communication Engineering (DIU, 2026, CGPA 3.27), hands-on ownership across ventures, and a record of real numbers — not claims.",
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
            href={`mailto:${EMAIL}?subject=Let%27s%20build%20something`}
            className="hidden items-center gap-1.5 rounded-full bg-fg px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.02] sm:inline-flex"
          >
            Work with me <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href="#experience" className="text-sm font-medium text-fg md:hidden" aria-label="See experience">
            Experience
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="border-b border-line">
          <div className="container-x flex flex-col gap-10 pt-20 pb-16 md:pt-28 md:pb-24">
            <div className="max-w-3xl">
              <Reveal>
                <p className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  <Sparkles className="h-4 w-4" />
                  Business × AI · Dhaka, Bangladesh
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-fg md:text-6xl">
                  I understand business and{" "}
                  <span className="relative whitespace-nowrap">
                    scale it with AI
                    <span className="absolute inset-x-0 bottom-1 -z-10 h-3 bg-accent/20 md:h-4" aria-hidden="true" />
                  </span>
                  .
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-mfg md:text-xl">
                  I&rsquo;m <strong className="font-semibold text-fg">Hossain Simum Anon</strong> — a visionary who
                  understands business end to end, builds it, and automates it with AI. Founder, marketer, engineer,
                  and consultant — I can tell you all about business and AI, and I love consulting on it.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${EMAIL}?subject=Let%27s%20build%20something`}
                    className="inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
                  >
                    Let&rsquo;s talk <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#what-i-do"
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-fg"
                  >
                    What I do
                  </a>
                  <span className="text-sm text-mfg">Available · Open to relocate · Consulting</span>
                </div>
              </Reveal>
            </div>

            {/* Metrics */}
            <Reveal delay={0.2} dir="none">
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
                {METRICS.map((m) => (
                  <div key={m.label} className="bg-card p-6">
                    <p className="font-heading text-3xl font-bold tracking-tight text-fg md:text-4xl">
                      <Counter value={m.value} suffix={m.suffix} prefix={m.prefix} decimals={m.decimals ?? 0} />
                    </p>
                    <p className="mt-1.5 text-sm font-medium text-fg">{m.label}</p>
                    <p className="text-xs text-mfg">{m.sub}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* WHAT I DO */}
        <section id="what-i-do" className="section-pad border-b border-line bg-white">
          <div className="container-x">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <Reveal>
                <div>
                  <p className="text-sm font-medium text-accent">What I do</p>
                  <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">Business + AI, across the whole arc</h2>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="max-w-sm text-sm leading-relaxed text-mfg">
                  From understanding the economics of a business to automating the work — I operate across the
                  full arc, and I advise others on it too.
                </p>
              </Reveal>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal key={s.title} delay={i * 0.08}>
                    <div className="group flex h-full flex-col rounded-2xl border border-line bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-hover">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-heading text-lg font-semibold">{s.title}</h3>
                      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-mfg">{s.desc}</p>
                      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-mfg">{s.tools}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section-pad border-b border-line bg-white">
          <div className="container-x">
            <Reveal>
              <div className="mb-12">
                <p className="text-sm font-medium text-accent">Experience</p>
                <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">Work that moved real numbers</h2>
              </div>
            </Reveal>
            <div className="space-y-8">
              {EXPERIENCE.map((e, i) => (
                <Reveal key={e.company} delay={i * 0.06} dir="left">
                  <article className="group grid gap-5 border-b border-line pb-8 last:border-0 lg:grid-cols-[260px_1fr]">
                    <div className="transition-transform duration-300 group-hover:translate-x-1">
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
                    {e.built && (
                      <p className="mt-2 text-xs text-mfg">
                        <strong className="font-semibold text-fg">Built:</strong> {e.built}
                      </p>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* VENTURES */}
        <section id="ventures" className="section-pad border-b border-line">
          <div className="container-x">
            <Reveal>
              <div className="mb-12">
                <p className="text-sm font-medium text-accent">Ventures</p>
                <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">Things I built from zero</h2>
              </div>
            </Reveal>
            <div className="space-y-8">
              {VENTURES.map((v, i) => {
                const Icon = v.icon;
                return (
                  <Reveal key={v.company} delay={i * 0.06} dir="left">
                    <article className="group grid gap-5 border-b border-line pb-8 last:border-0 lg:grid-cols-[260px_1fr]">
                      <div className="transition-transform duration-300 group-hover:translate-x-1">
                        <div className="flex items-center gap-2 text-accent">
                          <Icon className="h-4 w-4" />
                          <span className="font-heading text-lg font-semibold text-fg">{v.company}</span>
                        </div>
                        <p className="mt-1 text-sm font-medium text-fg">{v.role}</p>
                        <p className="mt-1 text-xs text-mfg">{v.range}</p>
                      </div>
                      <ul className="space-y-2.5">
                        {v.points.map((p) => (
                          <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-mfg">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section-pad border-b border-line">
          <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-start">
            <Reveal dir="right">
              <div>
                <p className="text-sm font-medium text-accent">About</p>
                <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">Visionary at the business × AI crossover</h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-4 text-[15px] leading-relaxed text-mfg">
                {ABOUT_PARAGRAPHS.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section-pad border-b border-line bg-white">
          <div className="container-x">
            <Reveal>
              <p className="text-sm font-medium text-accent">Education & certifications</p>
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">Built to keep learning</h2>
            </Reveal>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {EDUCATION.map((ed, i) => (
                <Reveal key={ed.degree} delay={i * 0.1}>
                  <div className="h-full rounded-2xl border border-line bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-hover">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-base font-semibold leading-snug">{ed.degree}</h3>
                    <p className="mt-1 text-sm text-fg">{ed.school}</p>
                    <p className="mt-1 text-xs text-mfg">{ed.year}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.15}>
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
            </Reveal>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section id="contact" className="relative overflow-hidden bg-fg text-white">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/25 blur-3xl" aria-hidden="true" />
          <div className="container-x flex flex-col items-start gap-8 py-20 md:py-24">
            <Reveal className="w-full">
              <div className="max-w-xl">
                <p className="inline-flex items-center gap-2 text-sm font-medium text-white/70">
                  <Globe className="h-4 w-4" />
                  Business × AI · Portfolio · Open to relocate & consulting
                </p>
                <h2 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                  Let&rsquo;s talk business and AI.
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-white/70">
                  Whether you want to scale a business, automate a service, or get a straight answer on where AI
                  fits — send me a message and I&rsquo;ll take it from there.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${EMAIL}?subject=Let%27s%20build%20something`}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)]"
                >
                  <Mail className="h-4 w-4" /> {EMAIL}
                </a>
                <a
                  href="tel:+8801827888314"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/60 hover:bg-white/5"
                >
                  <Phone className="h-4 w-4" /> {PHONE}
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-4 text-sm text-white/60">
                <a href="https://linkedin.com/in/hossainanon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
                  <MessageCircle className="h-4 w-4" /> linkedin.com/in/hossainanon
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-line bg-white">
        <div className="container-x flex flex-wrap items-center justify-between gap-3 py-8 text-sm text-mfg">
          <span>&copy; {new Date().getFullYear()} Hossain Simum Anon · Business × AI</span>
          <span className="flex items-center gap-1.5">
            <Compass className="h-3.5 w-3.5 text-accent" />
            Dhaka, Bangladesh · Open to relocate & consulting
          </span>
        </div>
      </footer>
    </div>
  );
}