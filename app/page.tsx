import { ArrowUpRight, Sparkles, Mail, Globe, Phone, MessageCircle, Award, Rocket, Cpu, Handshake, ShoppingBag, Store, Compass, GraduationCap, Gauge, Target, PenLine } from "lucide-react";
import { Reveal, Counter, Marquee } from "@/components/motion";

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const STATS = [
  { value: 8, suffix: "×", label: "Revenue growth", sub: "Nakshee Decor · 6 months" },
  { value: 0.01, prefix: "$", decimals: 2, label: "Cost per click", sub: "Meta Ads A/B testing" },
  { value: 1, suffix: "Cr", label: "BDT run-rate", sub: "12L → 1Cr, one operation" },
  { value: 100, suffix: "+", label: "Calls / day", sub: "orders · trust · recovery" },
];

const SERVICES = [
  {
    icon: Compass,
    title: "Understand & scale business",
    desc: "I read the economics — unit economics, margin, funnel, position — then build the machine that grows it. Took a business from 12L to 1Cr BDT in six months.",
    tools: "Strategy · Unit economics · Operations · Pricing",
  },
  {
    icon: Cpu,
    title: "Automate with AI",
    desc: "I see where anything can be automated — content, ads, ops, support, reporting — and build command centers that run the day-to-day while you scale.",
    tools: "Agent workflows · Prompt engineering · Command centers",
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
    desc: "English + Bangla creative that reads human. Headlines engineered to stop the scroll and earn the click.",
    tools: "Copywriting · Content systems · Storytelling",
  },
  {
    icon: Rocket,
    title: "Launch & build ventures",
    desc: "From zero to operating businesses — e-commerce, import supply chains, a campus food venture, a live publication.",
    tools: "Sourcing · Logistics · Product · Positioning",
  },
  {
    icon: Handshake,
    title: "Consult on business + AI",
    desc: "You know your domain; I know how business and AI fit. I advise on where to invest, what to build, what to automate — and train your team on it.",
    tools: "Consulting · Advisory · Training · Roadmaps",
  },
];

const WORK = [
  {
    num: "01",
    company: "Maisa Construction",
    role: "Digital Growth Partner",
    result: "8× ROAS",
    tags: ["Meta Ads", "A/B Lab", "Campaign Creative"],
    points: [
      "Built CREATIVE-CAMPAIGN ads — aspirational two-tone headlines with a land-to-home visual motif, not spec sheets.",
      "Ran a continuous A/B lab on hooks and visuals, cutting cost per click to $0.01.",
      "Drove an 8× return on ad spend for the construction client.",
    ],
  },
  {
    num: "02",
    company: "Beans & Bakes",
    role: "Digital Growth Partner",
    result: "Growth systems",
    tags: ["Strategy", "Creative Testing", "Funnels"],
    points: [
      "Second brand in the growth practice — applying the same A/B-tested playbook to a food & bake label.",
      "Building owned ad systems, creative testing, and funnel optimization to scale local revenue.",
    ],
  },
  {
    num: "03",
    company: "M/s Nakshee Decor",
    role: "Manager · scaled marketer to manager in 1 month",
    result: "12L → 1Cr BDT",
    tags: ["Meta Ads", "Operations", "Unit Economics", "CRO"],
    points: [
      "Managed end-to-end operations — sales, marketing, production, delivery, customer service.",
      "Ran Meta Ads with A/B testing — achieved $0.01 CPC.",
      "Drove revenue 12L → 18L → 30L → 1 Crore BDT in 6 months.",
      "Personally handled 100+ calls/day: order confirmation, trust-building, difficult-customer recovery.",
      "Owned profit modeling, pricing, cost control, KPI reporting, and stakeholder communication.",
    ],
  },
];

const PROCESS = [
  { num: "01", title: "Discover", desc: "Understand goals, audience, unit economics, and what's actually blocking growth." },
  { num: "02", title: "Diagnose", desc: "Audit the funnel, creative, and operations. Find the highest-leverage lever to pull first." },
  { num: "03", title: "Design", desc: "Build the strategy, the A/B lab, and the automation workflow that executes it." },
  { num: "04", title: "Scale", desc: "Ship what works, cut the rest, and compound the wins across spend and operations." },
  { num: "05", title: "Systemize", desc: "Lock the wins into command centers and playbooks so growth is repeatable, not accidental." },
];

