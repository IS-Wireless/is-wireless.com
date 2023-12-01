import WPAPI from "wpapi";

export default defineNuxtPlugin(async () => {

  const config = useRuntimeConfig()
  const site = new WPAPI({ endpoint: `${config.public.API_URL}${config.public.API_AFFIX}` })
  site.menus = site.registerRoute("wp-api-menus/v2", "/menus/(?P<id>\\d+)");
  site.menuLocations = site.registerRoute("wp-api-menus/v2", "/menu-locations/(?P<location>[a-zA-Z0-9_-]+)");
  site.acf = site.registerRoute("acf/v2", "/options/?(?P<field>[\\w\\-\\_]+)?");

  return {
    provide: {
      wp: site,
    },
  };
});
