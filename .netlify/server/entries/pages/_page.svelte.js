import { c as create_ssr_component, b as add_attribute, e as each, d as escape, f as null_to_empty, v as validate_component, g as compute_rest_props, h as spread, i as escape_object, j as escape_attribute_value } from "../../chunks/ssr.js";
import { N as Nav } from "../../chunks/Nav.js";
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
  return void_element_names.test(name) || name.toLowerCase() === "!doctype";
}
const HannesScheibelauerDeckweiss = {
  sources: {
    avif: "/_app/immutable/assets/HannesLaptopNormal.XDc912g8.avif 1736w, /_app/immutable/assets/HannesLaptopNormal.C-hnKm_u.avif 3472w",
    webp: "/_app/immutable/assets/HannesLaptopNormal.CPBxuMOI.webp 1736w, /_app/immutable/assets/HannesLaptopNormal.Cf2eYTrr.webp 3472w",
    png: "/_app/immutable/assets/HannesLaptopNormal.zJHPt7uq.png 1736w, /_app/immutable/assets/HannesLaptopNormal.C4cPlVfj.png 3472w"
  },
  img: {
    src: "/_app/immutable/assets/HannesLaptopNormal.C4cPlVfj.png",
    w: 3472,
    h: 4619
  }
};
const css$4 = {
  code: "@keyframes svelte-1u8jpz7-background{from{background-color:#c2ffea00}to{background-color:#c2ffea}}.backgroundFadeIn.svelte-1u8jpz7{animation-name:svelte-1u8jpz7-background;animation-duration:1s}",
  map: `{"version":3,"file":"LandingScreen.svelte","sources":["LandingScreen.svelte"],"sourcesContent":["<script>\\n  import HannesScheibelauerDeckweiss from '$lib/img/HannesLaptopNormal.webp?enhanced'\\n<\/script>\\n\\n<div class=\\" justify-center flex\\">\\n  <div\\n    class=\\"w-4/5 md:w-full flex flex-wrap mr-10 justify-center items-center lg:items-center lg:flex-nowrap overflow-x-hidden md:pt-24 relative top-[40px] lg:top-10 h-full md:ml-[9.9%]\\"\\n  >\\n    <div class=\\"lg:pb-40 pb-8\\">\\n      <h1 class=\\"md:text-6xl text-4xl xl:text-9xl pb-5\\">Hannes Scheibelauer</h1>\\n      <span class=\\"md:text-5xl leading-tight text-gray-300 text-2xl\\"\\n        >Webdesign, das <span\\n          class=\\" text-secondary-700 bg-primary-200 px-2 rounded-md backgroundFadeIn md:text-5xl text-2xl\\"\\n          >wirkt.</span\\n        >\\n      </span>\\n    </div>\\n    <div class=\\" md:h-full relative md:w-1/2 w-3/4\\">\\n      {#if typeof HannesScheibelauerDeckweiss === 'string'}\\n\\t<img loading=\\"lazy\\" src={HannesScheibelauerDeckweiss.img.src} alt=\\"Hannes Scheibelauer Potrait photo\\" width={HannesScheibelauerDeckweiss.img.w} height={HannesScheibelauerDeckweiss.img.h} />\\n{:else}\\n\\t<picture>\\n\\t\\t{#each Object.entries(HannesScheibelauerDeckweiss.sources) as [format, srcset]}\\n\\t\\t\\t<source {srcset} type={'image/' + format} />\\n\\t\\t{/each}\\n\\t\\t<img loading=\\"lazy\\" src={HannesScheibelauerDeckweiss.img.src} alt=\\"Hannes Scheibelauer Potrait photo\\" width={HannesScheibelauerDeckweiss.img.w} height={HannesScheibelauerDeckweiss.img.h} />\\n\\t</picture>\\n{/if}\\n    </div>\\n  </div>\\n</div>\\n\\n<style>\\n  @keyframes background {\\n    from {\\n      background-color: #c2ffea00;\\n    }\\n    to {\\n      background-color: #c2ffea;\\n    }\\n  }\\n  .backgroundFadeIn {\\n    animation-name: background;\\n    animation-duration: 1s;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAiCE,WAAW,yBAAW,CACpB,IAAK,CACH,gBAAgB,CAAE,SACpB,CACA,EAAG,CACD,gBAAgB,CAAE,OACpB,CACF,CACA,gCAAkB,CAChB,cAAc,CAAE,yBAAU,CAC1B,kBAAkB,CAAE,EACtB"}`
};
const LandingScreen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="justify-center flex"><div class="w-4/5 md:w-full flex flex-wrap mr-10 justify-center items-center lg:items-center lg:flex-nowrap overflow-x-hidden md:pt-24 relative top-[40px] lg:top-10 h-full md:ml-[9.9%]"><div class="lg:pb-40 pb-8" data-svelte-h="svelte-jfyh1u"><h1 class="md:text-6xl text-4xl xl:text-9xl pb-5">Hannes Scheibelauer</h1> <span class="md:text-5xl leading-tight text-gray-300 text-2xl">Webdesign, das <span class="text-secondary-700 bg-primary-200 px-2 rounded-md backgroundFadeIn md:text-5xl text-2xl svelte-1u8jpz7">wirkt.</span></span></div> <div class="md:h-full relative md:w-1/2 w-3/4">${typeof HannesScheibelauerDeckweiss === "string" ? `<img loading="lazy"${add_attribute("src", HannesScheibelauerDeckweiss.img.src, 0)} alt="Hannes Scheibelauer Potrait photo"${add_attribute("width", HannesScheibelauerDeckweiss.img.w, 0)}${add_attribute("height", HannesScheibelauerDeckweiss.img.h, 0)}>` : `<picture>${each(Object.entries(HannesScheibelauerDeckweiss.sources), ([format, srcset]) => {
    return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
  })} <img loading="lazy"${add_attribute("src", HannesScheibelauerDeckweiss.img.src, 0)} alt="Hannes Scheibelauer Potrait photo"${add_attribute("width", HannesScheibelauerDeckweiss.img.w, 0)}${add_attribute("height", HannesScheibelauerDeckweiss.img.h, 0)}></picture>`}</div></div> </div>`;
});
const css$3 = {
  code: ".button.svelte-194o8u{text-shadow:2px 2px #fff}.CTAText.svelte-194o8u{background:-webkit-linear-gradient(45deg, #62bdf9, #02cb8b);-webkit-background-clip:text;-webkit-text-fill-color:transparent}",
  map: `{"version":3,"file":"CallToAction.svelte","sources":["CallToAction.svelte"],"sourcesContent":["<script>\\n  import { onMount } from 'svelte'\\n  export let id\\n  import { animate, inView } from 'motion'\\n\\n  onMount(() => {\\n    inView('.CTAWraper', (info) => {\\n      animate(\\n        info.target,\\n        {\\n          opacity: [0, 1],\\n          transform: ['translateY(100px)', 'translateY(0)'],\\n        },\\n        { delay: 0.3, duration: 0.5 },\\n      )\\n    })\\n  })\\n<\/script>\\n\\n<div class=\\" p-10 pt-20 flex flex-wrap justify-center gap-10 mb-10 CTAWraper\\">\\n  <h2\\n    class=\\"w-full text-center lg:text-7xl font-medium text-white text-5xl CTAText\\"\\n  >\\n    Ein Erstgespräch ist kostenfrei\\n  </h2>\\n  <a\\n    href=\\"/#contact\\"\\n    class=\\"button bg-primary-400 rounded-md text-secondary-700 px-10 py-4 lg:py-6 lg:px-15 text-2xl lg:text-4xl font-bold m-10 mt-3 relative top-0 hover:-top-1 duration-300 CTAButton\\"\\n    {id}\\n  >\\n    Kontaktiere mich\\n  </a>\\n</div>\\n\\n<style>\\n  .button {\\n    text-shadow: 2px 2px #fff;\\n  }\\n  .CTAText {\\n    background: -webkit-linear-gradient(45deg, #62bdf9, #02cb8b);\\n    -webkit-background-clip: text;\\n    -webkit-text-fill-color: transparent;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAmCE,qBAAQ,CACN,WAAW,CAAE,GAAG,CAAC,GAAG,CAAC,IACvB,CACA,sBAAS,CACP,UAAU,CAAE,wBAAwB,KAAK,CAAC,CAAC,OAAO,CAAC,CAAC,OAAO,CAAC,CAC5D,uBAAuB,CAAE,IAAI,CAC7B,uBAAuB,CAAE,WAC3B"}`
};
const CallToAction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  $$result.css.add(css$3);
  return `<div class="p-10 pt-20 flex flex-wrap justify-center gap-10 mb-10 CTAWraper"><h2 class="w-full text-center lg:text-7xl font-medium text-white text-5xl CTAText svelte-194o8u" data-svelte-h="svelte-1gch02x">Ein Erstgespräch ist kostenfrei</h2> <a href="/#contact" class="button bg-primary-400 rounded-md text-secondary-700 px-10 py-4 lg:py-6 lg:px-15 text-2xl lg:text-4xl font-bold m-10 mt-3 relative top-0 hover:-top-1 duration-300 CTAButton svelte-194o8u"${add_attribute("id", id, 0)}>Kontaktiere mich</a> </div>`;
});
const css$2 = {
  code: ".twoThirdText.svelte-t5v1iq{background:-webkit-linear-gradient(45deg, #3bc3cc, #18c9a3);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.secondaryText.svelte-t5v1iq{background:-webkit-linear-gradient(45deg, #46b5d2, #18c9a3);-webkit-background-clip:text;-webkit-text-fill-color:transparent}",
  map: '{"version":3,"file":"FirstCTAText.svelte","sources":["FirstCTAText.svelte"],"sourcesContent":["<div class=\\" flex flex-wrap justify-center\\">\\n  <div class=\\"w-2/3 text-center flex flex-col lg:mb-24\\">\\n    <span class=\\"w-100 twoThirdText font-bold lg:text-[18vw] text-9xl pt-2\\">\\n      ⅔\\n    </span>\\n    <span class=\\"secondaryText font-bold lg:text-8xl\\"\\n      >Aller Firmen sind im Web, warum Sie nicht?</span\\n    >\\n  </div>\\n</div>\\n\\n<style>\\n  .twoThirdText {\\n    background: -webkit-linear-gradient(45deg, #3bc3cc, #18c9a3);\\n    -webkit-background-clip: text;\\n    -webkit-text-fill-color: transparent;\\n  }\\n  .secondaryText {\\n    background: -webkit-linear-gradient(45deg, #46b5d2, #18c9a3);\\n    -webkit-background-clip: text;\\n    -webkit-text-fill-color: transparent;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAYE,2BAAc,CACZ,UAAU,CAAE,wBAAwB,KAAK,CAAC,CAAC,OAAO,CAAC,CAAC,OAAO,CAAC,CAC5D,uBAAuB,CAAE,IAAI,CAC7B,uBAAuB,CAAE,WAC3B,CACA,4BAAe,CACb,UAAU,CAAE,wBAAwB,KAAK,CAAC,CAAC,OAAO,CAAC,CAAC,OAAO,CAAC,CAC5D,uBAAuB,CAAE,IAAI,CAC7B,uBAAuB,CAAE,WAC3B"}'
};
const FirstCTAText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="flex flex-wrap justify-center" data-svelte-h="svelte-1yqmfxk"><div class="w-2/3 text-center flex flex-col lg:mb-24"><span class="w-100 twoThirdText font-bold lg:text-[18vw] text-9xl pt-2 svelte-t5v1iq">⅔</span> <span class="secondaryText font-bold lg:text-8xl svelte-t5v1iq">Aller Firmen sind im Web, warum Sie nicht?</span></div> </div>`;
});
const css$1 = {
  code: ".offerButton.svelte-1m34n67:hover{box-shadow:0px -1px 20px #70ffcd88}.offerButton.svelte-1m34n67{transition-duration:0.5s;box-shadow:0px -1px 5px #70ffcd88}",
  map: `{"version":3,"file":"OfferingsButton.svelte","sources":["OfferingsButton.svelte"],"sourcesContent":["<script>\\n  import { animate, inView } from 'motion'\\n  export let index\\n  export let title\\n  export let changeActiveOffer\\n  export let activeOffer\\n<\/script>\\n\\n<button\\n  id={'offeringsButton' + index}\\n  on:click={() => changeActiveOffer(index)}\\n  class={'px-7 py-2 text-secondary-700 rounded-md md:text-4xl text-2xl font-bold text-center transition-all border-primary-400 border border-3 offerButton' +\\n    (activeOffer == index ? ' bg-primary-400' : ' bg-primary-200')}\\n>\\n  {title}\\n</button>\\n\\n<style>\\n  .offerButton:hover {\\n    box-shadow: 0px -1px 20px #70ffcd88;\\n  }\\n  .offerButton {\\n    transition-duration: 0.5s;\\n    box-shadow: 0px -1px 5px #70ffcd88;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAkBE,2BAAY,MAAO,CACjB,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,IAAI,CAAC,SAC5B,CACA,2BAAa,CACX,mBAAmB,CAAE,IAAI,CACzB,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,GAAG,CAAC,SAC3B"}`
};
const OfferingsButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index } = $$props;
  let { title } = $$props;
  let { changeActiveOffer } = $$props;
  let { activeOffer } = $$props;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.changeActiveOffer === void 0 && $$bindings.changeActiveOffer && changeActiveOffer !== void 0) $$bindings.changeActiveOffer(changeActiveOffer);
  if ($$props.activeOffer === void 0 && $$bindings.activeOffer && activeOffer !== void 0) $$bindings.activeOffer(activeOffer);
  $$result.css.add(css$1);
  return `<button${add_attribute("id", "offeringsButton" + index, 0)} class="${escape(
    null_to_empty("px-7 py-2 text-secondary-700 rounded-md md:text-4xl text-2xl font-bold text-center transition-all border-primary-400 border border-3 offerButton" + (activeOffer == index ? " bg-primary-400" : " bg-primary-200")),
    true
  ) + " svelte-1m34n67"}">${escape(title)} </button>`;
});
const MyOffersSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeOffer = 0;
  let offers = [
    {
      title: "Websites",
      text: "Ich erstelle Websites mit einem frischen, modernen Ansatz, der stets aktuelle Trends und innovative Konzepte berücksichtigt. Durch kreative Designs, responsives Layout und neueste Technologie stelle ich sicher, dass deine Website nicht nur visuell beeindruckend, sondern auch technisch auf dem neuesten Stand ist. Mein Ziel ist es, nicht nur deine Marke optimal zu präsentieren, sondern auch potenzielle Kunden zu begeistern und sie zur Interaktion oder zum Kauf anzuregen. Lass uns gemeinsam eine Website entwickeln, die sowohl deine Vision widerspiegelt als auch deinen Geschäftserfolg steigert!"
    },
    {
      title: "Seo",
      text: "Ich optimiere deine Website mit fortschrittlichen SEO-Strategien, die sicherstellen, dass du bei Google und anderen Suchmaschinen sichtbar wirst. Durch gezielte Keyword-Recherche, technisch einwandfreies Design und hochwertigen Content helfe ich dir, die Reichweite deiner Website zu erhöhen und mehr qualifizierte Besucher anzuziehen. Mein Ziel ist es, deine Website nicht nur gefunden zu machen, sondern auch dein Geschäftswachstum zu fördern."
    },
    {
      title: "Logos",
      text: "Ein Logo ist mehr als nur ein Symbol – es ist das Herzstück deiner Markenidentität. Ich entwickle Logos, die einzigartig und einprägsam sind, und die deine Marke klar und professionell repräsentieren. Mit einem Fokus auf kreative Gestaltung und strategisches Design stelle ich sicher, dass dein Logo auffällt, im Gedächtnis bleibt und einen starken Eindruck hinterlässt. Lass uns gemeinsam ein Logo kreieren, das deine Marke perfekt verkörpert und dich von der Konkurrenz abhebt."
    },
    {
      title: "Flyer",
      text: "Mit ansprechenden Flyern und Plakaten unterstütze ich dich dabei, deine Botschaft effektiv zu kommunizieren und Aufmerksamkeit zu erregen. Egal, ob für Partys, Events oder besondere Anlässe. ich gestalte Materialien, die ins Auge fallen und zur Teilnahme oder zum Kauf anregen. Durch gezielte Gestaltung und durchdachte Inhalte sorge ich dafür, dass deine Druckmaterialien sowohl visuell überzeugend als auch wirkungsvoll sind. Lass uns gemeinsam kreative und einprägsame Designs entwickeln, die deine Zielgruppe begeistern und deine Veranstaltung oder dein Angebot erfolgreich präsentieren."
    }
  ];
  let textContainer;
  let fixedHeight = null;
  function changeActiveOffer(newOfferPosition) {
    activeOffer = newOfferPosition;
  }
  return `<div class="w-full flex flex-col justify-center mt-8 items-center pb-20"><div class="md:w-2/3 w-5/6"><h3 class="text-center text-xl lg:text-3xl font-black pb-6 ido" data-svelte-h="svelte-3amwxy">ich mache ...</h3> <span class="text-center text-5xl lg:text-8xl font-medium mt-4 text-primary-200 idoTitle w-full justify-center flex">${escape(offers[activeOffer].title)}</span> <div class="text-center md:text-2xl text-xl font-semibold text-gray-300 mt-3 idoText" style="${"height: " + escape(fixedHeight, true) + "; overflow: hidden;"}"${add_attribute("this", textContainer, 0)}>${escape(offers[activeOffer].text)}</div> <div class="flex flex-wrap justify-center mt-12 gap-4 buttons">${each(offers, ({ title }, index) => {
    return `${validate_component(OfferingsButton, "OfferingsButton").$$render(
      $$result,
      {
        index,
        title,
        changeActiveOffer,
        activeOffer
      },
      {},
      {}
    )}`;
  })}</div></div></div>`;
});
const css = {
  code: ".quoteMarker.svelte-8xemss{display:inline-block;line-height:1.5;padding:0 20px}.quoteMarker.svelte-8xemss::before,.quoteMarker.svelte-8xemss::after{position:absolute;color:#758a8c;font-size:90px;font-weight:700;line-height:0}.quoteMarker.svelte-8xemss::before{content:'”';left:0px}.quoteMarker.svelte-8xemss::after{content:'„';right:0px}",
  map: `{"version":3,"file":"quote.svelte","sources":["quote.svelte"],"sourcesContent":["<script>\\n  export let quote\\n  import { onMount, tick } from 'svelte'\\n  import { inView, animate } from 'motion'\\n\\n  onMount(async () => {\\n    await tick()\\n    inView('.quoteMarker', (info) => {\\n      animate(\\n        info.target,\\n        { opacity: [0, 1], transform: ['translateY(40px)', 'translateY(0)'] },\\n        { duration: 0.5 },\\n      )\\n    })\\n    inView('.quoteSite', (info) => {  \\n      animate(\\n        info.target,\\n        { opacity: [0, 1], transform: ['translateY(40px)', 'translateY(0)'] },\\n        { delay: 0.15, duration: 0.5 },\\n      )\\n    })\\n    inView('.quoteAuthor', (info) => {\\n      animate(\\n        info.target,\\n        { opacity: [0, 1], transform: ['translateY(40px)', 'translateY(0)'] },\\n        { delay: 0.3, duration: 0.5 },\\n      )\\n    })\\n  })\\n<\/script>\\n\\n<div class=\\"flex flex-col justify-center items-center mb-10 max-w-[80%]\\">\\n  <div class=\\"flex flex-col justify-center items-center text-center gap-4\\">\\n    <div class=\\"relative\\">\\n      <span\\n        class=\\"md:text-3xl text-lg md:leading-loose text-gray-300 quoteMarker\\"\\n        style=\\"opacity:0\\"\\n      >\\n        {quote.text}\\n      </span>\\n    </div>\\n    <a\\n      href={quote.site}\\n      class=\\"underline md:text-2xl text-lg text-primary-300 quoteSite\\"\\n      style=\\"opacity:0\\"\\n    >\\n      {quote.site}\\n    </a>\\n    <span\\n      class=\\"text-gray-400 md:text-xl text-base quoteAuthor\\"\\n      style=\\"opacity:0\\"\\n    >\\n      - {quote.author}\\n    </span>\\n  </div>\\n</div>\\n\\n<style>\\n  .quoteMarker {\\n    display: inline-block;\\n    line-height: 1.5;\\n    padding: 0 20px;\\n  }\\n\\n  .quoteMarker::before,\\n  .quoteMarker::after {\\n    position: absolute;\\n    color: #758a8c;\\n    font-size: 90px;\\n    font-weight: 700;\\n    line-height: 0;\\n  }\\n\\n  .quoteMarker::before {\\n    content: '”';\\n    left: 0px;\\n  }\\n\\n  .quoteMarker::after {\\n    content: '„';\\n    right: 0px;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA0DE,0BAAa,CACX,OAAO,CAAE,YAAY,CACrB,WAAW,CAAE,GAAG,CAChB,OAAO,CAAE,CAAC,CAAC,IACb,CAEA,0BAAY,QAAQ,CACpB,0BAAY,OAAQ,CAClB,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,CACf,CAEA,0BAAY,QAAS,CACnB,OAAO,CAAE,GAAG,CACZ,IAAI,CAAE,GACR,CAEA,0BAAY,OAAQ,CAClB,OAAO,CAAE,GAAG,CACZ,KAAK,CAAE,GACT"}`
};
const Quote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { quote } = $$props;
  if ($$props.quote === void 0 && $$bindings.quote && quote !== void 0) $$bindings.quote(quote);
  $$result.css.add(css);
  return `<div class="flex flex-col justify-center items-center mb-10 max-w-[80%]"><div class="flex flex-col justify-center items-center text-center gap-4"><div class="relative"><span class="md:text-3xl text-lg md:leading-loose text-gray-300 quoteMarker svelte-8xemss" style="opacity:0">${escape(quote.text)}</span></div> <a${add_attribute("href", quote.site, 0)} class="underline md:text-2xl text-lg text-primary-300 quoteSite" style="opacity:0">${escape(quote.site)}</a> <span class="text-gray-400 md:text-xl text-base quoteAuthor" style="opacity:0">- ${escape(quote.author)}</span></div> </div>`;
});
const Quotes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let quotes = [
    {
      author: "Christina Zehetner",
      text: "Die Zusammenarbeit mit Hannes war von Anfang an sehr klar und strukturiert. Ich konnte mich gut auf ihn verlassen, dass alles im vereinbarten Zeitrahmen und in hoher Qualität abgeschlossen wird. Ich bin mit dem Endergebnis sehr zufrieden und würde ihn jederzeit weiterempfehlen!",
      site: "https://www.christinazehetner.at/"
    }
  ];
  return `<div class="lg:pt-10 w-full flex justify-center items-center">${each(quotes, (quote) => {
    return `${validate_component(Quote, "Quote").$$render($$result, { quote }, {}, {})}`;
  })}</div>`;
});
const Banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { image } = $$props;
  let { index } = $$props;
  let { text } = $$props;
  let { route } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  if ($$props.route === void 0 && $$bindings.route && route !== void 0) $$bindings.route(route);
  return `<div${add_attribute("class", "justify-center flex w-full bannerWrapper" + index, 0)}><a class="wrapper flex justify-center"${add_attribute("href", route, 0)}><div class="relative group overflow-hidden object-cover"><img loading="lazy"${add_attribute("src", image, 0)}${add_attribute("alt", "Banner Image of " + name, 0)} class="rounded-md object-cover">  <div class="absolute inset-0 bg-secondary-700/20 pointer-events-none rounded-md"></div> <div class="absolute bottom-2 lg:-bottom-28 rounded-md bg-gradient-to-tr from-secondary-700/70 to-secondary-700/30 bg-opacity-70 p-2 left-2 group-hover:transform lg:group-hover:-translate-y-32 transition duration-500 max-w-60 sm:max-w-full lg:p-4"><span class="lg:text-3xl sm:text-2xl text-lg text-primary-100">${escape(name)}</span> <p class="text-primary-100/70 font-light text-sm sm:text-lg lg:text-xl text-ellipsis line-clamp-1">${escape(text)}</p></div></div></a></div>`;
});
const projects = [
  {
    title: "Christina Zehetner",
    url: "https://www.christinazehetner.at/",
    description: "Portfolio Website",
    cover: "/img/projects/ChrZeh.webp"
  },
  {
    title: "Scheichelbauer Hof",
    url: "https://scheichelbauer-hof.at/",
    description: "Homepage, Online Produktkatalog",
    cover: "/img/projects/SchBau.webp"
  },
  {
    title: "Sportvereine VHP",
    url: "https://www.sportvereine-vhp.at/",
    description: "Homepage für die Sporvereine der Verbund AG",
    cover: "/img/projects/Vhp.webp"
  },
  {
    title: "Musikschule Yspertal - südl. Waldviertel",
    url: "https://www.musikschule.yspertal.com",
    description: "Homepage für Musikschule Yspertal - südl. Waldviertel",
    cover: "/img/projects/Musikschule.webp"
  }
];
function chunk(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}
const ProjectShowcase = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let rows;
  rows = chunk(projects, 2);
  return `<div class="w-full flex justify-center items-center flex-wrap gap-2 mb-14 lg:mb-20 lg:py-10 h-full" id="projects"><h3 class="text-center text-3xl lg:text-5xl font-bold pb-10 projectHeading w-full" data-svelte-h="svelte-pb3axw">Ein kurzer Einblick in meine Arbeit</h3> <div class="justify-center flex flex-wrap w-4/5 gap-10">${each(rows, (row) => {
    return `<div class="flex gap-10 lg:flex-row flex-col">${each(row, (project, index) => {
      return `${validate_component(Banner, "Banner").$$render(
        $$result,
        {
          name: project.title,
          index,
          image: project.cover,
          text: project.description,
          route: project.url
        },
        {},
        {}
      )}`;
    })} </div>`;
  })}</div> </div>`;
});
/**
 * @license lucide-svelte v0.473.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["name", "color", "size", "strokeWidth", "absoluteStrokeWidth", "iconNode"]);
  let { name = void 0 } = $$props;
  let { color = "currentColor" } = $$props;
  let { size = 24 } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { absoluteStrokeWidth = false } = $$props;
  let { iconNode = [] } = $$props;
  const mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && array.indexOf(className) === index;
  }).join(" ");
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0) $$bindings.strokeWidth(strokeWidth);
  if ($$props.absoluteStrokeWidth === void 0 && $$bindings.absoluteStrokeWidth && absoluteStrokeWidth !== void 0) $$bindings.absoluteStrokeWidth(absoluteStrokeWidth);
  if ($$props.iconNode === void 0 && $$bindings.iconNode && iconNode !== void 0) $$bindings.iconNode(iconNode);
  return `<svg${spread(
    [
      escape_object(defaultAttributes),
      escape_object($$restProps),
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { stroke: escape_attribute_value(color) },
      {
        "stroke-width": escape_attribute_value(absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth)
      },
      {
        class: escape_attribute_value(mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$props.class))
      }
    ],
    {}
  )}>${each(iconNode, ([tag, attrs]) => {
    return `${((tag$1) => {
      return tag$1 ? `<${tag}${spread([escape_object(attrs)], {})}>${is_void(tag$1) ? "" : ``}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
    })(tag)}`;
  })}${slots.default ? slots.default({}) : ``}</svg>`;
});
const Mail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "20",
        "height": "16",
        "x": "2",
        "y": "4",
        "rx": "2"
      }
    ],
    [
      "path",
      {
        "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "mail" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Map_pin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
      }
    ],
    ["circle", { "cx": "12", "cy": "10", "r": "3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "map-pin" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Phone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "phone" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const HannesScheibelauerCrazy = {
  sources: {
    avif: "/_app/immutable/assets/HannesLaptopStart.Dnvw-8Ay.avif 1512w, /_app/immutable/assets/HannesLaptopStart.CaBw48J3.avif 3024w",
    webp: "/_app/immutable/assets/HannesLaptopStart.DOJoKekn.webp 1512w, /_app/immutable/assets/HannesLaptopStart.mL-uN9Ky.webp 3024w",
    png: "/_app/immutable/assets/HannesLaptopStart.DygGkMxV.png 1512w, /_app/immutable/assets/HannesLaptopStart.CFC-3pcb.png 3024w"
  },
  img: {
    src: "/_app/immutable/assets/HannesLaptopStart.CFC-3pcb.png",
    w: 3024,
    h: 2876
  }
};
const email = "kontakt@hannes-scheibelauer.at";
const subject = "Interesse an einer Zusammenarbeit";
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const body = `Hallo Hannes,

ich bin an einer Zusammenarbeit interessiert und möchte gemeinsam mit dir eine moderne und wirkungsvolle Online-Präsenz entwickeln. 
Ich freue mich auf ein unverbindliches Erstgespräch, um die Details zu besprechen.

Viele Grüße,
[Ihr Name]`;
  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return `<div class="w-full flex justify-center items-center mt-20" id="contact"><div class="flex justify-center items-end lg:ml-16 ml-10 lg:mr-0 mr-10 lg:flex-nowrap flex-wrap"><div class="flex-2 flex flex-col gap-10 pb-10 lg:items-start lg:text-left text-left contactText" style="opacity:0"><h3 class="xl:text-5xl sm:text-4xl text-3xl font-bold lg:mb-6" data-svelte-h="svelte-13c7djp">Lass uns ein Projekt starten!</h3> <div class="flex flex-col gap-10 lg:justify-normal justify-center items-start w-max"><div class="flex justify-left items-center whitespace-nowrap gap-2 sm:gap-6">${validate_component(Map_pin, "MapPin").$$render($$result, { class: "inline w-8 h-8 lg:w-10 lg:h-10" }, {}, {})} <span class="font-semibold text-lg sm:text-xl lg:text-3xl xl:text-4xl text-gray-100" data-svelte-h="svelte-95l7e6">3250 Mühling, Österreich</span></div> <div class="flex items-center gap-2 sm:gap-6">${validate_component(Mail, "Mail").$$render($$result, { class: "inline w-8 h-8 lg:w-10 lg:h-10" }, {}, {})} <a${add_attribute("href", mailto, 0)} class="font-semibold text-lg sm:text-xl lg:text-3xl xl:text-4xl underline hover:text-primary-400 duration-300 whitespace-nowrap text-gray-100">kontakt@hannes-scheibelauer.at</a></div> <div class="flex items-center whitespace-nowrap gap-2 sm:gap-6">${validate_component(Phone, "PhoneIcon").$$render($$result, { class: "inline w-8 h-8 lg:w-10 lg:h-10" }, {}, {})} <a href="tel:+43 670 2018717" class="font-semibold text-lg sm:text-xl lg:text-3xl underline hover:text-primary-400 duration-300 whitespace-nowrap xl:text-4xl text-gray-100" data-svelte-h="svelte-hc064l">0670 2018717</a></div> </div></div> <div class="h-full lg:w-1/3 contactImage" style="opacity:0">${typeof HannesScheibelauerCrazy === "string" ? `<img loading="lazy"${add_attribute("src", HannesScheibelauerCrazy.img.src, 0)} alt="Hannes Scheibelauer Portrait photo" style="height: 100%; object-fit: contain; max-height: 500px;" class="rounded-lg"${add_attribute("width", HannesScheibelauerCrazy.img.w, 0)}${add_attribute("height", HannesScheibelauerCrazy.img.h, 0)}>` : `<picture>${each(Object.entries(HannesScheibelauerCrazy.sources), ([format, srcset]) => {
    return `<source${add_attribute("srcset", srcset, 0)}${add_attribute("type", "image/" + format, 0)}>`;
  })} <img loading="lazy"${add_attribute("src", HannesScheibelauerCrazy.img.src, 0)} alt="Hannes Scheibelauer Portrait photo" style="height: 100%; object-fit: contain; max-height: 500px;" class="rounded-lg"${add_attribute("width", HannesScheibelauerCrazy.img.w, 0)}${add_attribute("height", HannesScheibelauerCrazy.img.h, 0)}></picture>`}</div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-136t6zw_START -->${$$result.title = `<title>Home - Hannes Scheibelauer</title>`, ""}<!-- HEAD_svelte-136t6zw_END -->`, ""} <div class="w-full overflow-x-hidden">${validate_component(Nav, "Nav").$$render($$result, { active: "1" }, {}, {})} ${validate_component(LandingScreen, "LandingScreen").$$render($$result, {}, {}, {})} <div class="relative"><div class="overflow-hidden" data-svelte-h="svelte-6bzwmp"><div class="bg-secondary-700 -rotate-1 h-12 w-full relative top-6 overflow-x-hidden"></div></div> <div class="bg-secondary-700 overflow-x-hidden h-max">${validate_component(FirstCTAText, "FirstCtaText").$$render($$result, {}, {}, {})} ${validate_component(CallToAction, "CallToAction").$$render($$result, { id: "offerings" }, {}, {})} ${validate_component(ProjectShowcase, "ProjectShowcase").$$render($$result, {}, {}, {})} ${validate_component(Quotes, "Quotes").$$render($$result, {}, {}, {})} ${validate_component(MyOffersSection, "MyOffersSection").$$render($$result, {}, {}, {})} ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}</div></div></div>`;
});
export {
  Page as default
};
