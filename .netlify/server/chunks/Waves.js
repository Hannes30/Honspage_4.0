import { c as create_ssr_component, e as escape, n as null_to_empty } from "./ssr.js";
/* empty css                                    */
const waves = "/_app/immutable/assets/waves.VACJ5pyW.png";
const css = {
  code: ".waves.svelte-b2k53o{background-size:400% 100%;background-position:70%}@media only screen and (min-width: 1024px){.waves.svelte-b2k53o{background-size:200% 100%}}",
  map: null
};
const Waves = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { headingText } = $$props;
  let { headingTextHighlighted } = $$props;
  if ($$props.headingText === void 0 && $$bindings.headingText && headingText !== void 0)
    $$bindings.headingText(headingText);
  if ($$props.headingTextHighlighted === void 0 && $$bindings.headingTextHighlighted && headingTextHighlighted !== void 0)
    $$bindings.headingTextHighlighted(headingTextHighlighted);
  $$result.css.add(css);
  return `<div class="${escape(null_to_empty("waves text-secondary"), true) + " svelte-b2k53o"}" style="${"background-image: url('" + escape(waves, true) + "');"}"><article class="lg:p-28 lg:pl-16 lg:pb-40 pb-40 p-10"><h2 class="mt-44 lg:mt-0">${escape(headingText)} <span class="font-bold lg:text-5xl text-secondary">${escape(headingTextHighlighted)}</span></h2> <div class="lg:text-2xl text-lg lg:mt-8 mt-4">${slots.default ? slots.default({}) : ``}</div></article> </div>`;
});
export {
  Waves as W
};
