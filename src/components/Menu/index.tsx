import { getMenuItems } from "@/src/lib/globalElements";
import { getLocale } from "next-intl/server";
import Link from "next/link";

export default async function Menu() {
  const locale = await getLocale();
  const mainMenu = await getMenuItems(locale);
  const { main } = mainMenu.menus;

  return (
    <nav className="hidden lg:block pt-10 lg:pt-0">
      <ul className="block lg:flex flex-wrap">
        {main && main.map(item => (
          <li key={item.id} className="me-0 lg:me-10 mb-2 lg:mb-0">
            <Link href={item.url}> {item.title} </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
