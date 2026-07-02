"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <button className="w-10 h-10 flex items-center justify-center" aria-label="Toggle theme" >
       <div className="w-5 h-5" /> 
    </button>
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="w-10 h-10 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
