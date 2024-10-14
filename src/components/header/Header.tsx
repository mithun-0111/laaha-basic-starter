"use client"

import { useLocale } from "@/src/contexts/LocaleContext";

const Header = () => {
  const locale = useLocale();
  console.log(locale);
  return (
    <div>Header</div>
  )
}

export default Header;