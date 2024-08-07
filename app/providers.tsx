"use client";

import { ThemeProvider } from "next-themes";
import { createContext, useState } from "react";

export const TerminalContext = createContext({
  isOpen: false,
  toggleIsOpen: () => {},
});

export default function Providers({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((value) => !value);
  };
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={false}
      disableTransitionOnChange
    >
      <TerminalContext.Provider value={{ isOpen, toggleIsOpen }}>
        {children}
      </TerminalContext.Provider>
    </ThemeProvider>
  );
}
