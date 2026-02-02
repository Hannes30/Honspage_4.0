import { c as create_ssr_component, b as add_attribute, v as validate_component, d as escape, f as null_to_empty } from "./ssr.js";
const NavComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  return `<a${add_attribute("class", "lg:px-4 px-1 lg:py-1  sm:mr-2  hover:text-secondary-700 hover:bg-primary-200 rounded-md duration-500 font-medium mx-2 text-xl lg:text-2xl", 0)}${add_attribute("href", href, 0)}>${slots.default ? slots.default({}) : ``}</a>`;
});
const css = {
  code: ".NavMenu.svelte-1lgnv99{font-size:36px;font-weight:bold;border-radius:1px;padding:10px 0px;border-top:3px solid rgba(255, 255, 255, 0.5)}.button.svelte-1lgnv99{text-shadow:2px 2px #fff}",
  map: `{"version":3,"file":"Nav.svelte","sources":["Nav.svelte"],"sourcesContent":["<script>\\n  import NavComponent from './NavComponent.svelte'\\n  import { onMount } from 'svelte'\\n\\n  let isNavbarAtTop = true\\n  onMount(() => {\\n    window.addEventListener('scroll', handleScroll)\\n\\n    return () => {\\n      window.removeEventListener('scroll', handleScroll)\\n    }\\n  })\\n\\n  function handleScroll() {\\n    isNavbarAtTop = window.scrollY === 0\\n  }\\n\\n  function closeNav() {\\n    isMenuOpen = false\\n  }\\n<\/script>\\n\\n<nav\\n  class={\`flex justify-center md:justify-around items-center fixed z-40  rounded-md bg-opacity-50 duration-500 w-full gap-5 h-24 \${isNavbarAtTop ? '' : 'md:bg-secondary-700'}\`}\\n>\\n  <div class=\\"w-4/5 flex justify-between items-center\\">\\n    <div\\n      class=\\"hidden font-normal md:flex flex-nowrap items-center justify-center lg:py-2 text-gray-300\\"\\n    >\\n      <a href=\\"/\\"\\n        ><span class=\\" font-bold text-2xl md:text-5xl\\">Hannes Scheibelauer</span\\n        >\\n      </a>\\n    </div>\\n    <div class=\\"md:flex hidden flex-nowrap\\">\\n      <div class=\\" flex-nowrap\\">\\n        <div class=\\"flex justify-center\\">\\n          <NavComponent href=\\"/#offerings\\">Leistungen</NavComponent>\\n          <NavComponent href=\\"/#projects\\">Projekte</NavComponent>\\n        </div>\\n      </div>\\n      <a\\n        href=\\"/#contact\\"\\n        class=\\"bg-primary-400 rounded-md text-secondary-700 button lg:px-4 lg:py-1 px-2 font-semibold top-0 hover:-top-0.5 duration-300 button sm:text-xl lg:text-2xl\\"\\n      >\\n        Kontakt\\n      </a>\\n    </div>\\n  </div>\\n</nav>\\n\\n<style>\\n  .NavMenu {\\n    font-size: 36px;\\n    font-weight: bold;\\n    border-radius: 1px;\\n    padding: 10px 0px;\\n    border-top: 3px solid rgba(255, 255, 255, 0.5);\\n  }\\n  .button {\\n    text-shadow: 2px 2px #fff;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAoDE,uBAAS,CACP,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,CACjB,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,IAAI,CAAC,GAAG,CACjB,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAC/C,CACA,sBAAQ,CACN,WAAW,CAAE,GAAG,CAAC,GAAG,CAAC,IACvB"}`
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="${escape(null_to_empty(`flex justify-center md:justify-around items-center fixed z-40  rounded-md bg-opacity-50 duration-500 w-full gap-5 h-24 ${""}`), true) + " svelte-1lgnv99"}"><div class="w-4/5 flex justify-between items-center"><div class="hidden font-normal md:flex flex-nowrap items-center justify-center lg:py-2 text-gray-300" data-svelte-h="svelte-17ly5xz"><a href="/"><span class="font-bold text-2xl md:text-5xl">Hannes Scheibelauer</span></a></div> <div class="md:flex hidden flex-nowrap"><div class="flex-nowrap"><div class="flex justify-center">${validate_component(NavComponent, "NavComponent").$$render($$result, { href: "/#offerings" }, {}, {
    default: () => {
      return `Leistungen`;
    }
  })} ${validate_component(NavComponent, "NavComponent").$$render($$result, { href: "/#projects" }, {}, {
    default: () => {
      return `Projekte`;
    }
  })}</div></div> <a href="/#contact" class="bg-primary-400 rounded-md text-secondary-700 button lg:px-4 lg:py-1 px-2 font-semibold top-0 hover:-top-0.5 duration-300 button sm:text-xl lg:text-2xl svelte-1lgnv99" data-svelte-h="svelte-l8ovfg">Kontakt</a></div></div> </nav>`;
});
export {
  Nav as N
};
