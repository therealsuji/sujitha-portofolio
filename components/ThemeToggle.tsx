"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="w-12 h-12 brutal-border brutal-box-shadow-sm bg-muted">
        <span className="font-mono text-xs">...</span>
      </button>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-12 h-12 brutal-border brutal-box-shadow-sm bg-background hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center group"
      aria-label="Toggle theme"
    >
      <span className="font-mono text-xs font-bold">
        {theme === "dark" ? "LT" : "DK"}
      </span>
    </button>
  );
}