import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const logo = "/_app/immutable/assets/Logo_without_text.74l-q47g.png";
const css$1 = {
  code: "a.svelte-se08wc:hover{background-color:#c2ffea}a.svelte-se08wc{padding:5px;border-radius:6px;transition:background-color 0.2s}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="mt-20 bg-primary-400 text-secondary p-5" data-svelte-h="svelte-1rf1242"><div class="text-2xl font-medium text-center sm:text-3xl">© Hannes Scheibelauer</div> <div class="flex justify-around"><div class="text-l sm:leading-loose sm:text-xl leading-7"><div class="text-3xl font-medium leading-tight">Contact </div><p class="py-2">Hannes Scheibelauer</p> <p class="py-2">kontakt@hannes-scheibelauer.at</p> <p class="py-2">0670 2018717</p></div> <div class="text-l sm:leading-loose sm:text-xl leading-7"><div class="text-3xl font-medium leading-tight p-1">Pages</div> <p class="text-2xl opacity-80 py-2"><a href="/" class="svelte-se08wc">Home</a></p> <p class="text-2xl opacity-80 py-2"><a href="/projects" class="svelte-se08wc">Projekte</a></p> <p class="text-2xl opacity-80 py-2"><a href="/services" class="svelte-se08wc">Leistungen</a></p> <p class="text-2xl opacity-80 py-2"><a href="/impressum" class="svelte-se08wc">Impressum</a></p></div></div> </footer>`;
});
const css = {
  code: ".body.svelte-1p66dub{min-height:100vh;color:white;background:linear-gradient(90deg,#022034,#054D4D)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1th4byg_START --><link rel="icon" type="image/x-icon"${add_attribute("href", logo, 0)}><meta name="description" content="Portfolio Seite von Hannes Scheibelauer, ein Web Developer aus Niederösterreich"><meta name="keywords" content="Hannes Scheibelauer, Scheibelauer, Website Erstellen, Web Developer, Webdesign Mostviertel, Wieselburg Webentwicklung, Responsive Webseiten, Niederösterreich Webdesign, Online-Präsenz gestalten, SEO-optimierte Webseiten, Maßgeschneiderte Websites, E-Commerce Lösungen, Lokale Unternehmenswebseiten, Webentwickler Dienstleistungen, Content-Management-Systeme, Web-Branding, Grafikdesign für Webseiten, Nutzerfreundliches Design, Mobile-optimierte Seiten, Online-Marketing, Social-Media-Integration, Blog-Integration, Webseiten-Wartung"><meta name="robots" content="index, follow"><meta property="og:title" content="Portfolio Website von Hannes Scheibelauer"><meta property="og:description" content="Hannes Scheibelauer ist ein Web Developer aus Niederösterreich. Er erstellt Websites und Web Apps für Firmen und Privatpersonen."><meta property="og:image" content="https://hannes-scheibelauer.at/logo.png"><script async${add_attribute("src", `https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`, 0)}><\/script><script${add_attribute(
    "dangerouslysetinnerhtml",
    {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.GA_TRACKING_ID}');
      `
    },
    0
  )}><\/script><!-- HEAD_svelte-1th4byg_END -->`, ""} <div class="body bg-black svelte-1p66dub">${``} <div>${slots.default ? slots.default({}) : ``}</div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Layout as default
};
