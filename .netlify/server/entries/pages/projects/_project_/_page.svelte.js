import { c as create_ssr_component, e as escape, v as validate_component, b as each, a as add_attribute } from "../../../../chunks/ssr.js";
import { N as Nav } from "../../../../chunks/Nav.js";
import { W as Waves } from "../../../../chunks/Waves.js";
const ProjectTag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<div class="px-4 py-1 rounded-md text-xl font-mono bg-primary-300 text-secondary m-1">${escape(text)}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-11v4bxv_START -->${$$result.title = `<title>${escape(data.name)} - Hannes Scheibelauer</title>`, ""}<!-- HEAD_svelte-11v4bxv_END -->`, ""} ${validate_component(Nav, "Nav").$$render($$result, { active: "2" }, {}, {})} <div class="pt-16 relative"><h1 class="w-full text-center">${escape(data.name)}</h1> <div class="flex justify-around lg:flex-nowrap w-full flex-wrap"><div class="w-full flex justify-center ">${each(data.tags, (tag) => {
    return `${validate_component(ProjectTag, "ProjectTag").$$render($$result, { text: tag }, {}, {})}`;
  })}</div></div> <div class="lg:p-16 p-10"><h2 data-svelte-h="svelte-374zck">Die Herausforderung</h2> <span class="lg:text-2xl lg:mt-16 text-lg">${escape(data.startText)}</span></div> <div class="w-full mt-5 ">${validate_component(Waves, "Waves").$$render(
    $$result,
    {
      headingText: "Die",
      headingTextHighlighted: "Lösung"
    },
    {},
    {
      default: () => {
        return `${escape(data.problemText)}`;
      }
    }
  )}</div> <div class="p-10 lg:p-16 "><h2 class="w-full" data-svelte-h="svelte-kc2d02">Umsetzung</h2> <span class="lg:text-2xl lg:mt-16 text-lg">${escape(data.solvingText)}</span></div> <div class="bg-secondary w-full h-20 lg:rotate-2 rotate-6 relative top-10"></div>  <div class="bg-secondary -mb-20 pb-10 flex justify-center flex-wrap"><div class="lg:p-16 p-10"><h2 class="w-full " data-svelte-h="svelte-18k3s61">Ergebnis</h2> <span class="lg:text-2xl lg:mt-16 text-lg ">${escape(data.resultText)}</span></div> <a${add_attribute("href", data.link, 0)} class="text-3xl text-primary-400 underline hover:animate-pulse w-full text-center m-5 font-semibold">${escape(data.name)}</a></div></div> <div data-svelte-h="svelte-9srwoc"></div>`;
});
export {
  Page as default
};
