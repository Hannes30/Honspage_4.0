import { c as create_ssr_component, d as compute_rest_props, g as getContext, f as spread, h as escape_object, i as escape_attribute_value, a as add_attribute, v as validate_component, j as subscribe, e as escape, n as null_to_empty } from "./ssr.js";
import { twMerge } from "tailwind-merge";
import { w as writable } from "./index.js";
const EnvelopeSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "envelope solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}><path fill="currentColor" d="M2 5.6V18c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V5.6l-.9.7-7.9 6a2 2 0 0 1-2.4 0l-8-6-.8-.7Z"></path><path fill="currentColor" d="M20.7 4.1A2 2 0 0 0 20 4H4a2 2 0 0 0-.6.1l.7.6 7.9 6 7.9-6 .8-.6Z"></path></svg> `;
});
const GithubSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "github solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}><path fill="currentColor" fill-rule="evenodd" d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z" clip-rule="evenodd"></path></svg> `;
});
const LinkedinSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "linkedin solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}><path fill="currentColor" fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd"></path><path fill="currentColor" d="M7.2 8.8H4v10.7h3.2V8.8Z"></path></svg> `;
});
const PhoneOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "strokeLinecap", "strokeLinejoin", "strokeWidth", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { strokeLinecap = ctx.strokeLinecap || "round" } = $$props;
  let { strokeLinejoin = ctx.strokeLinejoin || "round" } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { ariaLabel = "phone outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.strokeLinecap === void 0 && $$bindings.strokeLinecap && strokeLinecap !== void 0)
    $$bindings.strokeLinecap(strokeLinecap);
  if ($$props.strokeLinejoin === void 0 && $$bindings.strokeLinejoin && strokeLinejoin !== void 0)
    $$bindings.strokeLinejoin(strokeLinejoin);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 24 24" }
    ],
    {}
  )}><path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="m18.4 14.8-1.2-1.3a1.7 1.7 0 0 0-2.4 0l-.7.7a1.7 1.7 0 0 1-2.4 0l-1.9-1.9a1.7 1.7 0 0 1 0-2.4l.7-.6a1.7 1.7 0 0 0 0-2.5L9.2 5.6a1.6 1.6 0 0 0-2.4 0c-3.2 3.2-1.7 6.9 1.5 10 3.2 3.3 7 4.8 10.1 1.6a1.6 1.6 0 0 0 0-2.4Z"></path></svg> `;
});
const ContactForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { closeContactModal } = $$props;
  if ($$props.closeContactModal === void 0 && $$bindings.closeContactModal && closeContactModal !== void 0)
    $$bindings.closeContactModal(closeContactModal);
  return `<div class="flex justify-center inset-0 items-center z-50 fixed w-full h-full bg-black bg-opacity-70"><div class="w-max relative bg-secondary border border-white rounded-md p-10"><h1 class="text-5xl pb-3" data-svelte-h="svelte-1hb29xy">Kontaktiere mich</h1> <p class="inline">${validate_component(PhoneOutline, "PhoneOutline").$$render($$result, { class: "h-8 w-8 text-primary-400 inline" }, {}, {})} 0670 2018717</p> <p><a href="mailto:Kontakt@hannes-scheibelauer.at">${validate_component(EnvelopeSolid, "EnvelopeSolid").$$render($$result, { class: "h-8 w-8 inline text-primary-400" }, {}, {})} Kontakt@hannes-scheibelauer.at</a></p> <p><a href="mailto:Kontak@hannes-scheibelauer.at">${validate_component(GithubSolid, "GithubSolid").$$render($$result, { class: "h-8 w-8 inline text-primary-400" }, {}, {})}   Hannes30</a></p> <p><a href=" https://www.linkedin.com/in/hannes-scheibelauer-65b9a8238/">${validate_component(LinkedinSolid, "LinkedinSolid").$$render($$result, { class: "h-8 w-8 inline text-primary-400" }, {}, {})} Hannes Scheibelauer</a></p> <button class="absolute top-2 right-3 text-4xl text-primary-400" data-svelte-h="svelte-1yrq5mk">X</button></div></div>`;
});
const NavComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { active } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  return `<a${add_attribute("class", "px-4 py-1 mr-2  hover:text-secondary hover:bg-primary-200 rounded-md duration-500 font-medium" + (active ? " bg-primary-200 text-secondary" : ""), 0)}${add_attribute("href", href, 0)}>${slots.default ? slots.default({}) : ``}</a>`;
});
const showModalStore = writable(false);
const css = {
  code: ".button.svelte-yeimer{text-shadow:2px 2px #fff}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $showModalStore, $$unsubscribe_showModalStore;
  $$unsubscribe_showModalStore = subscribe(showModalStore, (value) => $showModalStore = value);
  let { active } = $$props;
  function closeContactModal() {
    showModalStore.set(false);
  }
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  $$result.css.add(css);
  $$unsubscribe_showModalStore();
  return `${$showModalStore ? `${validate_component(ContactForm, "ContactForm").$$render($$result, { closeContactModal }, {}, {})}` : ``} <nav class="${escape(null_to_empty("flex justify-around items-center mr-4 fixed w-full z-40 p-4 rounded-md bg-opacity-50 duration-500"), true) + " svelte-yeimer"}"><div class="bg-stone-500 text-3xl font-normal flex flex-nowrap items-center justify-around" data-svelte-h="svelte-dj199h"><a href="/"><span class="ml-4 font-bold sm:block hidden">Hannes Scheibelauer</span></a></div> <div class="w-1/3 flex justify-around">${validate_component(NavComponent, "NavComponent").$$render($$result, { href: "/", active: active == 1 }, {}, {
    default: () => {
      return `Home`;
    }
  })} ${validate_component(NavComponent, "NavComponent").$$render($$result, { href: "/projects", active: active == 2 }, {}, {
    default: () => {
      return `Projekte`;
    }
  })} ${validate_component(NavComponent, "NavComponent").$$render($$result, { href: "/services", active: active == 3 }, {}, {
    default: () => {
      return `Leistungen`;
    }
  })}</div> <button class="bg-primary-400 rounded-md text-secondary px-4 py-1 font-semibold relative top-0 hover:-top-0.5 duration-300 button svelte-yeimer" data-svelte-h="svelte-igaa9h">Kontakt</button> </nav>`;
});
export {
  Nav as N
};
