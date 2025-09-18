"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

type ColorScheme = "brutalist" | "minimal";

const ColorSchemeToggle = () => {
  const [scheme, setScheme] = useState<ColorScheme>("brutalist");
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
    // Load saved scheme from localStorage
    const saved = localStorage.getItem("colorScheme") as ColorScheme;
    if (saved) {
      setScheme(saved);
      applyColorScheme(saved);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      // Reapply color scheme when theme changes
      applyColorScheme(scheme);
    }
  }, [theme, scheme, mounted]);

  const applyColorScheme = (newScheme: ColorScheme) => {
    const root = document.documentElement;
    const isDark = theme === "dark";

    if (newScheme === "minimal") {
      // Minimal color scheme - black, blue, and neutrals
      if (isDark) {
        root.style.setProperty("--primary", "220 100% 60%");
        root.style.setProperty("--secondary", "0 0% 80%");
        root.style.setProperty("--accent", "0 0% 100%");
        root.style.setProperty("--brutal-yellow", "210 100% 60%"); // Light blue for buttons
        root.style.setProperty("--brutal-green", "0 0% 50%");
        root.style.setProperty("--brutal-purple", "220 100% 70%");
      } else {
        root.style.setProperty("--primary", "220 100% 50%"); // Blue
        root.style.setProperty("--secondary", "0 0% 20%"); // Dark gray
        root.style.setProperty("--accent", "0 0% 0%"); // Black
        root.style.setProperty("--brutal-yellow", "210 100% 50%"); // Sky blue for buttons
        root.style.setProperty("--brutal-green", "0 0% 50%"); // Medium gray
        root.style.setProperty("--brutal-purple", "220 100% 40%"); // Darker blue
      }
    } else {
      // Brutalist color scheme - vibrant colors
      if (isDark) {
        root.style.setProperty("--primary", "350 100% 60%");
        root.style.setProperty("--secondary", "220 100% 60%");
        root.style.setProperty("--accent", "45 100% 60%");
        root.style.setProperty("--brutal-yellow", "60 100% 60%");
        root.style.setProperty("--brutal-green", "120 100% 50%");
        root.style.setProperty("--brutal-purple", "280 100% 60%");
      } else {
        root.style.setProperty("--primary", "350 100% 50%"); // Hot pink
        root.style.setProperty("--secondary", "220 100% 50%"); // Electric blue
        root.style.setProperty("--accent", "45 100% 50%"); // Orange
        root.style.setProperty("--brutal-yellow", "60 100% 50%"); // Yellow
        root.style.setProperty("--brutal-green", "120 100% 40%"); // Green
        root.style.setProperty("--brutal-purple", "280 100% 50%"); // Purple
      }
    }
  };

  const toggleScheme = () => {
    const newScheme = scheme === "brutalist" ? "minimal" : "brutalist";
    setScheme(newScheme);
    localStorage.setItem("colorScheme", newScheme);
    applyColorScheme(newScheme);
  };

  if (!mounted) {
    return (
      <button className="brutal-border brutal-box-shadow bg-background px-4 py-2 font-mono text-xs uppercase tracking-wider opacity-50">
        LOADING...
      </button>
    );
  }

  return (
    <button
      onClick={toggleScheme}
      className="brutal-border brutal-box-shadow bg-background px-4 py-2 font-mono text-xs uppercase tracking-wider hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
      aria-label="Toggle color scheme"
    >
      {scheme === "brutalist" ? "🎨 BRUTALIST" : "⚡ MINIMAL"}
    </button>
  );
};

export default ColorSchemeToggle;