import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as Nav } from "../../../chunks/Nav.js";
import { B as Banner } from "../../../chunks/Banner.js";
const WebHostingImage = "/_app/immutable/assets/Web-Hosting.1aol8Ajh.jpg";
const WebDevImage = "/_app/immutable/assets/Web-Entwicklung.URy1txVx.jpg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1arp95s_START -->${$$result.title = `<title>Leistungen - Hannes Scheibelauer</title>`, ""}<!-- HEAD_svelte-1arp95s_END -->`, ""} ${validate_component(Nav, "Nav").$$render($$result, { active: "3" }, {}, {})} <div class="pt-20 flex justify-center flex-wrap"><h1 class="w-full text-center" data-svelte-h="svelte-l28g8j">Leistungen</h1> ${validate_component(Banner, "Banner").$$render(
    $$result,
    {
      image: WebDevImage,
      name: "Web Development",
      text: "ab 650€",
      route: "services"
    },
    {},
    {}
  )} ${validate_component(Banner, "Banner").$$render(
    $$result,
    {
      image: WebHostingImage,
      name: "Web Hosting",
      text: "10-40€ Monatlich",
      route: "services"
    },
    {},
    {}
  )}</div>`;
});
export {
  Page as default
};
