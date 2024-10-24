import { getMenuItems } from "@/src/lib/globalElements";
import { getLocale } from "next-intl/server";
import Link from "next/link";

export default async function Menu() {
  const locale = await getLocale();
  const mainMenu = await getMenuItems(locale);
  const { main } = mainMenu.menus;

  return (
    <nav>
      <ul className="flex flex-wrap">
        {main.map(item => (
          <li key={item.id} className="me-10">
            <Link href={item.url}> {item.title} </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
