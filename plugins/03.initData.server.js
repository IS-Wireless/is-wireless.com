import { defineNuxtPlugin } from "#app";
import { useGeneralStore } from "@/store/general";

export default defineNuxtPlugin(async (nuxtApp) => {
  const $wp = nuxtApp.$wp;
  const generalStore = useGeneralStore();

  await Promise.all([
    new Promise((resolve) => {
      $wp.menuLocations().then(function (data) {
        filterData(data);
        generalStore.init({ menu_locations: data });
        resolve();
      });
    }),
    new Promise((resolve) => {
      $wp.menus().then(function (data) {
        var promisesDynamicArray = [];
        data.forEach((single_menu) => {
          promisesDynamicArray.push(
            new Promise((resolve_child) => {
              $wp
                .menus()
                .id(`${single_menu.term_id}`)
                .get()
                .then(function (data) {
                  filterData(data);
                  if (data && typeof data !== "undefined") {
                    generalStore.menuInit({ menu: data });
                  }
                  resolve_child();
                });
            })
          );
        });
        Promise.allSettled(promisesDynamicArray).then(() => {
          resolve();
        });
      });
    }),
    new Promise((resolve) => {
      $wp.acf().then(function (data) {
        generalStore.init({ options: data });
        resolve();
      });
    }),
  ]);
});
