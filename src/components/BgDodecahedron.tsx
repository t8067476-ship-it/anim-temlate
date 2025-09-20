"use client";

import { useEffect, useRef } from "react";
import styles from "./BgDodecahedron.module.css";

function Dodecahedron() {
  return (
    <div className={styles.dodecahedron}>
      {Array.from({ length: 12 }).map((_, i) => (
        <div className={styles.pentagon} key={i}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ))}
    </div>
  );
}

export default function BgDodecahedron() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const scaleClass = styles.scale;
    const scaleEls = Array.from(root.querySelectorAll<HTMLElement>(`.${scaleClass}`));

    const getVar = (el: HTMLElement, name: string, fallback: number) => {
      const v = getComputedStyle(el).getPropertyValue(name).trim();
      const n = Number(v);
      return Number.isFinite(n) ? n : fallback;
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const vh = window.innerHeight || 1;
        for (const el of scaleEls) {
          const rect = el.getBoundingClientRect();
          const start = vh;
          const end = -rect.height;
          const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end)));
          const from = getVar(el, "--from", 1);
          const to = getVar(el, "--to", 1);
          const current = from + (to - from) * progress;
          const factor = window.innerWidth <= 1024 ? 0.88 : 1;
          el.style.transform = `scale(${current * factor})`;
        }
        ticking = false;
      });
    };

    const onResize = () => onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div ref={rootRef} className={`${styles.banner} ${styles.darkBg}`}>
      <div className={styles.invertFix}>
        <div className={styles.animationFrame}>
          <div className={`${styles.animation} ${styles.position1} ${styles.scale}`} style={{ ["--from" as any]: 7, ["--to" as any]: 1.6 }}>
            <Dodecahedron />
          </div>
          <div className={`${styles.animation} ${styles.position2} ${styles.scale}`} style={{ ["--from" as any]: 4, ["--to" as any]: 1 }}>
            <Dodecahedron />
          </div>
          <div className={`${styles.animation} ${styles.position3} ${styles.scale}`} style={{ ["--from" as any]: 1.2, ["--to" as any]: 0.1 }}>
            <Dodecahedron />
          </div>
        </div>
      </div>
    </div>
  );
}
