'use client'

import { useContext, useState, createContext, ReactNode } from "react"

interface LocaleContextType {
  locale: string;
  defaultLocale: string;
  setLocale: (locale: string) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<string>('en');
  const [defaultLocale, setDefaultLocale] = useState<string>('en');

  return (
    <LocaleContext.Provider value={{ locale, defaultLocale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};
