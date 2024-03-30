import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaRegMoon } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";

const ThemeSwitcher = () => {
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
      {isDark ? <CiLight size={20} /> : <FaRegMoon size={20} />}
      <p>{isDark ? "Light Mode" : "Dark Mode"}</p>
    </button>
  );
};

export default ThemeSwitcher;
