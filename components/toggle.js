/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Toggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();
  console.log(theme);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <h1>Toggle</h1>
      <div>
        <button>Turn On</button>
      </div>
    </>
  );
}
