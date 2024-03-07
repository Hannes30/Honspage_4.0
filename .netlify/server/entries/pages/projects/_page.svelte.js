import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as Nav } from "../../../chunks/Nav.js";
import { B as Banner } from "../../../chunks/Banner.js";
const HofcafeImage = "/_app/immutable/assets/Hofcafe_Collage.R47QJMGY.jpg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-161wzcc_START -->${$$result.title = `<title>Projekte - Hannes Scheibelauer</title>`, ""}<!-- HEAD_svelte-161wzcc_END -->`, ""} ${validate_component(Nav, "Nav").$$render($$result, { active: "2" }, {}, {})} <div class="pt-20 flex justify-center flex-wrap"><h1 class="w-full text-center" data-svelte-h="svelte-91nmbz">Projekte</h1> ${validate_component(Banner, "Banner").$$render(
    $$result,
    {
      image: HofcafeImage,
      name: "Hofcafe Wolfpassing",
      text: "August 2023 - Januar 2024",
      route: "projects"
    },
    {},
    {}
  )}</div>`;
});
export {
  Page as default
};
