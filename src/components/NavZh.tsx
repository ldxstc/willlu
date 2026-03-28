"use client";

import { useEffect, useRef, useState } from "react";

export default function NavZh() {
  const navRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let lastY = 0;
    const handler = () => {
      const y = window.scrollY;
      if (navRef.current) {
        navRef.current.style.transform =
          y > lastY && y > 60 ? "translateY(-100%)" : "";
      }
      lastY = y;

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (y / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />
      <nav ref={navRef}>
        <div className="nav-name">陆东旭</div>
        <div className="nav-right">
          <a href="#path" className="nav-link" onClick={(e) => handleClick(e, "#path")}>经历</a>
          <a href="#writing" className="nav-link" onClick={(e) => handleClick(e, "#writing")}>文章</a>
          <a href="#now" className="nav-link" onClick={(e) => handleClick(e, "#now")}>构建</a>
          <span className="nav-lang-separator">|</span>
          <a href="/" className="nav-link nav-lang">EN</a>
        </div>
      </nav>
    </>
  );
}
