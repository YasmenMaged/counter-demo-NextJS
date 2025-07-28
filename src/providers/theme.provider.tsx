"use client";

import { useThemeStore } from "./theme.store";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className={theme} data-theme={theme}>
      {children}
    </div>
  );
}
