import { c as create_ssr_component, d as compute_rest_props, g as getContext, f as spread, h as escape_object, i as escape_attribute_value, a as add_attribute, b as escape, e as each, v as validate_component } from "../../../../chunks/ssr.js";
import { N as Nav } from "../../../../chunks/Nav.js";
/* empty css                                                     */
import { twMerge } from "tailwind-merge";
const CheckOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { ariaLabel = "check outline" } = $$props;
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
  )}><path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="m5 12 4.7 4.5 9.3-9"></path></svg> `;
});
const css = {
  code: ".button.svelte-jmppx4{text-shadow:2px 2px #fff}.lines.svelte-jmppx4{line-height:1}",
  map: null
};
const Pricing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { benefits } = $$props;
  let { name } = $$props;
  let { price } = $$props;
  if ($$props.benefits === void 0 && $$bindings.benefits && benefits !== void 0)
    $$bindings.benefits(benefits);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.price === void 0 && $$bindings.price && price !== void 0)
    $$bindings.price(price);
  $$result.css.add(css);
  return `<div class="border border-primary-400 rounded-md p-10 xl:w-1/4 w-96 bg-secondary h-min mb-2 lg:m-0 m-4"><h2 class="text-4xl w-full text-center py-2">${escape(name)}</h2> <div class="w-full text-center text-4xl font-bold text-primary-400 py-3">€${escape(price)} ${slots.default ? slots.default({}) : ``}</div> <div class="text-center flex flex-wrap py-2">${each(benefits, (benefit) => {
    return `<div class="w-full justify-around m-2">${validate_component(CheckOutline, "CheckOutline").$$render(
      $$result,
      {
        class: " w-12 h-12 inline-block text-primary-400"
      },
      {},
      {}
    )} <span class="text-lg lines lg:text-2xl svelte-jmppx4">${escape(benefit)} </span></div> `;
  })}</div> <button class="px-6 py-2 font-semibold bg-primary-400 rounded-md button text-black text-3xl mt-5 h-16 relative hover:-top-1 transition-all -top-0 duration-500 svelte-jmppx4" data-svelte-h="svelte-qboso8">Kontaktieren</button> </div>`;
});
const WebDevPricing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const pricingModels = [
    {
      name: "Web-Starter",
      price: 650,
      benefits: [
        "3-5 Seiten",
        "Responsive - für mobile Geräte optimiert",
        "Grundlegende SEO-Optimierung",
        "WCAG konform"
      ]
    },
    {
      name: "Business Website Plus",
      price: 1150,
      benefits: [
        "5-7 Seiten mit professionellem Design",
        "Bildergalerie",
        "Content Managment System(CMS)",
        "Best mögliche SEO-Optimierung",
        "eigene 404 Fehlerseite",
        "WCAG konform"
      ]
    },
    {
      name: "E-Commerce Pro",
      price: 2050,
      benefits: [
        "E-Commerce-Funktionalität mit Produktdarstellung, Warenkorb und Checkout",
        "Zahlungsgateway-Integration (z.B., PayPal, Stripe)",
        "Produktbilder und -beschreibungen",
        "Kundenkonto und einfache Bestellverfolgung",
        "WCAG konform"
      ]
    }
  ];
  return `<div class="w-full text-center justify-center flex flex-wrap"><h2 class="w-full mb-10" data-svelte-h="svelte-xdsv8n">Pakete</h2> <div class="w-full flex justify-center flex-wrap lg:flex-nowrap">${each(pricingModels, (pricingModel) => {
    return `${validate_component(Pricing, "Pricing").$$render(
      $$result,
      {
        name: pricingModel.name,
        benefits: pricingModel.benefits,
        price: pricingModel.price
      },
      {},
      {}
    )}`;
  })}</div></div>`;
});
const WebHostingPricing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const pricingModels = [
    {
      name: "Basis-Hosting",
      price: 15,
      benefits: ["Kostenloses Domain-Setup", "Kostenloses SSL-Zertifikat", "Kundensupport"]
    },
    {
      name: "Business-Hosting",
      price: 25,
      benefits: [
        "Unbegrenzter Datenverkehr",
        "Kostenloses Domain-Setup",
        "Kostenloses SSL-Zertifikat",
        "Regelmäßige Backups",
        "24/7 Kundensupport"
      ]
    },
    {
      name: "E-Commerce-Hosting",
      price: "50+",
      benefits: [
        "Sicheres E-Commerce-Setup",
        "Integration von Zahlungs-Gateways (z.B., PayPal, Stripe)",
        "Kostenloses SSL-Zertifikat",
        "Kundensupport"
      ]
    }
  ];
  return `<div class="w-full text-center justify-center flex flex-wrap"><h2 class="w-full mb-10" data-svelte-h="svelte-xdsv8n">Pakete</h2> <div class="w-full flex justify-center flex-wrap lg:flex-nowrap">${each(pricingModels, (pricingModel) => {
    return `${validate_component(Pricing, "Pricing").$$render(
      $$result,
      {
        name: pricingModel.name,
        benefits: pricingModel.benefits,
        price: pricingModel.price
      },
      {},
      {
        default: () => {
          return `<span class="text-2xl" data-svelte-h="svelte-ed5xup">/Monat</span>`;
        }
      }
    )}`;
  })}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-v922bh_START -->${$$result.title = `<title>${escape(data.services.name)} - Hannes Scheibelauer</title>`, ""}<!-- HEAD_svelte-v922bh_END -->`, ""} ${validate_component(Nav, "Nav").$$render($$result, { active: "3" }, {}, {})} <div class="pt-16 flex justify-center flex-wrap"><h1 class="w-full text-center">${escape(data.services.name)}</h1> <span class="text-center lg:text-3xl w-3/4 py-16 text-lg">${escape(data.services.text)}</span> ${data.services.name == "Web Development" ? `${validate_component(WebDevPricing, "WebDevPricing").$$render($$result, {}, {}, {})}` : `${data.services.name == "Web Hosting" ? `${validate_component(WebHostingPricing, "WebHostingPricing").$$render($$result, {}, {}, {})}` : ``}`}</div>`;
});
export {
  Page as default
};
