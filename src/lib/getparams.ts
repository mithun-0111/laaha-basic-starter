import { DrupalJsonApiParams } from "drupal-jsonapi-params"

export function getParams(resourceType: string) {
  const apiParams = new DrupalJsonApiParams();

  if (resourceType === "menu_link_content--menu_link_content") {
    return apiParams.addFields("menu_link_content--menu_link_content", [
      "title,url,route,attributes",
    ])
  }

  return apiParams.getQueryObject()
}
