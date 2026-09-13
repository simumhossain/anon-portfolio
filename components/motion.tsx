"use client";

import { motion, useInView, useReducedMotion, animate, useMotionValue } from "motion/react";
import { useRef, useEffect, useState, type ReactNode } from "react";

type Dir = "up" | "left" | "right" | "none";

/** Scroll-reveal wrapper. Fades + slides content in when it enters the viewport. */
export function Reveal({
  children,
  delay = 0,
  dir = "up",
  className,
}: {
  children: ReactNode;
  delay?: number;
  dir?: Dir;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  const offset =
    dir === "left" ? { x: -32 } : dir === "right" ? { x: 32 } : dir === "up" ? { y: 28 } : {};

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, ...offset }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Animated counter that counts up to `value` once visible. */
export function Counter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const display = useMotionValue(0);

  useEffect(() => {
    if (!inView || reduce) {
      display.set(value);
      return;
    }
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => display.set(v),
    });
    return () => controls.stop();
  }, [inView, value, reduce, display]);

  const [whole, setWhole] = useState("0");
  useEffect(() => {
    return display.on("change", (v) =>
      setWhole(v.toFixed(decimals))
    );
  }, [display, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {reduce ? value.toFixed(decimals) : whole}
      {suffix}
    </span>
  );
}

/** Infinite horizontal ticker — a kinetic "operator strip" of repeated labels. */
export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const reduce = useReducedMotion();
  const row = items.join("  ·  ") + "  ·  ";
  const n = reduce ? 1 : 3;
  return (
    <div className={"marquee overflow-hidden " + (className ?? "")} aria-hidden="true">
      {Array.from({ length: n }, (_, i) => (
        <div key={i} className="marquee-track" style={{ animationDuration: `${Math.max(18, row.length * 0.09)}s` }}>
          <span>{row}</span>
        </div>
      ))}
    </div>
  );
}