const VENTURES = [
  {
    company: "FoodBump",
    role: "Founder",
    range: "Oct 2023 – Sep 2024 · Campus Food",
    icon: ShoppingBag,
    points: ["Built and operated a campus food business while studying full-time.", "Ran customers, orders, and real-time dynamic pricing solo.", "Owner, marketer, and operator in one."],
  },
  {
    company: "Budget Bazaar",
    role: "Co-Founder",
    range: "Sep 2025 – Feb 2026 · E-Commerce · Import",
    icon: Store,
    points: ["End-to-end sourcing from China to Bangladesh — full supply chain.", "Logistics, delivery, order management across B2C and B2B.", "Vendor relationships and import-margin pricing strategy."],
  },
  {
    company: "Anon's Agent",
    role: "Founder · Content Creator",
    range: "Personal publication · ongoing",
    icon: Globe,
    points: ["A live AI-content publication with weekly curated, human-reviewed coverage.", "Shipped the full design system — site, article templates, editorial process."],
  },
];

const ABOUT_PARAGRAPHS = [
  "I'm Hossain Simum Anon — a visionary who understands business end to end and scales it with AI. I run a one-man digital growth agency that grows client businesses (Maisa Construction, Beans & Bakes), and I consult on business and AI because I enjoy sharing the knowledge.",
  "I've scaled a business from 12L to 1 Crore BDT in six months, founded and run three ventures, earned a published patent, and use AI daily to remove friction from everything I touch — building command centers that automate content, ads, ops, and reporting. My edge is the crossover: I see both how a business makes money and where AI can multiply that.",
  "I'm equally comfortable talking strategy with a founder and building the workflow that executes it. Foundations: B.Sc. in Information & Communication Engineering (DIU, 2026, CGPA 3.27), hands-on ownership across ventures, and a record of real numbers — not claims.",
];

const EDUCATION = [
  { degree: "B.Sc. Information & Communication Engineering", school: "Daffodil International University", year: "2026 · CGPA 3.27" },
  { degree: "Higher Secondary Certificate (HSC)", school: "Daffodil International College", year: "2020 · GPA 4.42" },
  { degree: "Secondary School Certificate (SSC)", school: "Model Academy", year: "2018 · GPA 4.44" },
];

const SKILLS = ["Meta Ads", "A/B Testing", "Copywriting", "Canva", "Unit Economics", "AI Automation", "Funnels & CRO", "Sourcing & Ops", "Bangla + English", "Data-Driven Growth"];

const CERTS = [
  "Social Media Marketing — Passive Journal (2022)",
  "Software Development Life Cycle (SDLC) — Riseup Labs (2025)",
  "Patent: Smart Locker Suitable for Public Places — BT (Published 2025)",
];

const EMAIL = "hossainsimumanon@gmail.com";
const PHONE = "01827-888314";

