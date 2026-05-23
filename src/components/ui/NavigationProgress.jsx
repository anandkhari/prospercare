"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function NavigationProgress() {
  const pathname = usePathname();
  const [width, setWidth]     = useState(0);
  const [opacity, setOpacity] = useState(0);
  const prevPath   = useRef(pathname);
  const ticker     = useRef(null);
  const hideTimer  = useRef(null);

  const start = () => {
    clearInterval(ticker.current);
    clearTimeout(hideTimer.current);
    setOpacity(1);
    setWidth(0);

    let w = 0;
    ticker.current = setInterval(() => {
      w = Math.min(w + Math.random() * 12 + 3, 85);
      setWidth(w);
      if (w >= 85) clearInterval(ticker.current);
    }, 200);
  };

  const finish = () => {
    clearInterval(ticker.current);
    setWidth(100);
    hideTimer.current = setTimeout(() => {
      setOpacity(0);
      setTimeout(() => setWidth(0), 300);
    }, 350);
  };

  /* Detect link clicks to start the bar */
  useEffect(() => {
    const onLinkClick = (e) => {
      const a = e.target.closest("a[href]");
      if (!a) return;
      const href = a.getAttribute("href");
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("http")
      ) return;
      if (href === window.location.pathname) return;
      start();
    };

    document.addEventListener("click", onLinkClick);
    return () => document.removeEventListener("click", onLinkClick);
  }, []);

  /* Detect pathname change to finish the bar */
  useEffect(() => {
    if (pathname !== prevPath.current) {
      finish();
      prevPath.current = pathname;
    }
  }, [pathname]);

  useEffect(() => () => {
    clearInterval(ticker.current);
    clearTimeout(hideTimer.current);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[9999] h-[3px] pointer-events-none"
      style={{
        width:      `${width}%`,
        opacity,
        background: "#14B8A6",
        boxShadow:  "0 0 10px rgba(20,184,166,0.7)",
        transition:
          width === 100
            ? "width 0.25s ease, opacity 0.3s ease 0.35s"
            : "width 0.2s ease",
      }}
    />
  );
}
