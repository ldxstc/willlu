"use client";

import { useEffect, useRef } from "react";

export default function RevealSection({
  children,
  className = "",
  as: Tag = "section",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div";
  id?: string;
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`} id={id}>
      {children}
    </Tag>
  );
}
