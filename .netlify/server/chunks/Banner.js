import { c as create_ssr_component, a as add_attribute, e as escape } from "./ssr.js";
const css = {
  code: ".wrapper.svelte-sv49hl{max-height:80vh}",
  map: null
};
const Banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { image } = $$props;
  let { text } = $$props;
  let { route } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.route === void 0 && $$bindings.route && route !== void 0)
    $$bindings.route(route);
  $$result.css.add(css);
  return `<div class="justify-center flex"><a class="m-10 wrapper flex justify-center w-3/4 svelte-sv49hl"${add_attribute("href", route + "/" + name.replace(/\s/g, ""), 0)}><div class="relative group overflow-hidden"><img${add_attribute("src", image, 0)}${add_attribute("alt", "Banner Image of " + name, 0)} class="h-full rounded-md"> <div class="absolute -bottom-30 rounded-md bg-gray-800 bg-opacity-50 p-5 left-5 group-hover:transform lg:group-hover:-translate-y-32 group-hover:-translate-y-28 transition duration-500"><h2 class="lg:text-3xl text-xl">${escape(name)}</h2> <p class="text-gray-200 font-light text-lg lg:text-xl">${escape(text)}</p></div></div></a> </div>`;
});
export {
  Banner as B
};