export default function Portfolio() {
  return (
    <div className="scene-glow min-h-dvh bg-bg font-body text-fg">
      <div className="grain" aria-hidden="true" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
        <div className="container-x flex h-16 items-center justify-between">
          <a href="#" className="font-heading text-base font-bold tracking-tight text-fg">
            Hossain Simum Anon<span className="text-accent">®</span>
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
            className="hidden items-center gap-1.5 rounded-full border border-accent/60 px-4 py-2 text-sm font-semibold text-fg transition-colors hover:bg-accent hover:text-white sm:inline-flex"
          >
            Get in touch
          </a>
          <a href="#contact" className="text-sm font-medium text-fg md:hidden" aria-label="Contact">
            Contact
          </a>
        </div>
      </header>

      <main>
        {/* HERO — monumental typography */}
        <section className="border-b border-line bg-grid">
          <div className="container-x pt-24 pb-22 md:pt-32 md:pb-26">
            <Reveal>
              <p className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-mfg">
                <Sparkles className="h-4 w-4 text-accent" />
                Hossain Simum Anon — Digital Growth Partner · Dhaka, Bangladesh
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading text-[4.5rem] font-bold leading-[.96] tracking-[-.02em] text-fg sm:text-[6.5rem] md:text-[8rem]">
                SCALE
                <span className="text-accent">.</span>
                <br />
                WITH&nbsp;AI
              </h1>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mfg md:text-xl">
                I understand business end to end — the numbers, the funnel, the operations — and I
                scale it with AI. Founder, growth partner, engineer, and consultant.{" "}
                <span className="text-fg">Let me tell you how business and AI fit together.</span>
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${EMAIL}?subject=Let%27s%20build%20something`}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:scale-[1.03] hover:shadow-lift"
                >
                  Let&rsquo;s talk <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent"
                >
                  See the work
                </a>
              </div>
            </Reveal>

            {/* Stats row — accent numerals */}
            <Reveal delay={0.2} dir="none">
              <div className="mt-14 grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
                {STATS.map((m) => (
                  <div key={m.label} className="bg-card p-6">
                    <p className="tabular font-heading text-4xl font-bold tracking-tight text-accent md:text-5xl">
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

        {/* Marquee strip */}
        <div className="border-y border-line bg-card py-4">
          <Marquee
            items={["Meta Ads", "A/B Testing", "AI Automation", "Unit Economics", "Copywriting", "Funnels", "Command Centers", "Bangla + English", "Growth Systems"]}
            className="font-heading text-sm font-semibold uppercase tracking-widest text-accent"
          />
        </div>

        {/* FEATURED WORK */}
        <section id="work" className="section-pad border-b border-line bg-bg">
          <div className="container-x">
            <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <Reveal>
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-mfg">Featured work</p>
                  <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight md:text-6xl">
                    Work that moved
                    <span className="text-accent"> real numbers.</span>
                  </h2>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="max-w-sm text-sm leading-relaxed text-mfg">
                  Three engagements, each measured in outcomes — not activity. This is what I do as a digital growth partner.
                </p>
              </Reveal>
            </div>
            <div className="space-y-6">
              {WORK.map((w, i) => (
                <Reveal key={w.company} delay={i * 0.05} dir="left">
                  <article className="group grid gap-6 overflow-hidden rounded-2xl border border-line bg-card p-8 shadow-card transition-all duration-300 hover:border-accent/50 hover:shadow-lift md:grid-cols-[1.1fr_1fr]">
                    <div>
                      <p className="font-heading text-5xl font-black tracking-tight text-accent">{w.num}</p>
                      <h3 className="mt-2 font-heading text-2xl font-bold text-fg">{w.company}</h3>
                      <p className="mt-1 text-sm font-medium text-mfg">{w.role}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {w.tags.map((t) => (
                          <span key={t} className="rounded-full border border-line bg-muted px-2.5 py-0.5 text-xs text-mfg">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="tabular font-heading text-3xl font-bold text-accent">{w.result}</p>
                      <ul className="mt-4 space-y-2.5">
                        {w.points.map((p) => (
                          <li key={p} className="flex gap-3 text-[15px] leading-relaxed text-mfg">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section-pad border-b border-line bg-card-warm">
          <div className="container-x">
            <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <Reveal>
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-mfg">Services</p>
                  <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight md:text-6xl">
                    What I can
                    <span className="text-accent"> help you with.</span>
                  </h2>
                </div>
              </Reveal>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s, i) => {
                const Icon = s.icon;
                const featured = s.feature || false;
                return (
                  <Reveal key={s.title} delay={i * 0.05}>
                    <div
                      className={`group sheen flex h-full flex-col rounded-2xl border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift ${featured ? "border-accent/50 bg-gradient-to-br from-card to-card-warm" : "border-line"}`}
                    >
                      <div
                        className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${featured ? "bg-accent text-white" : "bg-accent-soft text-accent"}`}
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

        {/* PROCESS */}
        <section id="process" className="section-pad border-b border-line bg-bg">
          <div className="container-x">
            <Reveal>
              <div className="mb-14">
                <p className="text-xs font-medium uppercase tracking-widest text-mfg">Process</p>
                <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight md:text-6xl">
                  How I approach
                  <span className="text-accent"> every project.</span>
                </h2>
              </div>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {PROCESS.map((p, i) => (
                <Reveal key={p.num} delay={i * 0.06}>
                  <div className="sheen flex h-full flex-col rounded-2xl border border-line bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-lift">
                    <p className="font-heading text-4xl font-black tracking-tight text-accent">{p.num}</p>
                    <h3 className="mt-3 font-heading text-lg font-semibold text-fg">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mfg">{p.desc}</p>
                  </div>
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
                <p className="text-xs font-medium uppercase tracking-widest text-mfg">Ventures</p>
                <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight md:text-6xl">
                  Things I
                  <span className="text-accent"> built from zero.</span>
                </h2>
              </div>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-3">
              {VENTURES.map((v, i) => {
                const Icon = v.icon;
                return (
                  <Reveal key={v.company} delay={i * 0.06}>
                    <article className="sheen flex h-full flex-col rounded-2xl border border-line bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-lift">
                      <div className="flex items-center gap-2 text-accent">
                        <Icon className="h-5 w-5" />
                        <span className="font-heading text-lg font-semibold text-fg">{v.company}</span>
                      </div>
                      <p className="mt-1 text-sm font-medium text-fg">{v.role}</p>
                      <p className="mt-1 text-xs text-mfg">{v.range}</p>
                      <ul className="mt-4 space-y-2.5">
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

        {/* ABOUT */}
        <section id="about" className="section-pad border-b border-line bg-bg">
          <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-start">
            <Reveal dir="right">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-mfg">About</p>
                <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight md:text-6xl">
                  Visionary at the
                  <span className="text-accent"> business × AI</span>
                  crossover.
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

        {/* EDUCATION + SKILLS */}
        <section id="education" className="section-pad border-b border-line bg-card-warm">
          <div className="container-x">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-widest text-mfg">Education &amp; skills</p>
              <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight md:text-6xl">Built to keep learning.</h2>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {EDUCATION.map((ed, i) => (
                <Reveal key={ed.degree} delay={i * 0.1}>
                  <div className="h-full rounded-2xl border border-line bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
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
            {/* Skills chips */}
            <Reveal delay={0.15}>
              <div className="mt-12">
                <div className="mb-4 flex items-center gap-2 text-accent">
                  <Award className="h-4 w-4" />
                  <span className="font-heading text-base font-semibold text-fg">Skills</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {SKILLS.map((s) => (
                    <span key={s} className="rounded-full border border-line bg-card px-3.5 py-1.5 text-sm text-fg transition-colors hover:border-accent/60">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10">
                <div className="mb-4 flex items-center gap-2 text-accent">
                  <Award className="h-4 w-4" />
                  <span className="font-heading text-base font-semibold text-fg">Certifications &amp; highlights</span>
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

        {/* CTA banner */}
        <section id="contact" className="relative overflow-hidden border-y border-accent/30 bg-bg">
          <div className="container-x py-24 text-center md:py-28">
            <Reveal>
              <div className="mx-auto max-w-3xl">
                <p className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  <Gauge className="h-4 w-4" />
                  Get in touch
                </p>
                <h2 className="font-heading text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                  Let&rsquo;s build{" "}
                  <span className="relative inline-block whitespace-nowrap">
                    something
                    <span className="hl-shimmer" aria-hidden="true" />
                  </span>
                  <br /> that moves numbers<span className="text-accent">.</span>
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mfg">
                  Scale a business, automate a service, or get a straight answer on where AI fits your operation. Send a message — I&rsquo;ll take it from there.
                </p>
                <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`mailto:${EMAIL}?subject=Let%27s%20build%20something`}
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:scale-[1.04] hover:shadow-lift"
                  >
                    <Mail className="h-4 w-4" /> {EMAIL}
                  </a>
                  <a
                    href="tel:+8801827888314"
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-6 py-3.5 text-sm font-semibold text-fg transition-all duration-300 hover:border-accent"
                  >
                    <Phone className="h-4 w-4" /> {PHONE}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-line bg-bg">
        <div className="container-x flex flex-wrap items-center justify-between gap-3 py-10 text-sm text-mfg">
          <span>&copy; {new Date().getFullYear()} Hossain Simum Anon · Business × AI</span>
          <a href="https://linkedin.com/in/hossainanon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-fg">
            <MessageCircle className="h-4 w-4" /> linkedin.com/in/hossainanon
          </a>
        </div>
      </footer>
    </div>
  );
}