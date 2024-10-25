import siteConfig from "@/site.config";
import { getParams } from "./getparams";
import { drupal } from "./drupal";

const fetchMenuItems = async (menuType: string, locale: string) => {
  const defaultLocale = siteConfig.defaultLocale;

  const menuOpts = {
    params: getParams("menu_link_content--menu_link_content"),
    locale: locale,
    defaultLocale: defaultLocale,
  };

  try {
    const menuItems = await drupal.getMenu(menuType, menuOpts);
    return menuItems.items;
  } catch (error) {
    console.error(`Error fetching menu items: ${error}`);
    return [];
  }
};

export const getMenuItems = async (locale: string) => {
  const mainMenu = await fetchMenuItems("main", locale);

  return {
    menus: {
      main: mainMenu,
    },
  };
};

