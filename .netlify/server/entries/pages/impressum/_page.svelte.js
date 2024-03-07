import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as Nav } from "../../../chunks/Nav.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-8fcljh_START -->${$$result.title = `<title>Impressum - Hannes Scheibelauer</title>`, ""}<!-- HEAD_svelte-8fcljh_END -->`, ""} ${validate_component(Nav, "Nav").$$render($$result, { active: "3" }, {}, {})}`;
});
export {
  Page as default
};
