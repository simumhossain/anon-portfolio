import { ArrowUpRight, Sparkles, Target, PenLine, Eye, Mail, Globe, Wand2, TrendingUp, Briefcase, GraduationCap, Phone, MessageCircle, Award, Rocket, Cpu, LineChart, Handshake, ShoppingBag, Store, Gauge, Compass } from "lucide-react";
import { Reveal, Counter, Marquee } from "@/components/motion";

const NAV = [
  { href: "#what-i-do", label: "What I do" },
  { href: "#experience", label: "Experience" },
  { href: "#ventures", label: "Ventures" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const METRICS = [
  { value: 8, suffix: "×", label: "Revenue growth", sub: "Nakshee Decor, 6 months" },
  { value: 0.01, prefix: "$", decimals: 2, label: "Cost per click", sub: "Meta Ads A/B testing" },
  { value: 1, suffix: "Cr", label: "Monthly run-rate", sub: "12L → 1Cr, one operation" },
  { value: 100, suffix: "+", label: "Calls / day", sub: "orders, trust, recovery" },
];

const SERVICES = [
  {
    icon: Compass,
    title: "Understand & scale business",
    desc: "I read the economics of a business — unit economics, margin, funnel, position — then build the machine that grows it. Proven: took a business from 12L to 1Cr BDT in six months.",
    tools: "Strategy · Unit economics · Operations · Pricing",
    big: true,
  },
  {
    icon: Cpu,
    title: "Automate with AI",
    desc: "Any business or service, I can see where it can be automated — content, ads, ops, customer service, reporting. I build command centers that run the day-to-day while you scale.",
    tools: "Agent workflows · Prompt engineering · Command centers",
    big: true,
    feature: true,
  },
  {
    icon: Target,
    title: "Growth marketing",
    desc: "A/B-tested hooks, headlines and visuals against real metrics. I ship what works and cut the rest — $0.01 CPC.",
    tools: "Meta Ads · Analytics · CRO · Funnels",
  },
  {
    icon: PenLine,
    title: "Copy & AI content",
    desc: "English + Bangla creative that reads human. Headlines engineered to stop the scroll.",
    tools: "Copywriting · Canva · Storytelling",
  },
  {
    icon: Rocket,
    title: "Launch & build",
    desc: "From zero to operating businesses — e-commerce, import supply chains, a campus food venture, a live publication.",
    tools: "Sourcing · Logistics · Product · Positioning",
  },
  {
    icon: Handshake,
    title: "Consult on business + AI",
    desc: "You know your domain; I know how business and AI fit. I advise on where to invest, what to build, what to automate — and I train your team on the workflow.",
    tools: "Consulting · Advisory · Training · Roadmaps",
    wide: true,
    feature: true,
  },
].map((s, i) => ({ ...s, i }));

const EXPERIENCE = [
  {
    company: "Maisa Construction",
    role: "Digital Growth Partner",
    range: "Client engagement",
    points: [
      "Built CREATIVE-CAMPAIGN ads — aspirational two-tone headlines with a land-to-home visual motif, not spec sheets.",
      "Ran a continuous A/B lab on hooks and visuals, cutting cost per click to $0.01.",
      "Drove an 8× return on ad spend for the construction client.",
    ],
    built: "Visual concepts · Ad copy · A/B lab · Campaign strategy",
  },
  {
    company: "Beans & Bakes",
    role: "Digital Growth Partner",
    range: "Client engagement",
    points: [
      "Second brand in the growth practice — applying the same A/B-tested playbook to a food & bake label.",
      "Building owned ad systems, creative testing, and funnel optimization to scale local revenue.",
    ],
    built: "Campaign strategy · Creative testing · Growth systems",
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
  "I'm Hossain Simum Anon — a visionary who understands business end to end, and an AI-first builder who automates any business or service. I run a one-man digital agency that grows client businesses (Maisa Construction, Beans & Bakes), and I consult on business and AI because I enjoy sharing the knowledge.",
  "I've scaled a business from 12L to 1 Crore BDT in six months, founded and run three ventures, earned a published patent, and use AI daily to remove friction from everything I touch — building command centers that automate content, ads, ops, and reporting for the businesses I serve. My edge is the crossover: I see both how a business makes money and where AI can multiply that.",
  "I'm equally comfortable talking strategy with a founder and building the workflow that executes it. My foundations: B.Sc. in Information & Communication Engineering (DIU, 2026, CGPA 3.27), hands-on ownership across ventures, and a record of real numbers — not claims.",
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
    <div className="scene-glow min-h-dvh bg-bg font-body text-fg">
      {/* Film grain overlay — global texture */}
      <div className="grain" aria-hidden="true" />
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
            className="hidden items-center gap-1.5 rounded-full bg-fg px-4 py-2 text-sm font-semibold text-bg transition-transform hover:scale-[1.02] sm:inline-flex"
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
        <section className="border-b border-line bg-grid">
          <div className="container-x flex flex-col gap-12 pt-24 pb-20 md:pt-32 md:pb-28">
            <div className="max-w-4xl">
              <Reveal>
                <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-card py-1.5 pl-3 pr-3 text-xs font-medium text-accent">
                  <Sparkles className="h-3.5 w-3.5" />
                  Business × AI · Dhaka, Bangladesh
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="font-heading text-5xl font-bold leading-[1.02] tracking-tight text-fg md:text-[5.5rem] md:leading-[.98]">
                  I understand business and{" "}
                  <span className="relative inline-block whitespace-nowrap">
                    scale it with AI
                    <span className="hl-shimmer" aria-hidden="true" />
                  </span>
                  .
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-mfg md:text-xl">
                  I&rsquo;m <strong className="font-semibold text-fg">Hossain Simum Anon</strong> — a visionary who
                  understands business end to end and scales it with AI. Founder, growth partner, engineer, and
                  consultant. I can tell you all about business and AI — and I love consulting on it.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${EMAIL}?subject=Let%27s%20build%20something`}
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:scale-[1.03] hover:shadow-lift"
                  >
                    Let&rsquo;s talk <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#what-i-do"
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent"
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
                    <p className="tabular font-heading text-3xl font-bold tracking-tight text-fg md:text-4xl">
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

        {/* Kinetic marquee strip */}
        <div className="border-y border-line bg-card py-4">
          <Marquee
            items={[
              "Meta Ads",
              "A/B Testing",
              "AI Automation",
              "Unit Economics",
              "Copywriting",
              "Funnels",
              "Command Centers",
              "Bangla + English",
            ]}
            className="font-heading text-sm font-semibold uppercase tracking-widest text-accent"
          />
        </div>

        {/* WHAT I DO — bento grid */}
        <section id="what-i-do" className="section-pad border-b border-line bg-card-warm">
          <div className="container-x">
            <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <Reveal>
                <div>
                  <p className="text-sm font-medium text-accent">01 — What I do</p>
                  <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight md:text-5xl">
                    Business + AI
                    <span className="text-mfg">, across the whole arc.</span>
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="max-w-sm text-sm leading-relaxed text-mfg">
                  From understanding the economics of a business to automating the work — I operate across the full arc, and I advise others on it too.
                </p>
              </Reveal>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
              {SERVICES.map((s) => {
                const Icon = s.icon;
                const span = s.wide ? "lg:col-span-6" : s.big ? "lg:col-span-3" : "lg:col-span-2";
                const featured = s.feature || false;
                return (
                  <Reveal key={s.title} delay={s.i * 0.05}>
                    <div
                      className={`group sheen flex h-full flex-col rounded-2xl border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${span} ${featured ? "border-accent-2/50 hover:border-accent-2/80 bg-gradient-to-br from-card to-card-warm" : "border-line hover:border-accent/40 bg-card"}`}
                    >
                      <div
                        className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 ${featured ? "bg-accent text-white" : "bg-accent-soft text-accent group-hover:bg-accent group-hover:text-white"}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-heading text-lg font-semibold">{s.title}</h3>
                      <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-mfg">{s.desc}</p>
                      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-mfg">{s.tools}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section-pad border-b border-line bg-bg">
          <div className="container-x">
            <Reveal>
              <div className="mb-14">
                <p className="text-sm font-medium text-accent">02 — Experience</p>
                <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight md:text-5xl">
                  Work that moved real numbers.
                </h2>
              </div>
            </Reveal>
            <div className="space-y-9">
              {EXPERIENCE.map((e, i) => (
                <Reveal key={e.company} delay={i * 0.06} dir="left">
                  <article className="group grid gap-5 border-b border-line pb-9 last:border-0 lg:grid-cols-[280px_1fr]">
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
        <section id="ventures" className="section-pad border-b border-line bg-card-warm">
          <div className="container-x">
            <Reveal>
              <div className="mb-14">
                <p className="text-sm font-medium text-accent">03 — Ventures</p>
                <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight md:text-5xl">
                  Things I built from zero.
                </h2>
              </div>
            </Reveal>
            <div className="space-y-9">
              {VENTURES.map((v, i) => {
                const Icon = v.icon;
                return (
                  <Reveal key={v.company} delay={i * 0.06} dir="left">
                    <article className="group grid gap-5 border-b border-line pb-9 last:border-0 lg:grid-cols-[280px_1fr]">
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
        <section id="about" className="section-pad border-b border-line bg-bg">
          <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-start">
            <Reveal dir="right">
              <div>
                <p className="text-sm font-medium text-accent">04 — About</p>
                <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight md:text-5xl">
                  Visionary at the business × AI crossover.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-[15px] leading-relaxed text-mfg">
                {ABOUT_PARAGRAPHS.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section-pad border-b border-line bg-card-warm">
          <div className="container-x">
            <Reveal>
              <p className="text-sm font-medium text-accent">05 — Education & certifications</p>
              <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight md:text-5xl">Built to keep learning.</h2>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {EDUCATION.map((ed, i) => (
                <Reveal key={ed.degree} delay={i * 0.1}>
                  <div className="sheen h-full rounded-2xl border border-line bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
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
              <div className="mt-12">
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
        <section id="contact" className="relative overflow-hidden bg-bg">
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
          <div className="container-x flex flex-col items-start gap-9 py-24 md:py-28">
            <Reveal className="w-full">
              <div className="max-w-xl">
                <p className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                  <Gauge className="h-4 w-4" />
                  06 — Let&rsquo;s talk
                </p>
                <h2 className="mt-3 font-heading text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                  Let&rsquo;s talk business and AI.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-mfg">
                  Whether you want to scale a business, automate a service, or get a straight answer on where AI fits — send me a message and I&rsquo;ll take it from there.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${EMAIL}?subject=Let%27s%20build%20something`}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:scale-[1.04] hover:shadow-lift"
                >
                  <Mail className="h-4 w-4" /> {EMAIL}
                </a>
                <a
                  href="tel:+8801827888314"
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-6 py-3 text-sm font-semibold text-fg transition-all duration-300 hover:border-accent hover:text-fg"
                >
                  <Phone className="h-4 w-4" /> {PHONE}
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-4 text-sm text-mfg">
                <a href="https://linkedin.com/in/hossainanon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-fg">
                  <MessageCircle className="h-4 w-4" /> linkedin.com/in/hossainanon
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-line bg-bg">
        <div className="container-x flex flex-wrap items-center justify-between gap-3 py-10 text-sm text-mfg">
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