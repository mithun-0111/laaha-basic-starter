import { getMenuItems } from "@/src/lib/globalElements";
import { getLocale } from "next-intl/server";

export default async function Menu() {
  const locale = await getLocale();
  const mainMenu = await getMenuItems(locale);
  const {main} = mainMenu.menus;

  return (
    <nav>
      <ul>
        {main.map(item => (
          <li key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    </nav>
  );
}
