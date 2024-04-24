"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);

  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      className="flex gap-2 items-center text-lg font-semibold"
      onClick={toggleTheme}
    >
      {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
}
