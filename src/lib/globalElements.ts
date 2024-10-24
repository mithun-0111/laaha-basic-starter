import siteConfig from "@/site.config";
import { getParams } from "./getparams";
import { drupal } from "./drupal";
import { searchIcon } from "./icons";

const fetchMenuItems = async (menuType: string, locale: string) => {
  const defaultLocale = siteConfig.defaultLocale;

  const menuOpts = {
    params: getParams("menu_link_content--menu_link_content"),
    locale: locale,
    defaultLocale: defaultLocale,
  };
  const menuItems = await drupal.getMenu(menuType, menuOpts);
  return menuItems.items;
};

export const getMenuItems = async (locale: string) => {
  const mainMenu = await fetchMenuItems("main", locale);

  return {
    menus: {
      main: mainMenu,
    },
  };
};
