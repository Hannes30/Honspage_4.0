import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: ".full.svelte-us73wk{height:80vh}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="w-screen h-full justify-center flex items-center full flex-wrap svelte-us73wk" data-svelte-h="svelte-fnwlmp"><h1 class="text-center text-primary-100 w-full">404 <br> <span class="font-normal">Seite nicht gefunden</span></h1> </div>`;
});
export {
  Error as default
};
